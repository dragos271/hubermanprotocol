import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDashboardSummary } from "@/lib/dashboard-data";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { userId = session.user.id } = (await request.json().catch(() => ({}))) as {
      userId?: string;
    };

    const digestSettings = await prisma.digestSettings.findUnique({
      where: { userId },
    });

    if (!digestSettings || !digestSettings.enabled) {
      return NextResponse.json({ error: "Digest disabled." }, { status: 400 });
    }

    const summary = await getDashboardSummary();
    if (!summary) {
      return NextResponse.json({ error: "Unable to load dashboard summary." }, { status: 500 });
    }

    const html = `
      <h1>Huberman Protocol Digest</h1>
      <p>Next best move: ${summary.nextBestMove?.title ?? "Keep your anchors consistent."}</p>
      <p>${summary.nextBestMove?.description ?? ""}</p>
      <h2>Streaks</h2>
      <ul>
        ${summary.anchorSummaries
          .map(
            (anchor) =>
              `<li>${anchor.anchorText}: ${anchor.streak} day streak, ${anchor.weeklyPercent}% this week.</li>`
          )
          .join("")}
      </ul>
      <h2>Metrics</h2>
      <ul>
        ${summary.metricInsights
          .map((metric) => `<li>${metric.label}: ${metric.deltaLabel} - ${metric.message}</li>`)
          .join("")}
      </ul>
    `;

    await prisma.digestSettings.update({
      where: { userId },
      data: { lastSentAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      html,
    });
  } catch (error) {
    console.error("Failed to generate digest", error);
    return NextResponse.json({ error: "Failed to generate digest." }, { status: 500 });
  }
}
