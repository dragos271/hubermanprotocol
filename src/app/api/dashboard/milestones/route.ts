import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDashboardSummary } from "@/lib/dashboard-data";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { milestoneId, dismissed = true } = body ?? {};

    if (!milestoneId) {
      return NextResponse.json({ error: "Missing milestoneId." }, { status: 400 });
    }

    const milestone = await prisma.progressMilestone.findFirst({
      where: {
        id: milestoneId,
        userId: session.user.id,
      },
    });

    if (!milestone) {
      return NextResponse.json({ error: "Milestone not found." }, { status: 404 });
    }

    await prisma.progressMilestone.update({
      where: { id: milestoneId },
      data: {
        dismissedAt: dismissed ? new Date() : null,
      },
    });

    const summary = await getDashboardSummary();
    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Failed to update milestone", error);
    return NextResponse.json({ error: "Unable to update milestone." }, { status: 500 });
  }
}
