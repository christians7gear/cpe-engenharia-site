import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone, Award, ShieldCheck, MapPin, Building, Ruler, HardHat } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isResidencial = service.slug === "obras-residenciais";

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-slate-50 min-h-screen">
      {/* Banner Principal com Topo Ajustado */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Link href="/servicos" className="hover:underline">Serviços</Link>
            <span>/</span>
            <span className="text-gray-400">{service.category === "projetos" ? "Projetos Técnicos" : "Execução de Obras"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {service.title}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl text-base sm:text-lg">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Conteúdo Principal */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Texto Descritivo com Marca em Destaque */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block" />
                Excelência em Engenharia & Construtora
              </h2>

              {isResidencial ? (
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>
                    A <strong><span className="text-slate-950 font-black">CPE </span><span className="text-red-600 font-black">ENGENHARIA</span></strong> é especializada no desenvolvimento integral de residências de alto padrão, unindo sofisticação arquitetônica, cálculo estrutural preciso e rigor executivo em todas as etapas da obra.
                  </p>
                  
                  <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-red-600 my-4 space-y-2">
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      Destaque em Condomínio Fechado &bull; Mogi das Cruzes / SP
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Esta residência modelo representa a assinatura técnica completa da <strong><span className="text-white font-bold">CPE </span><span className="text-red-500 font-bold">ENGENHARIA</span></strong>: atuamos desde a concepção do <strong>projeto arquitetônico</strong>, compatibilização dos <strong>projetos complementares (estrutural, hidráulico e elétrico)</strong> até a <strong>execução integral da obra</strong> com gestão física-financeira e acabamento de alto luxo.
                    </p>
                  </div>

                  <p>
                    Construir com a <strong><span className="text-slate-950 font-black">CPE </span><span className="text-red-600 font-black">ENGENHARIA</span></strong> significa contar com a liderança do <strong>Eng. Christian Gomes</strong> e acompanhamento diário com emissão de ART, seleção rigorosa de insumos nobres e transparência total de custos e prazos.
                  </p>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  A <strong><span className="text-slate-950 font-black">CPE </span><span className="text-red-600 font-black">ENGENHARIA</span></strong> garante precisão técnica e total conformidade com as normas da ABNT e diretrizes municipais para o seu empreendimento. {service.description}
                </p>
              )}
            </div>

            {/* Benefícios */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                Diferenciais da <strong><span className="text-slate-950 font-black">CPE </span><span className="text-red-600 font-black">ENGENHARIA</span></strong>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Etapas do Processo */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-red-600" />
                Metodologia Executiva Passo a Passo
              </h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 transition-all">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Lateral / CTA */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Card da Foto */}
            <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {isResidencial && (
                <div className="p-3 bg-slate-50 rounded-xl mt-2 flex items-center gap-2 text-xs text-gray-600">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Obra entregue: Condomínio Fechado &bull; Mogi das Cruzes/SP</span>
                </div>
              )}
            </div>

            {/* Card de Ação */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 space-y-5 text-center">
              <div>
                <span className="text-xs uppercase font-bold text-red-500 tracking-wider">Atendimento Imediato</span>
                <h4 className="text-xl font-bold mt-1">Interessado neste serviço?</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Fale com a equipe técnica e comercial da <strong><span className="text-white font-bold">CPE </span><span className="text-red-500 font-bold">ENGENHARIA</span></strong> para receber um orçamento sob medida.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/orcamento"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}?text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre ${service.title} com a CPE Engenharia.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="border-t border-slate-800 pt-4 text-[11px] text-gray-400 space-y-1">
                <p>📍 <strong>Área de atuação:</strong> Todo o Brasil para projetos &bull; SP para obras</p>
                <p>🛡️ <strong>Responsável Técnico:</strong> Eng. Christian Gomes</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
