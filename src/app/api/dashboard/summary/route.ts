import { getDashboardSummary } from "@/lib/dashboard-data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const summary = await getDashboardSummary();
    if (!summary) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.log("Dashboard summary snapshot", {
      anchorCount: summary.anchorSummaries.length,
      timelineCount: summary.timeline.length,
      metricCount: summary.metricInsights.length,
      goalCount: summary.goalCards.length,
      milestoneCount: summary.milestones.length,
    });
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Failed to load dashboard summary", error);
    return NextResponse.json({ error: "Failed to load dashboard." }, { status: 500 });
  }
}
