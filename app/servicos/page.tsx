import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, HardHat } from "lucide-react";
import { services } from "@/lib/services-data";

export const metadata = {
  title: "Serviços de Engenharia e Construção Civil | CPE Engenharia",
  description:
    "Soluções completas em engenharia civil: projetos arquitetônicos, complementares, estruturais, AVCB, postos de combustíveis, galpões e reformas de fachadas.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-slate-50 min-h-screen text-gray-900">
      {/* Banner Superior Institucional */}
      <section className="relative bg-slate-950 text-white py-20 mb-12 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-950/80 to-transparent z-10" />
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-500 border border-red-500/30 mb-4">
            O que fazemos
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Nossos Serviços
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Soluções completas em engenharia civil, desde a concepção do projeto técnico até a execução de obras de alto padrão.
          </p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Imagem do Card */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image || service.heroImage}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-sm border border-white/10">
                      {service.category === "projetos" ? (
                        <>
                          <Compass className="w-3 h-3 text-red-500" />
                          PROJETO
                        </>
                      ) : (
                        <>
                          <HardHat className="w-3 h-3 text-red-500" />
                          EXECUÇÃO
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.shortDescription || service.subtitle}
                  </p>
                </div>
              </div>

              {/* Botão Saiba Mais */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/servicos/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
