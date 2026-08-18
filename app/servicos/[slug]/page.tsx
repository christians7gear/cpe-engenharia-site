import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  HardHat,
  FileCheck,
  ChevronRight,
  Layers,
  Camera,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-red-600 selection:text-white pt-24 pb-20">
      {/* Breadcrumb e Cabeçalho do Serviço */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/servicos" className="hover:text-red-500 transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-200 font-medium truncate">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            {service.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-400 border border-red-500/20 mb-4">
                <HardHat className="w-3.5 h-3.5 text-red-500" />
                {service.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Coluna Esquerda: Informações Técnicas e Escopo */}
            <div className="lg:col-span-8 space-y-8">
              {/* Bloco 1: Excelência e Identidade */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-5 w-1 bg-red-600 rounded-full" />
                  <h2 className="text-xl font-bold text-white tracking-wide">
                    Excelência em Engenharia & Construtora
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Banner do Case Real de Obra */}
                {service.caseStudy && (
                  <div className="mt-6 rounded-xl border border-red-600/30 bg-slate-950 p-5 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      Obra Completa: Projeto e Execução • {service.caseStudy.client} ({service.caseStudy.location})
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      Neste case corporativo para a <strong className="text-white">{service.caseStudy.client}</strong> em{" "}
                      <strong className="text-white">{service.caseStudy.location}</strong>, a{" "}
                      <strong className="text-red-400">CPE ENGENHARIA</strong> foi responsável por: {service.caseStudy.scope}
                    </p>
                  </div>
                )}
              </div>

              {/* Bloco 2: Rigor Técnico e Normas Regulamentadoras */}
              {service.technicalNorms && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-bold text-white tracking-wide">
                      Rigor Técnico, Responsabilidade e Normas
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Responsabilidade Técnica
                      </span>
                      <p className="text-sm font-medium text-slate-200">{service.technicalNorms.crea}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Garantia de Conformidade
                      </span>
                      <p className="text-sm font-medium text-slate-200">{service.technicalNorms.art}</p>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                    Normas ABNT & Normas Regulamentadoras Aplicadas:
                  </h3>
                  <ul className="space-y-2.5">
                    {service.technicalNorms.standards.map((norm, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                        <FileCheck className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{norm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bloco 3: Escopo de Engenharia Executado em Campo */}
              {service.technicalScope && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <Layers className="w-5 h-5 text-red-500" />
                    <h2 className="text-xl font-bold text-white tracking-wide">
                      {service.technicalScope.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.technicalScope.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-slate-950/60 border border-slate-850 hover:border-slate-700 transition-colors"
                      >
                        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bloco 4: Galeria Fotográfica de Obras Reais */}
              {service.gallery && service.gallery.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-red-500" />
                      <h2 className="text-xl font-bold text-white tracking-wide">
                        Galeria Técnica do Case Real
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400">
                      {service.gallery.length} {service.gallery.length === 1 ? "registro" : "registros fotográficos"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col hover:border-slate-700 transition-all shadow-md"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.tag && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-sm border border-white/10">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bloco 5: Diferenciais CPE ENGENHARIA */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold text-white tracking-wide">
                    Diferenciais da CPE ENGENHARIA
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xs md:text-sm font-semibold text-slate-200 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloco 6: Metodologia Executiva Passo a Passo */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <HardHat className="w-5 h-5 text-red-500" />
                  <h2 className="text-xl font-bold text-white tracking-wide">
                    Metodologia Executiva Passo a Passo
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.methodology.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80"
                    >
                      <span className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 border border-red-500/20 font-bold text-xs flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita (Sidebar Fixa de Conversão e Imagem Principal) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Card da Imagem Principal */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    unoptimized
                    priority
                    className="object-cover"
                  />
                </div>
                {service.sidebarImageCaption && (
                  <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-center">
                    <p className="text-xs font-medium text-slate-400 flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      {service.sidebarImageCaption}
                    </p>
                  </div>
                )}
              </div>

              {/* Card de Conversão e Orçamento */}
              <div className="rounded-2xl border border-red-600/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase block mb-1">
                  Atendimento Imediato
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Precisa de um projeto como este?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Fale diretamente com os especialistas da <strong className="text-white">CPE ENGENHARIA</strong> para receber um estudo de viabilidade e proposta personalizada.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/orcamento"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 text-white font-semibold text-xs tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/5511989320917?text=Olá! Gostaria de um orçamento para o serviço de Engenharia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 font-semibold text-xs hover:bg-emerald-600/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Falar no WhatsApp
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-1">
                  <p>• Atendimento: Projetos em todo o Brasil • Execução de Obras em SP</p>
                  <p>• Responsabilidade Técnica: Eng. Christian Gomes (CREA/SP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
