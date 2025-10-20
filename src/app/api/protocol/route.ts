import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

type ProtocolPayload = {
  goals: string[];
  plan: unknown;
  metadata?: Record<string, unknown>;
  userId?: string | null;
  sessionToken?: string | null;
};

const SESSION_COOKIE = "hp_protocol_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = (await request.json()) as ProtocolPayload;
    const { goals, plan, metadata = {}, sessionToken: incomingToken } = body;

    if (!Array.isArray(goals) || goals.length === 0) {
      return NextResponse.json({ error: "At least one goal must be selected." }, { status: 400 });
    }

    if (typeof plan === "undefined") {
      return NextResponse.json({ error: "Missing protocol plan." }, { status: 400 });
    }

    const cookieStore = cookies();
    let sessionToken = incomingToken ?? cookieStore.get(SESSION_COOKIE)?.value ?? null;

    if (!session?.user?.id && !sessionToken) {
      sessionToken = crypto.randomUUID();
    }

    const protocol = await prisma.protocol.create({
      data: {
        userId: session?.user?.id ?? null,
        sessionToken,
        goals,
        plan,
        metadata,
      },
    });

    const response = NextResponse.json({
      success: true,
      protocolId: protocol.id,
      sessionToken,
      savedAt: protocol.createdAt,
    });

    if (!session?.user?.id && sessionToken && !cookieStore.get(SESSION_COOKIE)) {
      response.cookies.set({
        name: SESSION_COOKIE,
        value: sessionToken,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: COOKIE_MAX_AGE,
        path: "/",
      });
    }

    return response;
  } catch (error) {
    console.error("Failed to save protocol", error);
    return NextResponse.json({ error: "Failed to save protocol." }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const session = await getServerSession(authOptions);
  const userId = searchParams.get("userId") ?? session?.user?.id ?? undefined;
  const sessionToken =
    searchParams.get("sessionToken") ?? cookies().get(SESSION_COOKIE)?.value ?? undefined;

  if (!userId && !sessionToken) {
    return NextResponse.json({ error: "Provide userId or sessionToken." }, { status: 400 });
  }

  try {
    const protocols = await prisma.protocol.findMany({
      where: {
        OR: [
          userId ? { userId } : undefined,
          sessionToken ? { sessionToken } : undefined,
        ].filter(Boolean) as [{ userId: string } | { sessionToken: string }],
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ protocols });
  } catch (error) {
    console.error("Failed to fetch protocols", error);
    return NextResponse.json({ error: "Failed to fetch protocols." }, { status: 500 });
  }
}
