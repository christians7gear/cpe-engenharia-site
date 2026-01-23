export const dynamic = "force-dynamic";

import { companyData } from "@/lib/company-data";
import { services } from "@/lib/services-data";

const systemPrompt = `Você é o assistente virtual da CPE Engenharia, uma empresa de engenharia civil localizada em São Paulo.

INFORMAÇÕES DA EMPRESA:
- Nome: ${companyData.name}
- Slogan: "${companyData.slogan}"
- Endereço: ${companyData.address.full}
- Responsável Técnico: ${companyData.team.engineer.name}, ${companyData.team.engineer.crea}
- Telefone Eng. Christian: ${companyData.team.engineer.phone}
- Telefone Administrativo (Priscila): ${companyData.team.admin.phone}
- Área de atuação: Projetos para todo o Brasil, execução de obras na região de São Paulo

SERVIÇOS OFERECIDOS:
${services.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n')}

SUA FUNÇÃO:
1. Responder dúvidas sobre a empresa e seus serviços de forma clara e profissional
2. Qualificar leads perguntando sobre o tipo de projeto, localização e necessidades
3. Direcionar para solicitar orçamento quando apropriado
4. Oferecer contato via WhatsApp para atendimento mais direto
5. Ser cordial, profissional e demonstrar expertise em engenharia civil

REGRAS:
- Responda sempre em português do Brasil
- Seja conciso mas informativo (máximo 3 parágrafos)
- Não invente informações que não foram fornecidas
- Para questões de preço, oriente a solicitar um orçamento
- Sugira o WhatsApp para contato urgente
- Se não souber algo, ofereça encaminhar para a equipe`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body ?? {};

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Mensagens inválidas" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...(messages ?? []).map((m: { role: string; content: string }) => ({
        role: m?.role ?? "user",
        content: m?.content ?? "",
      })),
    ];

    const response = await fetch("https://apps.abacus.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ABACUSAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: apiMessages,
        stream: true,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();

        try {
          while (true) {
            const { done, value } = (await reader?.read()) ?? { done: true, value: undefined };
            if (done) break;
            const chunk = decoder.decode(value);
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(JSON.stringify({ error: "Erro no chatbot" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
