export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const [leadsCount, quotesCount, projectsCount, pendingQuotes] = await Promise.all([
      prisma.lead.count(),
      prisma.quote.count(),
      prisma.project.count(),
      prisma.quote.count({ where: { status: "pending" } }),
    ]);

    const recentLeads = await prisma.lead.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    });

    const recentQuotes = await prisma.quote.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      stats: {
        leads: leadsCount,
        quotes: quotesCount,
        projects: projectsCount,
        pendingQuotes,
      },
      recentLeads,
      recentQuotes,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { error: "Erro ao buscar estatísticas" },
      { status: 500 }
    );
  }
}
