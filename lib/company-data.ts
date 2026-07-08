"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  MapPin,
  Award,
  Building2,
  Briefcase,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";
import { companyData, differentials, stats } from "@/lib/company-data";
import { services } from "@/lib/services-data";
import { ServiceCard } from "@/components/service-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { ContactForm } from "@/components/contact-form";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  MapPin,
  Award,
  Building2,
  Briefcase,
  Clock,
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

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

  const featuredServices = services?.slice?.(0, 6) ?? [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="CPE Engenharia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Engenharia Civil de Excelência
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {companyData?.slogan ?? "Construindo Qualidade de Vida"}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Projetos arquitetônicos e complementares para todo o Brasil.
              Execução de obras residenciais, comerciais e industriais na região
              de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-colors border border-white/30"
              >
                Nossos Serviços
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats?.map?.((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index ?? 0) * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                  <AnimatedCounter
                    end={stat?.value ?? 0}
                    suffix={stat?.suffix ?? ""}
                  />
                </div>
                <p className="text-gray-400">{stat?.label ?? ""}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-semibold">Sobre Nós</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Excelência em <span className="text-red-600">Engenharia Civil</span>
              </h2>
              <p className="text-gray-600 mb-6">
                A CPE Engenharia é uma empresa especializada em projetos e
                execução de obras civis, com sede na Av. Paulista, São Paulo.
                Nosso compromisso é transformar sonhos em realidade, com
                qualidade, segurança e cumprimento de prazos.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Engenheiro Civil com CREA/SP ativo",
                  "Projetos para todo o Brasil",
                  "Execução de obras em São Paulo",
                  "Atendimento personalizado",
                ]?.map?.((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
              >
                Conhecer mais sobre nós
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={companyData?.images?.engineer ?? ""}
                  alt="Engenheiro CPE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">{companyData?.team?.engineer?.crea ?? ""}</p>
                <p className="text-red-100 text-sm">Registro Ativo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atendimento Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/priscila.png"
                  alt="Atendimento Comercial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border">
                <p className="font-bold text-gray-900">Atendimento</p>
                <p className="text-sm text-gray-600">Resposta rápida no WhatsApp</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-semibold">Atendimento</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Tire dúvidas e solicite orçamento com rapidez
              </h2>
              <p className="text-gray-600 mb-6">
                Fale diretamente com nosso atendimento comercial para entender o melhor caminho do seu projeto (arquitetônico, estrutural,
                hidráulico, elétrico, SDA, SPCI/AVCB) ou execução de obra.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? ""}?text=${encodeURIComponent(
                    "Olá! Gostaria de um orçamento com a CPE Engenharia."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Falar com a Priscila
                </a>

                <Link
                  href="/orcamento"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Projetos para todo o Brasil. Execução na região de São Paulo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Soluções Completas em Engenharia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de engineering civil, desde a
              concepção do projeto até a execução completa da obra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices?.map?.((service, index) => (
              <ServiceCard key={service?.id ?? index} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold">Por que nos escolher</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials?.map?.((diff, index) => {
              const Icon = iconMap[diff?.icon ?? ""] ?? Building2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index ?? 0) * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {diff?.title ?? ""}
                  </h3>
                  <p className="text-gray-600">{diff?.description ?? ""}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-semibold">Área de Atuação</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Presente em Todo o Brasil
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Projetos</h3>
                    <p className="text-gray-400">
                      Desenvolvemos projetos arquitetônicos e complementares para
                      clientes em todo o território nacional, com atendimento
                      remoto eficiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Execução de Obras</h3>
                    <p className="text-gray-400">
                      Realizamos a execução de obras na região metropolitana de
                      São Paulo, com acompanhamento presencial e gestão completa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Endereço:</strong>{" "}
                  {companyData?.address?.full ?? ""}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={companyData?.images?.skyline ?? ""}
                alt="São Paulo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-2xl font-bold">São Paulo</p>
                  <p className="text-gray-300">Av. Paulista - Centro Financeiro</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado para
              seu projeto ou obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${companyData?.team?.engineer?.whatsapp ?? ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-semibold">Fale Conosco</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Entre em Contato
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário ao lado ou entre em contato diretamente
                pelos nossos canais de atendimento. Responderemos o mais breve
                possível.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${companyData?.team?.engineer?.phone?.replace?.(/\D/g, "") ?? ""}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {companyData?.team?.engineer?.phone ?? ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      {companyData?.team?.engineer?.name ?? ""} - Engenheiro
                    </p>
                  </div>
                </a>
                <a
                  href={`tel:${companyData?.team?.admin?.phone?.replace?.(/\D/g, "") ?? ""}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {companyData?.team?.admin?.phone ?? ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      {companyData?.team?.admin?.name ?? ""} - Administrativo
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
