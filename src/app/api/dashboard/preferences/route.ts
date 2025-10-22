import { NextResponse } from "next/server";
import type { MetricType } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDashboardSummary } from "@/lib/dashboard-data";

const METRIC_TYPES: MetricType[] = [
  "sleep_latency",
  "sleep_quality",
  "energy_stability",
  "focus_blocks",
  "mood_state",
  "stress_load",
];

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { goalId, metrics } = body ?? {};

    if (!goalId || !Array.isArray(metrics)) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const filteredMetrics = Array.from(
      new Set(
        metrics.filter((metric: MetricType) => METRIC_TYPES.includes(metric)).slice(0, 4)
      )
    );

    if (filteredMetrics.length === 0) {
      return NextResponse.json({ error: "Select at least one metric." }, { status: 400 });
    }

    await prisma.$transaction([
      prisma.goalMetricPreference.deleteMany({
        where: {
          userId: session.user.id,
          goalId,
        },
      }),
      prisma.goalMetricPreference.createMany({
        data: filteredMetrics.map((metric: MetricType) => ({
          userId: session.user.id,
          goalId,
          metric,
        })),
      }),
    ]);

    const summary = await getDashboardSummary();
    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Failed to update goal metrics", error);
    return NextResponse.json({ error: "Unable to update metrics." }, { status: 500 });
  }
}
