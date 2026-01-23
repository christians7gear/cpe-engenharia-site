export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: string[];
  image: string;
  icon: string;
  category: "projetos" | "execucao";
}

export const services: Service[] = [
  {
    id: "1",
    slug: "projetos-arquitetonicos",
    title: "Projetos Arquitetônicos",
    shortDescription: "Projetos personalizados do conceito ao detalhamento executivo.",
    description: "Desenvolvemos projetos arquitetônicos completos e personalizados, desde o conceito inicial até o detalhamento executivo. Nossa equipe traduz as suas necessidades e aspirações em soluções espaciais funcionais, estéticas e em conformidade com a legislação urbanística e o Plano Diretor da sua cidade.",
    benefits: [
      "Otimização de Espaços: Maximizamos a funcionalidade e o aproveitamento de cada metro quadrado.",
      "Estética e Valorização: Criamos designs que valorizam o imóvel e refletem a identidade do cliente.",
      "Conformidade Legal: Garantimos que o projeto atenda a todas as normas técnicas (ABNT NBR 6492, NBR 9050) e regulamentações municipais.",
      "Planejamento Integrado: O projeto serve como base sólida para todos os projetos complementares, evitando retrabalho."
    ],
    process: [
      "Reunião de briefing para levantamento de necessidades (programa de necessidades).",
      "Elaboração do Estudo Preliminar e Anteprojeto com plantas baixas, cortes e fachadas.",
      "Aprovação junto ao cliente e desenvolvimento do Projeto Legal para aprovação na prefeitura.",
      "Criação do Projeto Executivo detalhado para a obra, incluindo especificações de materiais e acabamentos.",
      "Emissão da Anotação de Responsabilidade Técnica (ART)."
    ],
    image: "https://cdn.abacus.ai/images/22ea0ab3-63c7-48c8-aecb-b4ea3e7f8de8.png",
    icon: "Ruler",
    category: "projetos"
  },
  {
    id: "2",
    slug: "projetos-complementares",
    title: "Projetos Complementares",
    shortDescription: "Projetos estrutural, hidráulico e elétrico integrados.",
    description: "Realizamos a concepção e o detalhamento dos projetos de engenharia que se integram à arquitetura, garantindo a segurança, eficiência e funcionalidade da edificação. Nossos projetos são compatibilizados para evitar interferências e otimizar a execução em campo.",
    benefits: [
      "Segurança Estrutural: Dimensionamento preciso de vigas, pilares e lajes conforme as normas da ABNT (NBR 6118).",
      "Eficiência de Sistemas: Projetos hidráulicos e elétricos otimizados para performance e economia.",
      "Compatibilização: Análise de interferências entre projetos para uma obra sem surpresas.",
      "Redução de Custos: Planejamento que minimiza o desperdício de materiais e o tempo de execução."
    ],
    process: [
      "Análise do projeto arquitetônico para definição dos pontos de consumo e traçados.",
      "Dimensionamento dos sistemas estrutural, hidráulico e elétrico.",
      "Detalhamento em pranchas técnicas com especificações completas.",
      "Compatibilização final entre todas as disciplinas de engenharia.",
      "Emissão das respectivas Anotações de Responsabilidade Técnica (ART)."
    ],
    image: "https://cdn.abacus.ai/images/7ff63605-22e9-4efa-832a-43af18883e18.png",
    icon: "Layers",
    category: "projetos"
  },
  {
    id: "3",
    slug: "projetos-sda",
    title: "Projetos SDA",
    shortDescription: "Sistema de Detecção e Alarme de Incêndio conforme normas.",
    description: "Elaboramos projetos de SDAI em total conformidade com as Instruções Técnicas (IT) do Corpo de Bombeiros e a norma ABNT NBR 17240. Nossas soluções visam a detecção precoce de princípios de incêndio, permitindo uma evacuação segura e a rápida ação de combate.",
    benefits: [
      "Detecção Rápida: Posicionamento estratégico de detectores de fumaça, calor e acionadores manuais.",
      "Alerta Eficaz: Dimensionamento de sirenes e sinalizadores audiovisuais para garantir que o alerta seja percebido.",
      "Conformidade para AVCB: Projeto é requisito essencial para a obtenção do Auto de Vistoria do Corpo de Bombeiros.",
      "Segurança dos Ocupantes: Garante tempo hábil para a evacuação segura do local."
    ],
    process: [
      "Análise da classificação de risco e das características da edificação.",
      "Definição do tipo e da localização dos detectores, acionadores e central de alarme.",
      "Elaboração do projeto com diagramas, traçados de eletrodutos e especificações.",
      "Memorial descritivo e de cálculo.",
      "Emissão da Anotação de Responsabilidade Técnica (ART)."
    ],
    image: "https://cdn.abacus.ai/images/4a275068-3c84-403b-ba10-5e628a12d6ef.png",
    icon: "Siren",
    category: "projetos"
  },
  {
    id: "4",
    slug: "projetos-spci",
    title: "Projetos SPCI",
    shortDescription: "Sistema de Prevenção e Combate a Incêndio completo.",
    description: "Desenvolvemos projetos completos de SPCI, incluindo sistemas de hidrantes, mangotinhos, extintores, sinalização de emergência e iluminação de emergência. Nossos projetos seguem rigorosamente as Instruções Técnicas (IT) do Corpo de Bombeiros.",
    benefits: [
      "Proteção Ativa: Equipamentos de combate a incêndio dimensionados para uma resposta rápida e eficaz.",
      "Rota de Fuga Segura: Projeto de sinalização e iluminação de emergência que guia os ocupantes.",
      "Aprovação Garantida: Projetos elaborados para atender a todas as exigências do Corpo de Bombeiros.",
      "Preservação do Patrimônio: Soluções que ajudam a minimizar os danos materiais em caso de sinistro."
    ],
    process: [
      "Visita técnica e classificação da edificação quanto ao risco de incêndio.",
      "Dimensionamento e posicionamento dos extintores, hidrantes, iluminação e placas.",
      "Elaboração das plantas técnicas e memoriais descritivos.",
      "Submissão do projeto para análise e aprovação junto ao Corpo de Bombeiros.",
      "Emissão da Anotação de Responsabilidade Técnica (ART)."
    ],
    image: "https://cdn.abacus.ai/images/4a275068-3c84-403b-ba10-5e628a12d6ef.png",
    icon: "ShieldCheck",
    category: "projetos"
  },
  {
    id: "5",
    slug: "avcb",
    title: "AVCB",
    shortDescription: "Obtenção e renovação do Auto de Vistoria do Corpo de Bombeiros.",
    description: "Gerenciamos todo o processo para a obtenção ou renovação do seu AVCB, desde a análise inicial até a vistoria final. Cuidamos da adequação da edificação, da instalação dos sistemas de segurança e de toda a documentação necessária.",
    benefits: [
      "Regularização do Imóvel: O AVCB é obrigatório para o funcionamento da maioria das atividades.",
      "Segurança Jurídica: Evita multas, interdições e problemas com seguradoras.",
      "Gestão Simplificada: Cuidamos de toda a burocracia, desde a emissão de laudos até o protocolo.",
      "Tranquilidade: A certeza de que sua edificação foi inspecionada e aprovada."
    ],
    process: [
      "Diagnóstico completo da edificação para verificar a conformidade.",
      "Elaboração de laudos técnicos e emissão das ARTs necessárias.",
      "Gerenciamento da execução de eventuais adequações.",
      "Protocolo no sistema do Corpo de Bombeiros e acompanhamento da análise.",
      "Agendamento e acompanhamento da vistoria técnica."
    ],
    image: "https://cdn.abacus.ai/images/a2de6bfc-29df-46af-8d7d-e1238e07926b.png",
    icon: "FileCheck",
    category: "projetos"
  },
  {
    id: "6",
    slug: "obras-residenciais",
    title: "Obras Residenciais",
    shortDescription: "Construção de residências de alto padrão.",
    description: "Realizamos a construção de residências de alto padrão, desde a fundação até o acabamento. Com uma gestão de obra focada em qualidade, prazo e orçamento, transformamos seu projeto em realidade.",
    benefits: [
      "Gestão Profissional: Cronograma físico-financeiro detalhado e controle rigoroso.",
      "Qualidade Construtiva: Materiais de primeira linha e mão de obra qualificada.",
      "Cumprimento de Prazos: Planejamento eficiente para entregar na data combinada.",
      "Transparência: Relatórios periódicos sobre o andamento da obra e controle de custos."
    ],
    process: [
      "Planejamento da obra com base nos projetos executivos.",
      "Orçamentação detalhada de materiais e mão de obra.",
      "Execução das fundações, estrutura, alvenaria e lajes.",
      "Instalação dos sistemas elétricos, hidráulicos e de climatização.",
      "Acabamentos, pintura, entrega e emissão do Habite-se."
    ],
    image: "https://cdn.abacus.ai/images/cc7a2846-a6d0-46a9-a123-55731c65a5ff.png",
    icon: "Home",
    category: "execucao"
  },
  {
    id: "7",
    slug: "postos-abastecimento",
    title: "Postos de Abastecimento",
    shortDescription: "Construção e reforma de postos de combustíveis.",
    description: "Somos especialistas na construção e reforma de postos de combustíveis, um tipo de obra que exige alto conhecimento técnico e rigor no cumprimento de normas ambientais e de segurança (CONAMA, ABNT, NR-20).",
    benefits: [
      "Expertise Técnica: Conhecimento profundo das normas para sistemas de armazenamento subterrâneo.",
      "Segurança Operacional: Implementação rigorosa de sistemas de drenagem e contenção.",
      "Conformidade Ambiental: Execução que garante a obtenção das licenças ambientais.",
      "Agilidade na Execução: Planejamento otimizado para minimizar o tempo de construção."
    ],
    process: [
      "Planejamento e licenciamento ambiental prévio.",
      "Terraplanagem e execução das fundações das ilhas de abastecimento.",
      "Instalação dos tanques subterrâneos, tubulações e sistemas de monitoramento.",
      "Construção da cobertura e instalações elétricas à prova de explosão.",
      "Comissionamento dos sistemas e preparação para vistoria."
    ],
    image: "https://cdn.abacus.ai/images/53518646-e45e-4c47-81d1-54baa81043f3.png",
    icon: "Fuel",
    category: "execucao"
  },
  {
    id: "8",
    slug: "galpoes-industriais",
    title: "Galpões Industriais",
    shortDescription: "Construção de galpões industriais e centros de distribuição.",
    description: "Construímos galpões industriais e centros de distribuição com foco em funcionalidade, vãos livres amplos e eficiência logística. Nossas soluções em estruturas metálicas ou pré-moldadas são ideais para empresas que buscam agilidade.",
    benefits: [
      "Amplos Vãos Livres: Estruturas dimensionadas para maximizar o espaço útil.",
      "Construção Acelerada: Sistemas construtivos industrializados que reduzem o tempo de obra.",
      "Pisos de Alta Resistência: Pisos industriais dimensionados para tráfego intenso.",
      "Solução Completa: Construção chave na mão incluindo docas e escritórios."
    ],
    process: [
      "Projeto e terraplanagem do terreno.",
      "Execução das fundações e do piso industrial de alta resistência.",
      "Montagem da estrutura principal (metálica ou pré-moldada).",
      "Instalação do fechamento lateral e da cobertura.",
      "Construção de docas, áreas administrativas e instalações complementares."
    ],
    image: "https://cdn.abacus.ai/images/025a3994-37de-4f81-9bb3-7276165b3a50.png",
    icon: "Warehouse",
    category: "execucao"
  },
  {
    id: "9",
    slug: "industrias",
    title: "Indústrias",
    shortDescription: "Construção e ampliação de plantas industriais.",
    description: "Executamos projetos de construção e ampliação de plantas industriais de diversos segmentos. Entendemos que cada indústria possui necessidades únicas de layout, fluxo de produção e instalações especiais.",
    benefits: [
      "Foco no Processo Produtivo: Construção planejada em torno do seu layout industrial.",
      "Instalações Especiais: Experiência em bases para equipamentos pesados e infraestrutura complexa.",
      "Normas de Segurança: Rigor no cumprimento das NRs aplicáveis (NR-10, NR-12, NR-13).",
      "Flexibilidade e Escalabilidade: Projetamos permitindo futuras expansões."
    ],
    process: [
      "Planejamento detalhado em conjunto com a equipe de engenharia do cliente.",
      "Execução da infraestrutura civil, incluindo bases de máquinas.",
      "Montagem da superestrutura e instalações prediais.",
      "Interface com montadores de equipamentos e fornecedores.",
      "Finalização, comissionamento e suporte para start-up."
    ],
    image: "https://cdn.abacus.ai/images/89524fd6-adbb-4264-96cb-0f4601dff1e0.png",
    icon: "Factory",
    category: "execucao"
  },
  {
    id: "10",
    slug: "reforma-fachadas",
    title: "Reforma de Fachadas",
    shortDescription: "Revitalização e modernização de fachadas.",
    description: "Revitalizamos e modernizamos fachadas de edifícios residenciais, comerciais e corporativos. Nossos serviços abrangem desde a recuperação de revestimentos até a modernização completa (retrofit).",
    benefits: [
      "Valorização do Imóvel: Fachada renovada moderniza a imagem e aumenta o valor.",
      "Segurança: Tratamento de fissuras e fixação de revestimentos, eliminando riscos.",
      "Durabilidade e Proteção: Materiais de alta performance contra intempéries.",
      "Conformidade com a NBR 16280: Gestão de reformas seguindo a norma de segurança."
    ],
    process: [
      "Inspeção da fachada para diagnóstico de patologias (laudo técnico).",
      "Elaboração do projeto de recuperação ou modernização.",
      "Montagem de andaimes e sistemas de proteção.",
      "Execução: limpeza, tratamento de patologias, aplicação de novo revestimento.",
      "Desmobilização e entrega da obra com garantia."
    ],
    image: "https://cdn.abacus.ai/images/3cf78604-3225-4ac4-9f1c-3a27b4958552.png",
    icon: "Building2",
    category: "execucao"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: "projetos" | "execucao"): Service[] => {
  return services.filter(s => s.category === category);
};
