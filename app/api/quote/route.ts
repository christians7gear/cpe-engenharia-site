export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      location,
      projectArea,
      deadline,
      budget,
      description,
      attachmentUrl,
      attachmentKey,
    } = body ?? {};

    if (!name || !email || !phone || !serviceType || !location || !description) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        phone,
        company: company ?? null,
        serviceType,
        location,
        projectArea: projectArea ?? null,
        deadline: deadline ?? null,
        budget: budget ?? null,
        description,
        attachmentUrl: attachmentUrl ?? null,
        attachmentKey: attachmentKey ?? null,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Solicitação de orçamento enviada com sucesso!",
      id: quote.id,
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar solicitação" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json(
      { error: "Erro ao buscar orçamentos" },
      { status: 500 }
    );
  }
}
