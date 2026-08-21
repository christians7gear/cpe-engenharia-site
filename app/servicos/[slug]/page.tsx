"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Camera,
  Zap,
  Compass,
  Monitor,
  Sparkles,
  Store
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services-data";
import { companyData } from "@/lib/company-data";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug) || services[0];

  const isPosto = service.slug === "postos-abastecimento";
  const isFachada = service.slug === "reforma-fachadas";
  const isSPDA = service.slug === "projetos-spda";
  const isArquitetura = service.slug === "projetos-arquitetonicos";

  const fotoFachadaDia = "/images/fachada-atlanta-dia.png";
  const fotoFachadaNoite = "/images/fachada-atlanta-noite.png";

  const fotoPostoAerea = "/images/posto-tassi-2.png";
  const fotoPostoFrontal = "/images/posto-tassi-3.png";

  const fotoAdegaFachada = "/images/adega-litoral-fachada.jpg";
  const fotoAdegaInterior = "/images/adega-litoral-interior.jpg";

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
          
          {/* Coluna Principal */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bloco 1: Excelência em Engenharia & Arquitetura */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-red-600 rounded-full inline-block" />
                Excelência em Engenharia & Construtora
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                A <strong className="text-red-600">CPE ENGENHARIA</strong> entrega soluções completas em projetos arquitetônicos autorais, engenharia consultiva, reformas prediais e infraestrutura civil pesada, atuando de ponta a ponta com emissão de ART registrada no CREA-SP.
              </p>

              {/* Destaque Projetos Arquitetônicos */}
              {isArquitetura && (
                <div className="bg-slate-950 text-white p-5 rounded-xl border-l-4 border-red-600 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                    <Store className="w-4 h-4 text-yellow-400" />
                    PROJETO ARQUITETÔNICO COMPLETO &bull; ORTEGA&apos;S ADEGA LITORAL (BERTIOGA/SP)
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Neste case comercial exclusivo para a <strong>Ortega&apos;s Adega Litoral em Bertioga/SP</strong>, a <strong>CPE ENGENHARIA</strong> desenvolveu o projeto arquitetônico integral de alto padrão: volumetria em madeira nobre e pele de vidro, layout funcional de loja, setorização de adega climatizada e detalhamento luminotécnico para máxima experiência do consumidor.
                  </p>
                </div>
              )}

              {/* Destaque SPDA */}
              {isSPDA && (
                <div className="bg-slate-950 text-white p-5 rounded-xl border-l-4 border-red-600 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    PROJETOS DE SPDA &bull; GERENCIAMENTO DE RISCO SEGUNDO A NBR 5419:2015
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    A <strong>CPE ENGENHARIA</strong> desenvolve estudos técnicos aprofundados para condomínios, indústrias e galpões comerciais. Nossos projetos contemplam desde o subsistema de captação e descidas estruturais até a malha de aterramento e Medidas de Proteção contra Surtos (MPS), garantindo a preservação de vidas e a integridade de equipamentos eletrônicos sensíveis.
                  </p>
                </div>
              )}

              {/* Case Fachada */}
              {isFachada && (
                <div className="bg-slate-950 text-white p-5 rounded-xl border-l-4 border-red-600 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    OBRA COMPLETA: REVITALIZAÇÃO PREDIAL & FACHADA &bull; CONDOMÍNIO ATLANTA (ZONA LESTE/SP)
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Neste case residencial para o <strong>Condomínio Atlanta em São Paulo/SP</strong>, a <strong>CPE ENGENHARIA</strong> foi responsável pelo projeto técnico executivo integral, inspeção pericial por percussão, tratamento de armaduras expostas, calafetação de juntas e pintura técnica hidro-repelente com garantia de estanqueidade.
                  </p>
                </div>
              )}

              {/* Case Posto */}
              {isPosto && (
                <div className="bg-slate-950 text-white p-5 rounded-xl border-l-4 border-red-600 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    OBRA COMPLETA: PROJETO E EXECUÇÃO &bull; TRANSTASSI (GUARULHOS/SP)
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Neste case corporativo para a <strong>Transtassi em Guarulhos/SP</strong>, a <strong>CPE ENGENHARIA</strong> realizou o projeto executivo e a implantação completa do ponto de abastecimento de combustíveis e lubrificantes: desde a terraplanagem e piso blindado para carretas pesadas até instalações elétricas à prova de explosão e contenção ambiental.
                  </p>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>

            {/* Bloco 2: Tecnologia e Softwares (Arquitetura) */}
            {isArquitetura && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-red-600" />
                  Tecnologia de Ponta, Metodologia BIM & Softwares Avançados
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Para garantir compatibilização milimétrica, controle orçamentário e visualização realista antes do início da obra, utilizamos as ferramentas mais avançadas do mercado global:
                </p>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <Compass className="w-4 h-4" /> Autodesk Revit (BIM)
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Modelagem de Informação da Construção (BIM) com integração paramétrica entre arquitetura, estrutura e instalações, eliminando retrabalhos em campo.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <Layers className="w-4 h-4" /> AutoCAD 2D/3D
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Precisão geométrica absoluta em plantas executivas, cortes longitudinais, fachadas técnicas, paginações de piso e pranchas para prefeitura.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> SketchUp & Render 3D
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Imagens e passeios virtuais hiper-realistas para que você visualize cada textura, cor, iluminação e acabamento com fidelidade fotográfica.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 2: Rigor Técnico e Normas (SPDA) */}
            {isSPDA && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  Rigor Normativo & ABNT NBR 5419:2015
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Todos os projetos de SPDA desenvolvidos pela <strong>CPE ENGENHARIA</strong> são calculados de forma analítica atendendo integralmente as 4 partes da norma técnica:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> NBR 5419-2: Análise de Risco
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Cálculo probabilístico das perdas de vida humana (R1), perdas de serviços públicos (R2) e perdas econômicas (R4) para definição precisa do Nível de Proteção (I a IV).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> NBR 5419-4: Proteção MPS & DPS
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Dimensionamento de Zonas de Proteção contra Raios (LPZ), Dispositivos de Proteção contra Surtos (DPS) e blindagem de circuitos elétricos e de automação.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 2: Rigor Técnico e Normas (Fachadas) */}
            {isFachada && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  Rigor Técnico e Normas Regulamentadoras
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Obras em altura e intervenções em fachadas exigem conformidade absoluta com as normas vigentes. A <strong>CPE ENGENHARIA</strong> projetou e executou o sistema atendendo rigorosamente:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> ABNT NBR 16280 & Inspeção Predial
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Gestão de reformas e recuperação estrutural com ensaios periciais, teste de percussão e atendimento às normas de desempenho construtivo.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> NR-35 & Segurança do Trabalho
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Equipes 100% qualificadas em trabalho em altura, pontos de ancoragem certificados, andaimes conforme NR-18 e linha de vida homologada.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 2: Rigor Técnico e Normas (Postos) */}
            {isPosto && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  Conformidade Normativa, Ambiental e de Segurança
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A engenharia para pontos de abastecimento e sistemas de armazenamento de combustível exige conformidade rigorosa com normas ambientais e de segurança contra incêndio:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Resolução CONAMA 273 & ABNT
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Sistemas de contenção de vazamentos, piso impermeável estanque, canaletas de contenção e caixas separadoras de água e óleo (SAO).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> NR-20 & Atmosferas Explosivas (Ex)
                    </span>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Dimensionamento de instalações elétricas blindadas e à prova de explosão (Zoneamento Ex), aterramento e SPDA homologado.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 3: Escopo Técnico (Arquitetura) */}
            {isArquitetura && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-600" />
                  Fases de Elaboração do Projeto Arquitetônico CPE
                </h3>
                
                <ul className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>1. Briefing & Programa de Necessidades:</strong> Reunião de alinhamento detalhado para mapear o perfil da família/empresa, hábitos, demandas espaciais e previsão orçamentária.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>2. Estudo Preliminar & Zoneamento:</strong> Análise topográfica, insolação, ventos dominantes, plano de massa, layout humanizado e primeiras ideias volumétricas.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>3. Anteprojeto & Maquete Eletrônica 3D:</strong> Modelagem em Revit/SketchUp com apresentação de fachadas, texturas, volumetrias e definição de acabamentos finos com o cliente.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>4. Projeto Legal (Prefeitura & Condomínio):</strong> Elaboração de plantas de aprovação com rigorosa conformidade ao Plano Diretor, Código de Obras municipal e normas ABNT NBR 6492.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>5. Projeto Executivo de Detalhamento:</strong> Conjunto completo de pranchas construtivas (alvenarias, portas, esquadrias, louças, metais, impermeabilização e paginação de revestimentos) com ART/CREA-SP.</div>
                  </li>
                </ul>

                <p className="pt-2 text-xs text-gray-500 italic border-t border-slate-100">
                  Coordenação técnica liderada pelo <strong>Eng. Christian Gomes</strong>, assegurando que o projeto de arquitetura converse em perfeita sincronia com a engenharia estrutural e as instalações prediais.
                </p>
              </div>
            )}

            {/* Bloco 3: Escopo Técnico (SPDA) */}
            {isSPDA && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-600" />
                  Escopo de Engenharia e Entregáveis do Projeto SPDA
                </h3>
                
                <ul className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Subsistema de Captação:</strong> Projeto de malha captora em fita/cabo de cobre ou alumínio (Método de Faraday), posicionamento de captores Franklin e análise de esfera rolante.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Subsistema de Descidas:</strong> Definição de descidas externas protegidas ou aproveitamento de armaduras estruturais do concreto armado (descidas naturais) com ensaios de continuidade elétrica.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Subsistema de Aterramento & Equipotencialização:</strong> Dimensionamento do anel de aterramento em volta da edificação, caixas de inspeção e Barramento de Equipotencialização Principal (BEP).</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Medição de Continuidade e Resistência de Aterramento:</strong> Vistoria em campo com uso de terrômetro e mili-ohmímetro calibrados para emissão de laudo técnico pericial.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Documentação para AVCB:</strong> Memorial descritivo detalhado, pranchas em DWG/PDF e emissão de Anotação de Responsabilidade Técnica (ART/CREA-SP).</div>
                  </li>
                </ul>

                <p className="pt-2 text-xs text-gray-500 italic border-t border-slate-100">
                  Responsabilidade técnica direta do <strong>Eng. Christian Gomes</strong>, com atendimento a todas as diretrizes do Corpo de Bombeiros e seguradoras.
                </p>
              </div>
            )}

            {/* Bloco 3: Escopo Técnico (Fachadas) */}
            {isFachada && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-600" />
                  Escopo de Engenharia Executado em Campo
                </h3>
                
                <ul className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Lavagem e Hidrojateamento Técnico:</strong> Limpeza profunda de alta pressão para desincrustação de fuligem, remoção de fungos e preparação da base mineral.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Mapeamento & Teste de Percussão:</strong> Identificação minuciosa de áreas com som cavo, pastilhas soltas e risco iminente de destacamento.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Recuperação Estrutural:</strong> Tratamento químico de ferragens expostas com primer anticorrosivo e recomposição volumétrica em argamassa polimérica estrutural.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Tratamento de Fissuras e Juntas de Dilatação:</strong> Abertura técnica em &apos;V&apos; e calafetação com mastique de Poliuretano (PU) de alta elasticidade.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Pintura Técnica & Textura Acrílica:</strong> Aplicação de selador acrílico, textura hidro-repelente e acabamento elastomérico com proteção contra intempéries e raios UV.</div>
                  </li>
                </ul>

                <p className="pt-2 text-xs text-gray-500 italic border-t border-slate-100">
                  A coordenação técnica foi conduzida diretamente pelo <strong>Eng. Christian Gomes</strong>, com emissão de Anotações de Responsabilidade Técnica (ART) para todas as disciplinas de projeto e execução civil.
                </p>
              </div>
            )}

            {/* Bloco 3: Escopo Técnico (Postos) */}
            {isPosto && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-600" />
                  Engenharia e Implantação Executada no Case Transtassi
                </h3>
                
                <ul className="space-y-3 text-xs text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Piso Blindado em Concreto Armado:</strong> Execução de laje em concreto usinado de alto FCK com dupla armadura de aço, dimensionada para cargas e tráfego intenso de frotas pesadas.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Ilha de Abastecimento & Bombas Industriais:</strong> Instalação de ilha em nível elevado com bordas de proteção, bombas eletrônicas de alto fluxo e filtros coalescentes.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Drenagem e Sistema Separador (SAO):</strong> Canaletas periféricas gradeadas com direcionamento exclusivo de efluentes oleosos para Caixa Separadora de Água e Óleo.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Cobertura Metálica Estruturada:</strong> Cobertura em balanço em perfis metálicos galvanizados com testeira personalizada, iluminação LED blindada e calhas de drenagem pluvial.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <div><strong>Sinalização Técnica e Proteção Mecânica:</strong> Pintura epóxi demarcatória de segurança, balizadores mecânicos contra colisão e sinalização normativa de combate a incêndio.</div>
                  </li>
                </ul>

                <p className="pt-2 text-xs text-gray-500 italic border-t border-slate-100">
                  A coordenação técnica foi conduzida diretamente pelo <strong>Eng. Christian Gomes</strong>, com emissão de Anotações de Responsabilidade Técnica (ART) registradas no CREA-SP.
                </p>
              </div>
            )}

            {/* Bloco 4: Galeria Fotográfica (Arquitetura - Ortega's Adega Litoral) */}
            {isArquitetura && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-red-600" />
                    Galeria Fotográfica &bull; Ortega&apos;s Adega Litoral (Bertioga/SP)
                  </h3>
                  <span className="text-[11px] text-gray-400 font-medium">Render Executivo 3D</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoAdegaFachada}
                        alt="Ortega's Adega Litoral - Fachada Externa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Fachada externa: Volumetria com brises de madeira, iluminação cênica e fechamento em vidro.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoAdegaInterior}
                        alt="Ortega's Adega Litoral - Design de Interiores"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Design de interiores: Expositores em madeira nobre, forro ripado e atmosfera contemporânea.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 4: Galeria Fotográfica (Fachadas) */}
            {isFachada && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-red-600" />
                    Galeria Fotográfica &bull; Obra Condomínio Atlanta
                  </h3>
                  <span className="text-[11px] text-gray-400 font-medium">Registros Técnicos da Obra</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoFachadaDia}
                        alt="Condomínio Atlanta - Perspectiva Diurna"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Visão diurna: Acabamento texturizado, alinhamento estético e pintura concluída.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoFachadaNoite}
                        alt="Condomínio Atlanta - Perspectiva Noturna"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Visão noturna: Valorização da iluminação arquitetônica e volumetria predial.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 4: Galeria Fotográfica (Postos) */}
            {isPosto && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-red-600" />
                    Galeria Fotográfica &bull; Obra Transtassi (Guarulhos/SP)
                  </h3>
                  <span className="text-[11px] text-gray-400 font-medium">Registros da Implantação</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoPostoAerea}
                        alt="Posto Transtassi - Vista Aérea"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Vista aérea: Cobertura metálica, pátio em concreto armado e tanques aéreos integrados.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fotoPostoFrontal}
                        alt="Posto Transtassi - Vista Frontal da Bomba"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] text-center text-gray-500 font-medium">
                      Vista frontal: Ilha de bombas industriais, piso antiderrapante e área de operação.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bloco 5: Diferenciais */}
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

            {/* Bloco 6: Metodologia */}
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
            
            {/* Card Lateral */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="relative h-64 w-full bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    isFachada 
                      ? fotoFachadaDia 
                      : isPosto 
                      ? fotoPostoAerea 
                      : isArquitetura 
                      ? fotoAdegaFachada 
                      : service.image
                  }
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-[11px] text-gray-600">
                <Building2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                <span>
                  {isFachada 
                    ? "Obra entregue: Condomínio Atlanta • Zona Leste/SP" 
                    : isPosto 
                    ? "Obra entregue: Transtassi • Guarulhos/SP" 
                    : isArquitetura
                    ? "Projeto entregue: Ortega's Adega • Bertioga/SP"
                    : `${service.title} • CPE Engenharia`}
                </span>
              </div>
            </div>

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
                <p>&bull; Atendimento: Projetos em todo o Brasil &bull; Execução de Obras em SP</p>
                <p>&bull; Responsabilidade Técnica: Eng. Christian Gomes (CREA/SP)</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
