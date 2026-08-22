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
    image: "/images/adega-litoral-fachada.jpg",
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
    image: "/images/structural.png",
    icon: "Layers",
    category: "projetos"
  },
  {
    id: "3",
    slug: "projetos-spda",
    title: "Projetos SPDA (Para-raios)",
    shortDescription: "Sistemas de Proteção contra Descargas Atmosféricas conforme ABNT NBR 5419.",
    description: "Elaboramos projetos técnicos completos de SPDA (Para-raios) e Gerenciamento de Risco em total conformidade com a ABNT NBR 5419. Nossas soluções protegem estruturas prediais, ocupantes e equipamentos eletroeletrônicos contra os efeitos diretos e indiretos de raios.",
    benefits: [
      "Gerenciamento de Risco: Análise técnica quantitativa conforme NBR 5419-2 para definição do nível de proteção.",
      "Proteção Integral: Projeto de captores (Franklin e Gaiola de Faraday), condutores de descida e malha de aterramento.",
      "Proteção de Equipamentos (DPS): Dimensionamento de Dispositivos de Proteção contra Surtos para proteger instalações elétricas.",
      "Conformidade e Laudo Técnico: Emissão de ART e documentação essencial para aprovação e renovação do AVCB."
    ],
    process: [
      "Levantamento da arquitetura e cálculo de gerenciamento de risco da edificação.",
      "Dimensionamento da malha captora, anéis de cintamento e subsistema de aterramento.",
      "Elaboração de plantas técnicas, cortes e detalhes construtivos.",
      "Memorial descritivo de cálculo e especificações técnicas de materiais.",
      "Emissão da Anotação de Responsabilidade Técnica (ART)."
    ],
    image: "/images/spda.jpg",
    icon: "Zap",
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
    image: "/images/fire_protection.png",
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
    image: "/images/avcb.png",
    icon: "FileCheck",
    category: "projetos"
  },
  {
    id: "6",
    slug: "obras-residenciais",
    title: "Obras Residenciais",
    shortDescription: "Construção de residências de alto padrão.",
    description: "Realizamos a construção de residências de alto padrão, desde a fundação até o acabamento fino. Com uma gestão de obra focada em qualidade, cumprimento de prazo e controle de custos, transformamos seu projeto em realidade.",
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
    image: "/images/residencia.jpg",
    icon: "Home",
    category: "execucao"
  },
  {
    id: "7",
    slug: "postos-abastecimento",
    title: "Postos de Abastecimento",
    shortDescription: "Construção e reforma de postos de combustíveis.",
    description: "Somos especialistas na construção e reforma de postos de combustíveis e pontos de abastecimento frotistas, com alto conhecimento técnico e rigor no cumprimento de normas ambientais e de segurança (CONAMA, ABNT, NR-20).",
    benefits: [
      "Expertise Técnica: Conhecimento profundo das normas para sistemas de armazenamento e abastecimento.",
      "Segurança Operacional: Implementação rigorosa de sistemas de drenagem, pista blindada e contenção.",
      "Conformidade Ambiental: Execução que atende a todos os requisitos de licenciamento e segurança.",
      "Agilidade na Execução: Planejamento otimizado para minimizar o impacto na operação logística."
    ],
    process: [
      "Planejamento e adequação técnica às normas vigentes.",
      "Terraplanagem, piso em concreto armado de alta resistência e contenções.",
      "Instalação de bombas, tanques, tubulações e sistemas de filtragem e monitoramento.",
      "Montagem da cobertura metálica e instalações elétricas à prova de explosão (Ex).",
      "Comissionamento dos sistemas, testes de estanqueidade e entrega técnica com ART."
    ],
    image: "/images/posto-tassi.png",
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
    image: "/images/warehouse.png",
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
    image: "/images/industrial_facility.png",
    icon: "Factory",
    category: "execucao"
  },
  {
    id: "10",
    slug: "reforma-fachadas",
    title: "Reforma e Revitalização de Fachadas",
    shortDescription: "Recuperação estrutural, impermeabilização, pintura técnica e retrofit predial.",
    description: "Revitalizamos e modernizamos fachadas de edifícios residenciais, comerciais e corporativos. Nossos serviços abrangem desde a recuperação de elementos estruturais e revestimentos até a impermeabilização e pintura técnica de alto desempenho.",
    benefits: [
      "Valorização do Imóvel: Fachada renovada moderniza a imagem e aumenta o valor patrimonial.",
      "Segurança e Estanqueidade: Tratamento de fissuras e eliminação de riscos de desprendimento e infiltrações.",
      "Durabilidade e Proteção: Materiais elastoméricos de alta performance contra intempéries e raios UV.",
      "Conformidade NBR 16280 e NR-35: Gestão técnica de reformas e trabalho em altura com ART registrada."
    ],
    process: [
      "Inspeção técnica detalhada da fachada para diagnóstico de patologias com teste de percussão.",
      "Lavagem e hidrojateamento de alta pressão para preparação de base.",
      "Tratamento de trincas, recuperação de armaduras expostas e juntas de dilatação.",
      "Aplicação de textura acrílica hidro-repelente e pintura técnica elastomérica.",
      "Desmobilização e entrega formal da obra com termo de garantia técnica."
    ],
    image: "/images/fachada-atlanta-dia.png",
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
