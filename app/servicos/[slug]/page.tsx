"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";
import { ServiceCard } from "@/components/service-card";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const service = getServiceBySlug(slug ?? "");

  if (mounted && !service) {
    notFound();
  }

  if (!mounted || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    service?.icon ?? "Ruler"
  ] ?? Icons.Ruler;

  const relatedServices = services
    ?.filter?.((s) => s?.category === service?.category && s?.id !== service?.id)
    ?.slice?.(0, 3) ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={service?.image ?? ""}
            alt={service?.title ?? ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        <div className="relative max-w-[1200px] mx-auto px-4">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Serviços
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                {service?.category === "projetos" ? "Projeto" : "Execução"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service?.title ?? ""}</h1>
            <p className="text-xl text-gray-300">{service?.shortDescription ?? ""}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Serviço</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service?.description ?? ""}
                </p>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Benefícios</h3>
                  <div className="space-y-4">
                    {service?.benefits?.map?.((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    )) ?? []}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Etapas do Processo</h3>
                  <div className="space-y-4">
                    {service?.process?.map?.((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {(index ?? 0) + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    )) ?? []}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src={service?.image ?? ""}
                    alt={service?.title ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CTA Card */}
                <div className="bg-gray-900 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Interessado neste serviço?</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Entre em contato conosco para obter um orçamento personalizado
                    para o seu projeto.
                  </p>
                  <Link
                    href="/orcamento"
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={`https://wa.me/${companyData?.team?.engineer?.whatsapp ?? ""}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(
                      service?.title ?? ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>

                {/* Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <strong>Área de atuação:</strong>{" "}
                    {service?.category === "projetos"
                      ? "Todo o Brasil"
                      : "Região de São Paulo"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {(relatedServices?.length ?? 0) > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Serviços Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices?.map?.((s, index) => (
                <ServiceCard key={s?.id ?? index} service={s} index={index} />
              )) ?? []}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
