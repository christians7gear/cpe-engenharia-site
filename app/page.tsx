"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  HardHat, 
  Building2, 
  CheckCircle2, 
  Award, 
  Mail, 
  MapPin, 
  FileCheck2, 
  Sparkles 
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { services } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/residencia.jpg"
            alt="CPE Engenharia Obras"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Construindo Qualidade de Vida &bull; CREA/SP Ativo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Engenharia de Precisão & <br className="hidden sm:block" />
            <span className="text-red-600">Execução de Obras</span> de Alto Padrão
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Projetos arquitetônicos, complementares e execução completa para residências, postos de combustíveis, indústrias e galpões comerciais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
          >
            <Link
              href="/orcamento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-red-600/30"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-green-600/30"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Comercial
            </a>
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

      {/* 3. SEÇÃO DE ATENDIMENTO DIRETO NA HOME (IGUAL À PÁGINA DE CONTATO) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">Canais de Atendimento</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Fale Diretamente com Nossos Especialistas
            </h2>
            <p className="text-sm text-gray-600">
              Utilize o formulário ou entre em contato diretamente com nossa equipe técnica e comercial.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna Esquerda: Cards da Priscila e do Engenheiro */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Card Priscila */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="relative w-24 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 border-2 border-red-500/20 bg-slate-100">
                    <Image
                      src="/images/priscila.png"
                      alt="Priscila - Atendimento Comercial"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-bold text-gray-900">Priscila</h3>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        Atendimento Comercial
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Orçamentos, esclarecimento de propostas e dúvidas sobre serviços.
                    </p>

                    <div className="pt-2 space-y-1.5 text-sm">
                      <a
                        href="mailto:comercial.priscila@cpeeng.com.br"
                        className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium text-xs sm:text-sm"
                      >
                        <Mail className="w-4 h-4 text-red-500" />
                        comercial.priscila@cpeeng.com.br
                      </a>
                      <a
                        href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium text-xs sm:text-sm"
                      >
                        <Phone className="w-4 h-4 text-green-500" />
                        (11) 98932-0917 (WhatsApp)
                      </a>
                    </div>

                    <div className="pt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                      <a
                        href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        WhatsApp Priscila
                      </a>
                      <Link
                        href="/orcamento"
                        className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card Eng. Christian */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="relative w-24 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 border-2 border-red-500/20 bg-slate-100">
                    <Image
                      src={companyData?.images?.engineer ?? "/images/engineer.png"}
                      alt="Eng. Christian Gomes"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-bold text-gray-900">Eng. Christian Gomes</h3>
                      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        CREA/SP Ativo
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Engenheiro Civil &bull; Direção Técnica, Laudos, ARTs e Projetos Estruturais.
                    </p>

                    <div className="pt-2 space-y-1.5 text-sm">
                      <a
                        href="mailto:eng.christian@cpeeng.com.br"
                        className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium text-xs sm:text-sm"
                      >
                        <Mail className="w-4 h-4 text-red-500" />
                        eng.christian@cpeeng.com.br
                      </a>
                      <a
                        href="tel:1147159186"
                        className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium text-xs sm:text-sm"
                      >
                        <Phone className="w-4 h-4 text-red-500" />
                        (11) 4715-9186 (Telefone Técnico)
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Informações Institucionais */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase">Sede Oficial</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Av. Paulista, nº 807 – Bela Vista, São Paulo/SP – CEP 01311-100
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase">Dados da Empresa</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      CPE Engenharia LTDA<br />
                      <span className="font-mono text-gray-800">CNPJ: 62.575.418/0001-84</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Mensagem Direta */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Preencha os campos abaixo para receber um retorno por e-mail ou WhatsApp da nossa equipe.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
