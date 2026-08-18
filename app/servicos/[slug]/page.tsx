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
  MapPin,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-slate-50 min-h-screen text-gray-900">
      {/* Banner Principal */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <Link href="/servicos" className="hover:text-red-500 transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-gray-200 font-medium truncate">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            {service.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-400 border border-red-500/20 mb-4">
                <HardHat className="w-3.5 h-3.5 text-red-500" />
                {service.badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Coluna Principal (Esquerda) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bloco 1: Excelência e Identidade / Case */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-2.5 bg-red-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">
                  Excelência em Engenharia & Construtora
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Banner do Case Real de Obra */}
              {service.caseStudy && (
                <div className="rounded-xl border border-red-600/30 bg-slate-900 text-white p-5 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    Obra Completa: Projeto e Execução • {service.caseStudy.client} ({service.caseStudy.location})
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Neste case corporativo para a <strong className="text-white">{service.caseStudy.client}</strong> em{" "}
                    <strong className="text-white">{service.caseStudy.location}</strong>, a{" "}
                    <strong className="text-red-400">CPE ENGENHARIA</strong> foi responsável por: {service.caseStudy.scope}
                  </p>
                </div>
              )}
            </div>

            {/* Bloco 2: Rigor Técnico e Normas Regulamentadoras */}
            {service.technicalNorms && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                    Rigor Técnico, Responsabilidade e Normas
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                      Responsabilidade Técnica
                    </span>
                    <p className="text-sm font-semibold text-gray-900">{service.technicalNorms.crea}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                      Garantia de Conformidade
                    </span>
                    <p className="text-sm font-semibold text-gray-900">{service.technicalNorms.art}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                    Normas ABNT & Normas Regulamentadoras Aplicadas:
                  </h3>
                  <ul className="space-y-2.5">
                    {service.technicalNorms.standards.map((norm, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <FileCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{norm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Bloco 3: Escopo de Engenharia Executado em Campo */}
            {service.technicalScope && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                    {service.technicalScope.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.technicalScope.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bloco 4: Galeria Fotográfica de Obras Reais */}
            {service.gallery && service.gallery.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-red-600" />
                    <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                      Galeria Técnica do Case Real
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-gray-500">
                    {service.gallery.length} {service.gallery.length === 1 ? "registro" : "registros fotográficos"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col hover:border-slate-300 transition-all shadow-sm"
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
                        <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs text-gray-600 leading-relaxed">
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
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                  Diferenciais da CPE ENGENHARIA
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco 6: Metodologia Executiva Passo a Passo */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                  Metodologia Executiva Passo a Passo
                </h2>
              </div>
              <div className="space-y-4">
                {service.methodology.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Direita (Sidebar Fixa de Conversão e Imagem Principal) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Card da Imagem Principal */}
            <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-inner">
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
                <div className="p-3 bg-slate-50 rounded-xl mt-2 text-center border border-slate-100">
                  <p className="text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    {service.sidebarImageCaption}
                  </p>
                </div>
              )}
            </div>

            {/* Card de Conversão e Orçamento */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block mb-1">
                Atendimento Imediato
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Precisa de um projeto como este?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
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
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4 text-white" />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 text-[11px] text-gray-400 space-y-1">
                <p>• Atendimento: Projetos em todo o Brasil • Execução de Obras em SP</p>
                <p>• Responsabilidade Técnica: Eng. Christian Gomes (CREA/SP)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
