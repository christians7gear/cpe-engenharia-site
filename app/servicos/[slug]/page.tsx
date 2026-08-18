"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Building2, 
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug) || services[0];

  const isPosto = service.slug === "postos-abastecimento";
  const isFachada = service.slug === "reforma-fachadas";

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* Header do Serviço */}
      <section className="bg-slate-950 text-white py-14 mb-10 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-red-500 font-semibold text-xs uppercase tracking-wider mb-3">
            <Link href="/servicos" className="hover:underline">Serviços</Link>
            <span>/</span>
            <span>{service.category === "projetos" ? "Projetos Técnicos" : "Execução de Obras"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {service.title}
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl text-sm sm:text-base">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Principal de Conteúdo */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bloco Institucional */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-red-600 rounded-full inline-block" />
                Excelência em Engenharia & Construtora
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                A <strong className="text-slate-950">CPE </strong><strong className="text-red-600">ENGENHARIA</strong> entrega soluções completas em engenharia consultiva, projetos legais, laudos técnicos e execução civil pesada com responsabilidade técnica e ART registrada no CREA/SP.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>

            {/* Case Exclusivo de Reforma de Fachadas com as duas fotos */}
            {isFachada && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="bg-slate-950 text-white p-4 rounded-xl flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[11px] text-red-500 font-bold uppercase tracking-wider block">Case de Obra em Destaque</span>
                    <h3 className="text-base sm:text-lg font-bold">Revitalização & Pintura de Fachada • Condomínio Atlanta (Zona Leste - SP)</h3>
                  </div>
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Engenharia CPE
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      <Image
                        src="/images/fachada-atlanta-dia.jpg"
                        alt="Reforma de Fachada - Vista Diurna"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium">Perspectiva Diurna & Acabamento Texturizado</p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      <Image
                        src="/images/fachada-atlanta-noite.jpg"
                        alt="Reforma de Fachada - Vista Noturna"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium">Perspectiva Noturna & Valorização Arquitetônica</p>
                  </div>
                </div>
              </div>
            )}

            {/* Diferenciais */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                Diferenciais da CPE ENGENHARIA
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metodologia / Processo */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-red-600" />
                Metodologia Executiva Passo a Passo
              </h3>
              <div className="space-y-2.5 pt-2">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Lateral */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Foto Lateral (quando não for fachada) */}
            {!isFachada && (
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="relative h-64 w-full bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            )}

            {/* Card de Orçamento */}
            <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-xl space-y-5 border border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">Atendimento Imediato</span>
                <h4 className="text-lg font-bold">Precisa de um projeto como este?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Fale diretamente com os especialistas da <strong>CPE ENGENHARIA</strong> para receber um estudo de viabilidade e proposta personalizada.
                </p>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/orcamento"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1.5 text-[11px] text-gray-400">
                <p>&bull; Atendimento: Projetos em todo o Brasil &bull; Execução em SP</p>
                <p>&bull; Responsabilidade Técnica: Eng. Christian Gomes (CREA/SP)</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
