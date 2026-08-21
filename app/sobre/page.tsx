"use client";

import Link from "next/link";
import { 
  Building2, 
  Target, 
  Eye, 
  Heart, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  HardHat
} from "lucide-react";
import { companyData } from "@/lib/company-data";

export default function SobrePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* Banner Principal */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Construindo Qualidade de Vida
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Sobre a <span className="text-red-600">CPE Engenharia</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Soluções completas em engenharia civil, projetos estruturais, reformas e regularizações imobiliárias com rigor técnico e compromisso com o cliente.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Seção 1: Apresentação do Engenheiro & Liderança */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Foto do Engenheiro */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg bg-slate-100 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/engineer.png"
                alt="Eng. Civil Christian Gomes da Silva - CPE Engenharia"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-white">
                <p className="font-bold text-base">Eng. Christian Gomes da Silva</p>
                <p className="text-xs text-red-400 font-medium">Engenheiro Civil &bull; CREA-SP 5070688455</p>
              </div>
            </div>
          </div>

          {/* Texto de Apresentação e Propósito */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
              <HardHat className="w-4 h-4" />
              <span>Responsabilidade Técnica & Inovação</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              Transformando Desafios Técnicos em Segurança e Qualidade de Vida
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              A <strong>CPE Engenharia</strong> nasceu com o propósito claro de elevar o padrão das edificações residenciais e comerciais, aliando cálculo estrutural rigoroso, conformidade com as normas ABNT e eficiência na gestão de obras.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Sob a liderança do <strong>Eng. Civil Christian Gomes da Silva (CREA-SP 5070688455)</strong>, atua de forma integral desde a concepção de projetos arquitetônicos e estruturais até regularizações de alvarás, reformas de fachadas, laudos e laudos periciais.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Nosso Porquê (Propósito)</p>
              <p className="text-xs text-gray-600 leading-relaxed italic">
                &quot;Acreditamos que uma estrutura segura e um espaço bem projetado não são apenas alvenaria e concreto: são o alicerce para o bem-estar, a tranquilidade e a qualidade de vida das famílias e empresas que ali habitam.&quot;
              </p>
            </div>
          </div>

        </div>

        {/* Seção 2: Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Missão */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Nossa Missão</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Oferecer soluções de engenharia civil com máxima precisão técnica, transparência e segurança jurídica, entregando projetos executivos e obras que proporcionem conforto e durabilidade aos nossos clientes.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Nossa Visão</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Ser reconhecida como referência no Estado de São Paulo em engenharia estrutural, regularização de imóveis e projetos integrados BIM, destacando-se pela excelência e confiabilidade técnica.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Nossos Valores</h3>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Rigor técnico e conformidade com normas ABNT</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Transparência total nos custos e prazos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Compromisso inegociável com a segurança</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Foco constante na satisfação do cliente</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Seção 3: Metas & Pilares de Atuação */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">Excelência em Cada Detalhe</span>
            <h3 className="text-2xl sm:text-3xl font-black">Pilares de Excelência CPE Engenharia</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Garantimos suporte completo em todas as fases da sua edificação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              <h4 className="font-bold text-sm">Segurança Estrutural</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Cálculos dimensionados com softwares de ponta e estrita adesão às NBRs para estabilidade total.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <Award className="w-6 h-6 text-red-500" />
              <h4 className="font-bold text-sm">Regularização Completa</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Aprovação de projetos na prefeitura, emissão de ART/CREA-SP, AVCB/CLCB e habite-se.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <Building2 className="w-6 h-6 text-red-500" />
              <h4 className="font-bold text-sm">Gerenciamento de Obras</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Coordenação técnica de equipes, controle de suprimentos e cronograma físico-financeiro.
              </p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
              <HardHat className="w-6 h-6 text-red-500" />
              <h4 className="font-bold text-sm">Manutenção & Reformas</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Recuperação estrutural, reformas de fachadas condominiais e inspeções prediais especializadas.
              </p>
            </div>
          </div>

          {/* Chamada para Ação */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm sm:text-base">Pronto para iniciar seu projeto com responsabilidade técnica?</p>
              <p className="text-xs text-gray-400">Fale diretamente com nossa equipe de engenharia.</p>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl text-xs transition-all shadow-md w-full sm:w-auto"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? "5511989320917"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-xl text-xs transition-all shadow-md w-full sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
