import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SobrePage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-16">
      {/* 1. HERO BANNER (Versão B) */}
      <section className="bg-slate-950 text-white py-16 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <span className="text-red-600 font-semibold uppercase text-xs tracking-widest bg-red-950/50 px-3 py-1 rounded-full border border-red-800/50">
            Construindo Qualidade de Vida
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3">
            Sobre a <span className="text-red-600">CPE Engenharia</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Soluções completas em engenharia civil, projetos estruturais, reformas e regularizações imobiliárias com rigor técnico e compromisso com o cliente.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
        {/* 2. APRESENTAÇÃO INSTITUCIONAL COM FOTO DO ENGENHEIRO & CTA (Junção Versão A + B) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card Principal - Foto + Propósito */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:w-56 h-64 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <Image 
                src="/images/foto-engenheiro.jpg" 
                alt="Eng. Christian Gomes da Silva" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 text-white text-xs p-2 text-center">
                <p className="font-bold">Eng. Christian Gomes da Silva</p>
                <p className="text-[10px] text-slate-300">Engenheiro Civil • CREA-SP 5070688455</p>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                Responsabilidade Técnica & Inovação
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Transformando Desafios Técnicos em Segurança e Qualidade de Vida
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                A <strong className="text-slate-900">CPE Engenharia</strong> nasceu com o propósito claro de elevar o padrão das edificações residenciais e comerciais, aliando cálculo estrutural rigoroso, conformidade com as normas ABNT e eficiência na gestão de obras.
              </p>
              <div className="bg-slate-50 border-l-4 border-red-600 p-3 rounded-r-lg text-xs text-slate-700 italic">
                <strong>NOSSO PORQUÊ (PROPÓSITO):</strong> "Acreditamos que uma estrutura segura e um projeto bem planejado não são apenas alvenaria e concreto: são o alicerce para o bem-estar, a tranquilidade e a qualidade de vida das famílias e empresas que ali habitam."
              </div>
            </div>
          </div>

          {/* Card Lateral - Atendimento Imediato (Versão A) */}
          <div className="bg-slate-950 text-white rounded-xl p-6 shadow-sm border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-xs">CPE</div>
                <div>
                  <h3 className="text-xs font-bold">CPE Engenharia & Construtora</h3>
                  <p className="text-[10px] text-slate-400">CREA-SP 5070688455</p>
                </div>
              </div>
              <hr className="border-slate-800 my-3" />
              <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">ATENDIMENTO IMEDIATO</span>
              <h4 className="text-sm font-bold mt-1 mb-2">Inicie seu projeto com a CPE</h4>
              <p className="text-xs text-slate-400 mb-4">
                Solicite uma consultoria especializada para avaliar a viabilidade técnica e proposta personalizada para o seu imóvel.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="/orcamento" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2.5 rounded-lg transition">
                Solicitar Orçamento →
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-lg transition flex items-center justify-center gap-1.5">
                💬 Falar com a Priscila
              </a>
            </div>
          </div>
        </section>

        {/* 3. RESPONSA﻿BILIDADE TÉCNICA DIRETA (Versão A) */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-2 text-red-600 font-semibold text-xs uppercase mb-2">
            <span>🛡️ Responsabilidade Técnica Direta</span>
          </div>
          <div className="bg-slate-950 text-white p-4 rounded-lg border border-slate-800">
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
              COORDENAÇÃO GERAL: ENG. CHRISTIAN GOMES (CREA-SP)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Todas as obras e laudos técnicos são coordenados e supervisionados diretamente pelo responsável técnico, garantindo rigor na conformidade de projetos, emissão de ART (Anotação de Responsabilidade Técnica) registrada no CREA-SP e gestão transparente do início à entrega formal.
            </p>
          </div>
        </section>

        {/* 4. MISSÃO, VISÃO E VALORES (Versão B) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-3">🎯</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Nossa Missão</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Oferecer soluções de engenharia civil com máxima precisão técnica, transparência e segurança jurídica, entregando projetos executivos e obras que proporcionem conforto e durabilidade aos nossos clientes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-3">👁️</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Nossa Visão</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ser reconhecida como referência no Estado de São Paulo em engenharia estrutural, regularização de imóveis e projetos integrados BIM, destacando-se pela excelência e confiabilidade técnica.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-3">❤️</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Nossos Valores</h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Rigor técnico e conformidade ABNT</li>
              <li>Transparência total em custos e prazos</li>
              <li>Compromisso inegociável com a segurança</li>
              <li>Foco constante na satisfação do cliente</li>
            </ul>
          </div>
        </section>

        {/* 5. PILARES DE EXCELÊNCIA CPE ENGENHARIA (Versão B) */}
        <section className="bg-slate-950 text-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-800">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">EXCELÊNCIA EM CADA DETALHE</span>
            <h2 className="text-xl md:text-2xl font-bold mt-1">Pilares de Excelência CPE Engenharia</h2>
            <p className="text-xs text-slate-400 mt-1">Garantimos suporte completo em todas as fases da sua edificação.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-lg">
              <div className="text-red-500 font-bold text-sm mb-1">📐 Segurança Estrutural</div>
              <p className="text-[11px] text-slate-400">Cálculos dimensionados com softwares de ponta e estrita adesão às NBRs para estabilidade total.</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-lg">
              <div className="text-red-500 font-bold text-sm mb-1">📋 Regularização Completa</div>
              <p className="text-[11px] text-slate-400">Aprovação de projetos na prefeitura, emissão de ART/CREA-SP, AVCB/CLCB e habite-se.</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-lg">
              <div className="text-red-500 font-bold text-sm mb-1">🏢 Gerenciamento de Obras</div>
              <p className="text-[11px] text-slate-400">Coordenação técnica de equipes, controle de suprimentos e cronograma físico-financeiro.</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-lg">
              <div className="text-red-500 font-bold text-sm mb-1">🛠️ Manutenção & Reformas</div>
              <p className="text-[11px] text-slate-400">Recuperação estrutural, reformas de fachadas condominiais e inspeções periciais.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800 pt-4 gap-4">
            <div>
              <p className="text-xs font-semibold">Pronto para iniciar seu projeto com responsabilidade técnica?</p>
              <p className="text-[11px] text-slate-400">Fale diretamente com nossa equipe de engenharia.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/orcamento" className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                Solicitar Orçamento →
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                💬 WhatsApp Direto
              </a>
            </div>
          </div>
        </section>

        {/* 6. CONFORMIDADE COM NORMAS ABNT & NRS (Versão A) */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="mb-4">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
              ⚙️ Conformidade com Normas ABNT & Normas Regulamentadoras (NRs)
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Nossa atuação é estritamente pautada pela segurança operacional, ambiental e normativa em todos os segmentos da construção civil:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs font-bold text-slate-900">📄 ABNT NBR 16280 & NBR 15575</div>
              <p className="text-[11px] text-slate-600 mt-1">Gestão técnica de reformas prediais, projetos de estruturas e desempenho de edificações habitacionais.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs font-bold text-slate-900">⚡ ABNT NBR 5410 & NBR 5419</div>
              <p className="text-[11px] text-slate-600 mt-1">Proteção contra descargas atmosféricas (SPDA) bem como instalações elétricas de baixa tensão em projetos arquitetônicos.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs font-bold text-slate-900">🌿 NR-12 & NR-35 (Prevenção & Proteções)</div>
              <p className="text-[11px] text-slate-600 mt-1">Critérios de alta precisão, controle preventivo e inspeção técnica com responsabilidade ambiental.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs font-bold text-slate-900">👷 NR-18 & NR-10 (Trabalho em Altura/Obra)</div>
              <p className="text-[11px] text-slate-600 mt-1">Normas de segurança para execução de laudos e vistorias em altura/obras.</p>
            </div>
          </div>
        </section>

        {/* 7. POR QUE ESCOLHER A CPE ENGENHARIA? (Versão A) */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="mb-4">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
              🏆 Por Que Escolher a CPE Engenharia?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Projetos desenvolvidos em BIM (Autodesk Revit) para zero incompatibilidade.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Planejamento Físico-Financeiro com controle orçamentário rigoroso.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Emissão formal de ART registrada no CREA para todos os serviços.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Equipe técnica especializada com treinamento constante em NRs.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Atendimento normativo e suporte direto com o corpo de engenharia.</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
              <span className="text-red-600 text-sm">✔</span>
              <p className="text-xs text-slate-700">Compromisso absoluto com o cumprimento de prazos contratuais.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
