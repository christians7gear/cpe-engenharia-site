"use client";

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
  FileCheck,
  Sparkles,
  Target,
  Eye,
  Heart,
  Compass,
  AlertTriangle,
  Briefcase
} from "lucide-react";
import { companyData } from "@/lib/company-data";

export default function SobrePage() {
  const engineerImg = "/images/engineer.png";

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
            Engenharia de alta performance, projetos técnicos executivos, gestão de riscos estruturais e soluções completas em construção civil.
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

            {/* Bloco 2: Experiência Prática & Acervo Executivo */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Portfólio de Atuação e Experiência Comprovada
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Projetos, Obras e Engenharia Diagnóstica de Alta Complexidade
                </h3>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Nossa trajetória é marcada por uma sólida atuação em múltiplos setores da engenharia, englobando desde o desenvolvimento conceitual até a execução e recuperação de patrimônios edificados:
              </p>

              {/* Grid 2x2 com os setores de atuação */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Obras Públicas e Infraestrutura</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Elaboração de projetos executivos e acompanhamento rigoroso de obras públicas, com foco no cumprimento irrestrito do caderno de encargos, normas licitatórias e prazos institucionais.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <Layers className="w-4 h-4" />
                    <span>Setor Comercial e Industrial</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Execução de galpões, adequações operacionais, reforços estruturais e instalações técnicas para indústrias, postos de combustíveis e edifícios empresariais.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <HardHat className="w-4 h-4" />
                    <span>Projetos e Obras Residenciais</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Construção de residências de alto padrão e reformas completas em condomínios fechados, priorizando funcionalidade, estética refinada e otimização de custos.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Laudos Críticos e Risco Estrutural</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Inspeções periciais profundas, laudos de intervenção emergencial e planos de mitigação para edificações com patologias e comprometimento de estrutura.
                  </p>
                </div>

              </div>
            </div>

            {/* Bloco 3: Por Que Fazemos o Que Fazemos & Nossa Essência */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Por Que Fazemos o Que Fazemos
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Transformando Espaços para Elevar a Qualidade de Vida
                </h3>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Acreditamos que a engenharia vai muito além de cálculos, estruturas e tijolos. Cada projeto que desenvolvemos e cada obra que executamos afeta diretamente a rotina, o bem-estar e a segurança de pessoas e famílias. Nosso compromisso fundamental é criar ambientes funcionais, seguros e inspiradores, trazendo mais conforto e qualidade de vida para residências, condomínios e espaços comerciais.
              </p>

              {/* Grid: Missão, Visão e Valores */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                
                {/* Missão */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Nossa Missão</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Entregar soluções de engenharia e arquitetura com excelência técnica, eficiência e total transparência, promovendo a satisfação, segurança e qualidade de vida de nossos clientes.
                  </p>
                </div>

                {/* Visão */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Nossa Visão</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Ser reconhecida como referência regional e nacional em gestão técnica, rigor normativo e inovação em projetos executivos e construção civil pesada e residencial.
                  </p>
                </div>

                {/* Valores */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Nossos Valores</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Ética inegociável, rigor com normas regulamentadoras, valorização da vida, precisão orçamentária e busca constante por aperfeiçoamento tecnológico.
                  </p>
                </div>

              </div>
            </div>

            {/* Bloco 4: Foto & Perfil do Engenheiro Christian Gomes */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-red-600" />
                Liderança & Responsabilidade Técnica
              </h3>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Foto do Engenheiro */}
                <div className="md:col-span-4">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={engineerImg}
                      alt="Engenheiro Christian Gomes da Silva - CPE Engenharia"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Descrição do Engenheiro */}
                <div className="md:col-span-8 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Responsável Técnico / CREA-SP
                    </span>
                    <h4 className="text-xl font-black text-gray-900">
                      Eng. Christian Gomes da Silva
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      Engenheiro Civil & Diretor Executivo da CPE Engenharia
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Com ampla experiência na liderança de projetos complexos, reformas prediais, obras de infraestrutura e consultoria pericial, o Eng. Christian Gomes conduz a CPE Engenharia com foco absoluto em qualidade executiva, estabilidade estrutural e atendimento humanizado.
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-950 text-white border-l-4 border-red-600 text-xs space-y-1">
                    <span className="font-bold text-red-500 uppercase tracking-wider block">
                      Garantia de Qualidade & CREA-SP
                    </span>
                    <p className="text-gray-300 leading-relaxed">
                      Todas as obras, perícias e laudos emitidos contam com a supervisão direta do Eng. Christian Gomes, com emissão formal de Anotação de Responsabilidade Técnica (ART/CREA-SP).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 5: Pilares & Normas Regulamentadoras */}
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
                    <FileCheck className="w-4 h-4" /> ABNT NBR 16280 & NBR 6118
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

            {/* Bloco 6: Diferenciais Estratégicos */}
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
