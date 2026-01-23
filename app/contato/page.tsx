"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { companyData } from "@/lib/company-data";
import { ContactForm } from "@/components/contact-form";

export default function ContatoPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-20"><Image src={companyData?.images?.hero ?? ""} alt="" fill className="object-cover" /></div>
        <div className="relative max-w-[1200px] mx-auto px-4 text-center text-white">
          <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Estamos prontos para atender você. Entre em contato por um dos nossos canais.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>

              <div className="mb-8 bg-white rounded-2xl shadow-sm p-6 border">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="/images/priscila.png" alt="Atendimento" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{companyData?.team?.admin?.name ?? "Atendimento"}</p>
                    <p className="text-sm text-gray-600">Atendimento Comercial</p>
                    <p className="text-xs text-gray-500">Orçamentos e dúvidas sobre projetos e obras</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? ""}?text=${encodeURIComponent(
                      "Olá! Vim pelo site da CPE Engenharia e gostaria de um orçamento."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Falar com a Priscila
                  </a>
                  <Link
                    href="/orcamento"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-red-600" /></div>
                  <div><p className="font-semibold text-gray-900">Endereço</p><p className="text-gray-600 text-sm">{companyData?.address?.full ?? ""}</p></div>
                </div>
                <a href={`tel:${companyData?.team?.engineer?.phone?.replace?.(/\D/g, "") ?? ""}`} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-red-600" /></div>
                  <div><p className="font-semibold text-gray-900">{companyData?.team?.engineer?.name ?? ""}</p><p className="text-gray-600 text-sm">{companyData?.team?.engineer?.phone ?? ""}</p></div>
                </a>
                <a href={`tel:${companyData?.team?.admin?.phone?.replace?.(/\D/g, "") ?? ""}`} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-red-600" /></div>
                  <div><p className="font-semibold text-gray-900">{companyData?.team?.admin?.name ?? ""}</p><p className="text-gray-600 text-sm">{companyData?.team?.admin?.phone ?? ""}</p></div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><Building2 className="w-6 h-6 text-red-600" /></div>
                  <div><p className="font-semibold text-gray-900">CNPJ</p><p className="text-gray-600 text-sm">{companyData?.cnpj ?? ""}</p></div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe src={companyData?.googleMapsEmbed ?? ""} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização CPE Engenharia" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
