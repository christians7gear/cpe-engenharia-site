"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, HardHat } from "lucide-react";
import { companyData } from "@/lib/company-data";
import { services, getServicesByCategory } from "@/lib/services-data";
import { ServiceCard } from "@/components/service-card";

export default function ServicosPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "projetos" | "execucao">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const filteredServices =
    activeTab === "all"
      ? services
      : getServicesByCategory(activeTab);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={companyData?.images?.hero ?? ""}
            alt="CPE Engenharia"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              O que fazemos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluções completas em engenharia civil, desde a concepção do projeto
              até a execução da obra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "all"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Todos os Serviços
            </button>
            <button
              onClick={() => setActiveTab("projetos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "projetos"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Ruler className="w-5 h-5" />
              Projetos
            </button>
            <button
              onClick={() => setActiveTab("execucao")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "execucao"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <HardHat className="w-5 h-5" />
              Execução de Obras
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices?.map?.((service, index) => (
              <ServiceCard key={service?.id ?? index} service={service} index={index} />
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Ruler className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Projetos</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvemos projetos arquitetônicos e complementares para clientes
                em todo o território nacional. Nosso atendimento remoto é eficiente
                e personalizado.
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <span>Área de atuação:</span>
                <span className="text-gray-900">Todo o Brasil</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Execução de Obras</h3>
              <p className="text-gray-600 mb-4">
                Realizamos a execução completa de obras residenciais, comerciais e
                industriais na região metropolitana de São Paulo, com gestão
                profissional e acompanhamento presencial.
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <span>Área de atuação:</span>
                <span className="text-gray-900">Região de São Paulo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Precisa de um serviço específico?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e receba um orçamento personalizado para o seu projeto.
            </p>
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
