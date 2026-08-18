"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HardHat } from "lucide-react";
import { services } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION OFICIAL IDÊNTICA AO PRINT */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/3cf78604-3225-4ac4-9f1c-3a27b4958552.png"
            alt="CPE Engenharia Prédio"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-red-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
          >
            ENGENHARIA CIVIL & PROJETOS TÉCNICOS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-lg"
          >
            <span className="text-white">CPE </span>
            <span className="text-red-600">ENGENHARIA</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-normal drop-shadow-md"
          >
            Construindo Qualidade de Vida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm"
          >
            Projetos arquitetônicos e complementares para todo o Brasil. Execução de obras residenciais, comerciais e industriais com rigor técnico em São Paulo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/orcamento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-sm border border-white/20 text-white font-bold py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg"
            >
              Nossos Serviços
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVIÇOS EM DESTAQUE */}
      <section className="py-20 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">Nossas Soluções</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Serviços Especializados da <span className="text-slate-950">CPE </span><span className="text-red-600">ENGENHARIA</span>
          </h2>
          <p className="text-sm text-gray-600">
            Da aprovação técnica em órgãos reguladores à entrega das chaves da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-slate-900/85 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                      {service.category === "projetos" ? "Projetos" : "Execução"}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/servicos/${service.slug}`}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 hover:border-red-600 transition-all group/btn"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
          >
            Ver todos os 10 serviços <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. DIFERENCIAIS INSTITUCIONAIS */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Por que escolher a CPE</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                Compromisso com a Segurança e a Qualidade Construtiva
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Sob a responsabilidade do <strong>Eng. Christian Gomes</strong>, nossa equipe multidisciplinar garante rigor em todas as fases: planejamento financeiro, conformidade com as normas da ABNT e cumprimento de prazos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">CREA/SP Ativo</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Emissão de ART em todas as frentes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <HardHat className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Mão de Obra Qualificada</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Supervisão técnica permanente.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="https://cdn.abacus.ai/images/7ff63605-22e9-4efa-832a-43af18883e18.png"
                alt="Engenharia CPE"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
