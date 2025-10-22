import { NextResponse } from "next/server";
import type { DigestCadence } from "@prisma/client";
import { updateDigestPreference } from "@/lib/dashboard-data";

const DIGEST_OPTIONS: DigestCadence[] = ["weekly", "biweekly", "monthly"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { enabled, cadence } = body ?? {};

    if (cadence && !DIGEST_OPTIONS.includes(cadence)) {
      return NextResponse.json({ error: "Invalid cadence." }, { status: 400 });
    }

    const summary = await updateDigestPreference({
      enabled: typeof enabled === "boolean" ? enabled : undefined,
      cadence,
    });

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Failed to update digest preference", error);
    return NextResponse.json({ error: "Failed to update digest settings." }, { status: 500 });
  }
}
