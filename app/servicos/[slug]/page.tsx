"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Ruler, 
  Sparkles, 
  Camera 
} from "lucide-react";
import { companyData } from "@/lib/company-data";
import { servicesData } from "@/lib/services-data";

export default function ServicoPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Garante a leitura correta caso servicesData venha como array ou objeto
  const allServices = Array.isArray(servicesData) 
    ? servicesData 
    : (servicesData as any)?.services || [];

  const service = allServices.find((s: any) => s.slug === slug || s.id === slug);

  // Fallback seguro de dados para evitar tela branca caso algum campo seja nulo
  const title = service?.title || service?.name || "Serviços de Engenharia";
  const category = service?.category || "Projetos Técnicos Executivos • CPE Engenharia";
  const description = service?.description || service?.shortDescription || "Soluções completas com responsabilidade técnica e conformidade ABNT.";
  const fullDesc = service?.fullDescription || service?.longDescription || description;
  const features = service?.features || service?.items || [];

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* Banner Principal Dinâmico */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {title}
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Principal */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bloco Detalhamento Técnico */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block" />
                Especificações e Detalhes Técnicos
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {fullDesc}
              </p>

              {features.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-red-600" />
                    Etapas do Desenvolvimento:
                  </h3>

                  <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                    {features.map((item: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{typeof item === "string" ? item : item.title || item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-gray-600 italic">
                Coordenação técnica liderada pelo <strong>Eng. Christian Gomes (CREA-SP 5070688455)</strong>, garantindo conformidade rigorosa com as normas técnicas da ABNT.
              </div>
            </div>

            {/* Galeria Exibida APENAS na página de Projetos Arquitetônicos */}
            {slug === "projetos-arquitetonicos" && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-red-600 font-bold">
                    <Camera className="w-5 h-5" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Galeria Fotográfica &bull; Ortega&apos;s Adega Litoral (Bertioga/SP)
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-slate-100 px-3 py-1 rounded-full w-fit">
                    Render Executivo 3D
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 group">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/adega-litoral-fachada.jpg"
                        alt="Fachada Externa - Ortega's Adega Litoral"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      <strong className="text-gray-900">Fachada externa:</strong> Volumetria com brises de madeira, iluminação cênica e fechamento em vidro.
                    </p>
                  </div>

                  <div className="space-y-3 group">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/adega-litoral-interior.jpg"
                        alt="Design de Interiores - Ortega's Adega Litoral"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      <strong className="text-gray-900">Design de interiores:</strong> Expositores em madeira nobre, forro ripado e atmosfera contemporânea.
                    </p>
                  </div>

                  <div className="space-y-3 group">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/adega-interna-2.jpg"
                        alt="Área de Degustação - Ortega's Adega Litoral"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      <strong className="text-gray-900">Exposição central:</strong> Balcões modulares para rotulagem nobre, adegas climatizadas e iluminação cênica.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Diferenciais */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-600" />
                Diferenciais da CPE ENGENHARIA
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Projetos autorais adaptados ao orçamento real do cliente.",
                  "Compatibilização BIM para eliminação de imprevistos em obra.",
                  "Emissão de ART/CREA-SP para aprovação municipal e condominial.",
                  "Acompanhamento e suporte técnico contínuo."
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Coluna Lateral */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card Institucional */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black">
                  CPE
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">CPE Engenharia & Construtora</h4>
                  <span className="text-[11px] text-gray-500">CNPJ: 62.979.414/0001-94</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Especialistas em projetos técnicos, laudos periciais, reformas e aprovações com total segurança e responsabilidade.
              </p>
            </div>

            {/* Card de Atendimento */}
            <div className="bg-slate-950 text-white p-6 rounded-2xl shadow-xl space-y-5 border border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">Atendimento Imediato</span>
                <h4 className="text-lg font-bold">Solicite seu Orçamento</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Fale com nossos engenheiros para receber uma proposta técnica detalhada sobre {title}.
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
                <p>&bull; Atendimento em todo o Brasil &bull; Obras em SP</p>
                <p>&bull; Responsabilidade: Eng. Christian Gomes (CREA/SP)</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
