import Link from "next/link";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import DashboardEnhancements from "./DashboardEnhancements";
import { getDashboardSummary } from "@/lib/dashboard-data";

const SESSION_COOKIE = "hp_protocol_session";

export const metadata = {
  title: "Your Protocols – Huberman Protocol",
  description: "Review and manage your saved Huberman Protocol routines.",
};

async function getProtocols() {
  const session = await getServerSession(authOptions);
  const sessionToken = cookies().get(SESSION_COOKIE)?.value ?? null;

  if (!session?.user?.id && !sessionToken) {
    return [];
  }

  const orFilters = [];
  if (session?.user?.id) {
    orFilters.push({ userId: session.user.id });
  }
  if (sessionToken) {
    orFilters.push({ sessionToken });
  }

  return prisma.protocol.findMany({
    where: orFilters.length ? { OR: orFilters } : undefined,
    orderBy: { createdAt: "desc" },
  });
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userFirstName = (() => {
    const fullName = session?.user?.name;
    if (fullName && fullName.trim().length > 0) {
      return fullName.split(" ")[0];
    }
    const email = session?.user?.email;
    return email ? email.split("@")[0] : null;
  })();
  const protocols = await getProtocols();
  const latestProtocol = protocols[0] ?? null;
  const activeGoals = Array.from(
    new Set(
      Array.isArray(latestProtocol?.goals)
        ? latestProtocol.goals.filter((goal) => typeof goal === "string")
        : []
    )
  );
  const summary = await getDashboardSummary({
    protocolId: latestProtocol?.id,
  });

  return (
    <main style={{ maxWidth: "960px", margin: "0 auto", padding: "120px 24px" }}>
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700 }}>
          {userFirstName ? `Welcome back, ${userFirstName}` : "Your Protocols"}
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "640px", marginTop: "12px", lineHeight: 1.6 }}>
          Review and refine the routines you’ve saved. Expect streak tracking, adaptive nudges, and richer insights as we keep building.
        </p>
      </header>

      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "28px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(138,180,255,0.35)",
            background: "rgba(11,18,32,0.6)",
            color: "var(--text)",
            fontWeight: 600,
            boxShadow: "0 16px 32px rgba(11,18,32,0.32)",
          }}
        >
          <span>←</span>
          <span>Back to Huberman Protocol</span>
        </Link>
        <Link
          href="/#pillars"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, rgba(138,180,255,0.85), rgba(214,107,255,0.9))",
            color: "#0b1220",
            fontWeight: 700,
            boxShadow: "0 18px 40px rgba(138,180,255,0.28)",
          }}
        >
          <span>Explore protocols</span>
          <span style={{ fontSize: "1.1em" }}>→</span>
        </Link>
      </nav>

      {protocols.length === 0 ? (
        <section
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "32px",
          }}
        >
          <h2 style={{ margin: "0 0 12px 0" }}>No saved protocols yet</h2>
          <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
            Launch the wizard to craft your personalised Huberman Protocol.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              gap: "8px",
              alignItems: "center",
              padding: "12px 20px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, rgba(138,180,255,0.85), rgba(214,107,255,0.9))",
              color: "#0b1220",
              fontWeight: 600,
            }}
          >
            <span>🚀 Start a protocol</span>
          </Link>
        </section>
      ) : (
        <section style={{ display: "grid", gap: "18px" }}>
          {protocols.map((protocol) => {
            const { goals, plan, metadata } = protocol;
            const parsedGoals = Array.isArray(goals) ? goals : [];
            const castPlan = typeof plan === "object" && plan !== null ? plan : {};

            return (
              <article
                key={protocol.id}
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "24px 28px",
                }}
              >
                <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {parsedGoals.map((goal) => (
                      <span
                        key={goal}
                        style={{
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background: "rgba(138,180,255,0.18)",
                          border: "1px solid rgba(138,180,255,0.4)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          textTransform: "capitalize",
                        }}
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    Saved {formatDate(protocol.createdAt)}
                  </span>
                </header>

                <div style={{ display: "grid", gap: "12px", color: "var(--muted)" }}>
                  {[(castPlan.morning ?? []), (castPlan.daytime ?? []), (castPlan.evening ?? [])]
                    .map((items, index) => {
                      const titles = ["Morning", "Daytime", "Evening"];
                      if (!Array.isArray(items) || items.length === 0) return null;
                      return (
                        <div key={titles[index]}>
                          <h3 style={{ margin: "0 0 8px 0", color: "var(--text)", fontSize: "1rem" }}>
                            {titles[index]} anchors
                          </h3>
                          <ul style={{ margin: 0, paddingLeft: "20px", display: "grid", gap: "4px" }}>
                            {items.map((item) => (
                              <li key={`${titles[index]}-${item}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                </div>

                {metadata && typeof metadata === "object" && (
                  <footer style={{ marginTop: "16px", color: "var(--muted)", fontSize: "0.85rem" }}>
                    <strong>Context:</strong> {metadata.availableTime} / {metadata.schedule}
                  </footer>
                )}
              </article>
            );
          })}
        </section>
      )}

      {latestProtocol && summary && (
        <DashboardEnhancements
          summary={summary}
          goals={activeGoals}
          latestProtocol={latestProtocol}
        />
      )}
    </main>
  );
}
