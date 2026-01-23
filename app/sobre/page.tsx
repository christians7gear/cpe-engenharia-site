"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Building2,
} from "lucide-react";
import { companyData, differentials } from "@/lib/company-data";
import { AnimatedCounter } from "@/components/animated-counter";

export default function SobrePage() {
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
              Quem Somos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a CPE Engenharia</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Conheça nossa história, valores e a equipe que transforma projetos em realidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Construindo</span> Qualidade de Vida
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A CPE Engenharia nasceu da paixão por transformar sonhos em estruturas
                  concretas. Com sede na Avenida Paulista, no coração financeiro de
                  São Paulo, oferecemos soluções completas em engenharia civil para
                  clientes de todo o Brasil.
                </p>
                <p>
                  Nossa expertise abrange desde projetos arquitetônicos e complementares
                  até a execução de obras residenciais, comerciais e industriais.
                  Trabalhamos com compromisso, transparência e dedicação para entregar
                  resultados que superam expectativas.
                </p>
                <p>
                  Com um engenheiro civil registrado no CREA/SP à frente de cada projeto,
                  garantimos responsabilidade técnica e segurança em todas as etapas,
                  desde a concepção até a entrega final.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={companyData?.images?.engineer ?? ""}
                  alt="Equipe CPE Engenharia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-1">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <p className="text-red-100">Anos de Experiência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Missão",
                description:
                  "Oferecer soluções de engenharia civil com excelência, transformando projetos em realidade com qualidade, segurança e compromisso com prazos e orçamentos.",
              },
              {
                icon: Eye,
                title: "Visão",
                description:
                  "Ser referência em engenharia civil no Brasil, reconhecida pela qualidade dos projetos, inovação em soluções e satisfação dos clientes.",
              },
              {
                icon: Heart,
                title: "Valores",
                description:
                  "Ética, transparência, comprometimento com a qualidade, respeito ao cliente, responsabilidade técnica e busca contínua por inovação.",
              },
            ]?.map?.((item, index) => {
              const Icon = item?.icon ?? Target;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index ?? 0) * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item?.title ?? ""}
                  </h3>
                  <p className="text-gray-600">{item?.description ?? ""}</p>
                </motion.div>
              );
            }) ?? []}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold">Nossa Equipe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Profissionais Qualificados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Engineer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {companyData?.team?.engineer?.name ?? ""}
              </h3>
              <p className="text-red-600 font-medium mb-2">
                {companyData?.team?.engineer?.role ?? ""}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {companyData?.team?.engineer?.crea ?? ""}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{companyData?.team?.engineer?.phone ?? ""}</span>
              </div>
            </motion.div>

            {/* Admin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {companyData?.team?.admin?.name ?? ""}
              </h3>
              <p className="text-red-600 font-medium mb-2">
                {companyData?.team?.admin?.role ?? ""}
              </p>
              <p className="text-gray-600 text-sm mb-4">Atendimento e Gestão</p>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{companyData?.team?.admin?.phone ?? ""}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 font-semibold">Certificações</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Responsabilidade Técnica Garantida
              </h2>
              <p className="text-gray-400 mb-8">
                Todos os nossos projetos e obras contam com Anotação de
                Responsabilidade Técnica (ART) emitida por engenheiro civil
                devidamente registrado no CREA/SP, garantindo segurança jurídica
                e técnica para nossos clientes.
              </p>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-12 h-12 text-red-500" />
                  <div>
                    <p className="font-bold text-xl">CREA/SP</p>
                    <p className="text-gray-400">Conselho Regional de Engenharia e Agronomia</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-gray-400">Registro Ativo</p>
                  <p className="font-bold text-lg">{companyData?.team?.engineer?.crea ?? ""}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 150, suffix: "+", label: "Projetos" },
                  { value: 50, suffix: "+", label: "Obras" },
                  { value: 98, suffix: "%", label: "Satisfação" },
                  { value: 10, suffix: "+", label: "Anos" },
                ]?.map?.((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      <AnimatedCounter
                        end={stat?.value ?? 0}
                        suffix={stat?.suffix ?? ""}
                      />
                    </div>
                    <p className="text-gray-400 text-sm">{stat?.label ?? ""}</p>
                  </div>
                )) ?? []}
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
              Vamos construir juntos?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar no seu projeto.
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
