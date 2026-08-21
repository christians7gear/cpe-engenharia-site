="use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Building2, 
  Layers, 
  HardHat, 
  FileCheck2,
  Sparkles
} from "lucide-react";
import { companyData } from "@/lib/company-data";

export default function SobrePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* Banner Principal */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Institucional &bull; CPE Engenharia
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Construindo <span className="text-red-600">Qualidade de Vida</span> com Rigor Técnico
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Engenharia de alta performance, projetos técnicos executivos e soluções completas em construção civil e engenharia diagnóstica.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Principal */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bloco 1: Quem Somos & Vídeo Institucional 3D */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block" />
                Solidez, Inovação e Compromisso Técnico
              </h2>

              {/* Player do Vídeo 3D */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md aspect-video">
                <video
                  src="/logo-3d.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  A <strong className="text-red-600 font-bold">CPE ENGENHARIA</strong> é uma empresa consolidada no mercado de engenharia civil, projetos e gestão executiva de obras. Nosso propósito é transformar demandas construtivas em empreendimentos seguros, duráveis e esteticamente impecáveis, sempre guiados pelas melhores práticas da engenharia moderna.
                </p>
                <p>
                  Atuamos de forma integrada em todas as etapas de um empreendimento: desde a concepção arquitetônica autoral em metodologia BIM, passando pelo cálculo estrutural e aprovações regulatórias nos órgãos competentes, até a execução completa no canteiro de obras.
                </p>
              </div>
            </div>

            {/* Bloco 2: Liderança Técnica & Governança */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-red-600" />
                Responsabilidade Técnica Direta
              </h3>
              
              <div className="p-5 rounded-xl bg-slate-950 text-white border-l-4 border-red-600 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Coordenação Geral: Eng. Christian Gomes (CREA/SP)
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Todas as obras e laudos técnicos são coordenados e supervisionados diretamente pelo responsável técnico, garantindo rigor na conformidade de projetos, emissão de ARTs (Anotação de Responsabilidade Técnica) registradas no CREA-SP e gestão transparente do início à entrega formal.
                </p>
              </div>
            </div>

            {/* Bloco 3: Pilares & Normas Regulamentadoras */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                Conformidade com Normas ABNT & Normas Regulamentadoras (NRs)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Nossa atuação é estritamente pautada pela segurança operacional, ambiental e normativa em todos os segmentos da construção civil:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4" /> ABNT NBR 16280 & NBR 6118
                  </span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Gestão técnica de reformas prediais, projetos de estruturas de concreto armado e inspeções periciais completas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> ABNT NBR 5419 & NBR 6492
                  </span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Proteção contra descargas atmosféricas (SPDA) com gerenciamento de risco e representação precisa de projetos arquitetônicos.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> NR-10 & NR-20 (Postos & Indústrias)
                  </span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Instalações elétricas seguras, zoneamento à prova de explosão (Ex) e conformidade ambiental rigorosa (Resolução CONAMA 273).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" /> NR-35 & NR-18 (Trabalho em Altura)
                  </span>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Linhas de vida certificadas, andaimes dimensionados e equipe 100% habilitada para revitalização de fachadas e coberturas industriais.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco 4: Diferenciais Estratégicos */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-600" />
                Por Que Escolher a CPE Engenharia?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Projetos desenvolvidos em BIM (Autodesk Revit) para zero incompatibilidade.",
                  "Planejamento físico-financeiro com controle orçamentário rigoroso.",
                  "Emissão formal de ART registrada no CREA para todos os serviços.",
                  "Equipe técnica especializada com treinamento constante em NRs.",
                  "Atendimento consultivo e suporte direto com o corpo de engenharia.",
                  "Compromisso absoluto com cumprimento de prazos contratuais."
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Lateral */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card Institucional */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black">
                  CPE
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">CPE Engenharia & Construtora</h4>
                  <span className="text-[11px] text-gray-500">CNPJ: 62.979.414/0001-94</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Referência em excelência executiva, soluções corporativas, projetos residenciais de alto padrão e infraestrutura logística no Estado de São Paulo e em todo o território nacional.
              </p>
            </div>

            {/* Card de Atendimento Imediato */}
            <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-xl space-y-5 border border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">Atendimento Imediato</span>
                <h4 className="text-lg font-bold">Inicie seu projeto com a CPE</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Fale com nossos engenheiros para receber um estudo de viabilidade técnica e proposta personalizada para a sua obra.
                </p>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/orcamento"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1.5 text-[11px] text-gray-400">
                <p>&bull; Projetos em todo o Brasil &bull; Obras em SP</p>
                <p>&bull; Responsabilidade: Eng. Christian Gomes (CREA/SP)</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
