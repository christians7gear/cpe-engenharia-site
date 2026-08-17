"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { companyData } from "@/lib/company-data";

export default function ContatoPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* Banner de Topo */}
      <div className="bg-slate-950 text-white py-14 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Atendimento Direto
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Fale com a <span className="text-red-600">CPE Engenharia</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Entre em contato com nosso setor comercial ou fale diretamente com o engenheiro responsável pelo seu projeto.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna da Esquerda: Cards de Equipe e Informações */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block" />
              Nossos Especialistas
            </h2>

            {/* Card 1: Priscila (Comercial) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 border-2 border-red-500/20">
                  <Image
                    src="/images/priscila.png"
                    alt="Priscila - Atendimento Comercial"
                    fill
                    className="object-cover"
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
                      href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}?text=${encodeURIComponent(
                        "Olá Priscila! Gostaria de um orçamento com a CPE Engenharia."
                      )}`}
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

            {/* Card 2: Eng. Christian Gomes (Responsável Técnico) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 border-2 border-red-500/20">
                  <Image
                    src={companyData?.images?.engineer ?? "/images/engineer.png"}
                    alt="Eng. Christian Gomes"
                    fill
                    className="object-cover"
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

            {/* Informações Institucionais (Endereço e CNPJ) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase">Sede Oficial</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Av. Paulista, nº 807 – Bela Vista, São Paulo/SP – CEP 01311-100
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
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

          {/* Coluna da Direita: Formulário de Mensagem */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h2>
              <p className="text-sm text-gray-500 mb-6">
                Preencha os campos abaixo para receber um retorno por e-mail ou WhatsApp da nossa equipe.
              </p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
