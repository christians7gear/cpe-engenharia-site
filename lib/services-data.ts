export interface ServiceGalleryItem {
  src: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  category: "projetos" | "obras";
  image: string;
  heroImage: string;
  badge?: string;
  caseStudy?: {
    client: string;
    location: string;
    scope: string;
  };
  technicalNorms?: {
    crea: string;
    art: string;
    standards: string[];
  };
  technicalScope?: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  gallery?: ServiceGalleryItem[];
  benefits: {
    title: string;
    desc: string;
  }[];
  methodology: {
    step: string;
    title: string;
    desc: string;
  }[];
  process?: string[];
  sidebarImageCaption?: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "postos-abastecimento": {
    slug: "postos-abastecimento",
    title: "Postos de Abastecimento e Sistemas de Combustível",
    subtitle: "Engenharia especializada para pontos de abastecimento interno, frotas e logística pesada",
    shortDescription: "Infraestrutura completa para pontos de abastecimento de combustíveis (PAAC), tanques, bombas e contenção ambiental.",
    category: "obras",
    image: "/images/posto-tassi.png",
    heroImage: "/images/posto-tassi.png",
    badge: "Case Real de Engenharia",
    description:
      "A CPE ENGENHARIA projeta e executa soluções completas em infraestrutura para pontos de abastecimento de combustíveis e lubrificantes (PAAC). Atuamos desde a fundação e piso de alta resistência até a montagem mecânica de tanques, bombas, tubulações de PEAD, drenagem oleosa com caixa separadora (SAO) e sistemas à prova de explosão (Ex).",
    sidebarImageCaption: "Obra entregue: Transtassi • Guarulhos/SP",
    caseStudy: {
      client: "Transtassi Transportes",
      location: "Guarulhos / SP",
      scope: "Projeto executivo, piso de concreto armado usinado, montagem de cobertura metálica, ilha de abastecimento de alta performance, tanques aéreos e drenagem ambiental.",
    },
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "Emissão obrigatória de ART (Anotação de Responsabilidade Técnica) antes do início da obra",
      standards: [
        "ABNT NBR 13781 / 13783 / 13786 (Sistemas de Armazenamento Subterrâneo e Aéreo de Combustíveis)",
        "ABNT NBR 14605 (Postos de Serviços - Sistema de Drenagem Oleosa e Caixas Separadoras SAO)",
        "NR-10 (Segurança em Instalações e Serviços em Eletricidade em Áreas Classificadas / Ex)",
        "NR-20 (Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis)",
      ],
    },
    technicalScope: {
      title: "Escopo de Engenharia Executado em Campo",
      items: [
        {
          title: "Pavimentação Rígida de Alta Resistência",
          desc: "Execução de piso de concreto armado usinado com acabamento polido e juntas de dilatação seladas com mástique resistente a hidrocarbonetos.",
        },
        {
          title: "Infraestrutura Hidráulica e Mecânica",
          desc: "Instalação de tubulações em PEAD soldadas por eletrofusão, bombas de alto fluxo, filtros coalescentes e interligação segura de tanques.",
        },
        {
          title: "Contenção e Proteção Ambiental",
          desc: "Bacias de contenção estanques, canaletas perimetrais blindadas e caixas separadoras de água e óleo (SAO) em conformidade com órgãos ambientais.",
        },
        {
          title: "Cobertura Metálica e Instalações Elétricas Ex",
          desc: "Montagem de estrutura metálica com testeira padronizada, iluminação LED industrial e instalações elétricas intrinsecamente seguras (à prova de explosão).",
        },
      ],
    },
    gallery: [
      {
        src: "/images/posto-tassi.png",
        title: "Visão Geral do Pátio e Cobertura",
        subtitle: "Estrutura metálica com cobertura em balanço e pátio em concreto armado.",
        tag: "Visão Geral",
      },
      {
        src: "/images/posto-tassi-2.png",
        title: "Perspectiva Aérea da Operação",
        subtitle: "Disposição técnica dos tanques de armazenamento, pista blindada e fluxo de carretas.",
        tag: "Vista Aérea",
      },
      {
        src: "/images/posto-tassi-3.jpg",
        title: "Ilha de Abastecimento e Bombas",
        subtitle: "Bombas industriais de alta vazão com totens de monitoramento e contenções operacionais.",
        tag: "Ilha Técnica",
      },
    ],
    benefits: [
      {
        title: "Expertise Técnica em Normas",
        desc: "Conhecimento profundo das normas ABNT, NRs e órgãos ambientais para armazenamento e abastecimento.",
      },
      {
        title: "Segurança Operacional Absoluta",
        desc: "Implementação rigorosa de sistemas de drenagem, pista blindada e contenção contra vazamentos.",
      },
      {
        title: "Conformidade Ambiental Rigorosa",
        desc: "Execução que atende 100% aos requisitos de licenciamento e segurança ambiental (CETESB/IBAMA).",
      },
      {
        title: "Agilidade na Execução",
        desc: "Planejamento otimizado de obra para minimizar o impacto na operação logística e pátio de veículos.",
      },
    ],
    methodology: [
      {
        step: "1",
        title: "Planejamento e Adequação Técnica",
        desc: "Levantamento topográfico, compatibilização dos projetos civil, mecânico e elétrico conforme as normas vigentes.",
      },
      {
        step: "2",
        title: "Terraplanagem e Pavimentação Armada",
        desc: "Preparação do subleito, armação com telas soldadas e concretagem da pista com concreto usinado Fck compatível com tráfego pesado.",
      },
      {
        step: "3",
        title: "Instalação de Bombas, Tanques e Tubulações",
        desc: "Montagem da hidráulica de combustíveis com tubos PEAD de parede dupla, filtros, válvulas de segurança e tanques de armazenamento.",
      },
      {
        step: "4",
        title: "Montagem da Cobertura e Elétrica Ex",
        desc: "Içamento e fixação da estrutura metálica da cobertura e passagem da fiação blindada à prova de explosão (Ex).",
      },
      {
        step: "5",
        title: "Comissionamento e Entrega Técnica",
        desc: "Testes de estanqueidade, calibração de bombas, inspeção final com emissão de ART e entrega das chaves da instalação operacional.",
      },
    ],
  },

  "reforma-fachadas": {
    slug: "reforma-fachadas",
    title: "Reforma e Revitalização de Fachadas",
    subtitle: "Engenharia diagnóstica, recuperação estrutural e acabamentos nobres de alta durabilidade",
    shortDescription: "Recuperação do concreto, tratamento percussivo, vedação elastomérica e revestimentos nobres para condomínios e prédios comerciais.",
    category: "obras",
    image: "/images/fachada-atlanta-dia.png",
    heroImage: "/images/fachada-atlanta-dia.png",
    badge: "Case Real de Engenharia",
    description:
      "A CPE ENGENHARIA entrega soluções completas em reformas prediais, revitalização de fachadas e engenharia diagnóstica, atuando de ponta a ponta: do laudo técnico pericial e planejamento executivo até a recuperação estrutural profunda e aplicação de revestimentos de alta performance.",
    sidebarImageCaption: "Obra entregue: Condomínio Atlanta • São Paulo/SP",
    caseStudy: {
      client: "Condomínio Edifício Atlanta",
      location: "Zona Leste / São Paulo - SP",
      scope: "Engenharia diagnóstica, teste percussivo total, recuperação do concreto aparente, tratamento anticorrosivo de armaduras expostas, calafetação de fissuras e aplicação de textura acrílica de alta resistência.",
    },
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "Emissão obrigatória de ART (Anotação de Responsabilidade Técnica) antes do início da obra",
      standards: [
        "ABNT NBR 16280 (Reforma em edificações — Sistema de gestão de reformas)",
        "ABNT NBR 5674 (Manutenção de edificações — Requisitos para o sistema de gestão)",
        "ABNT NBR 9575 / 9574 (Impermeabilização — Seleção e projeto / Execução)",
        "NR-35 (Trabalho em Altura) e NR-18 (Segurança e Saúde no Trabalho na Indústria da Construção)",
      ],
    },
    technicalScope: {
      title: "Escopo de Engenharia Executado em Campo",
      items: [
        {
          title: "Engenharia Diagnóstica e Mapeamento",
          desc: "Mapeamento percussivo em 100% da fachada para identificação de áreas ocas, destacamentos de reboco e pontos críticos de infiltração.",
        },
        {
          title: "Recuperação Estrutural e Tratamento de Armaduras",
          desc: "Escarificação do concreto degradado, limpeza mecânica da armadura com escova de aço, aplicação de primer convertedor de ferrugem e recomposição com argamassa polimérica tixotrópica estrutural.",
        },
        {
          title: "Tratamento de Juntas e Fissuras",
          desc: "Abertura em 'V' das fissuras ativas e passivas, aplicação de fundo de junta e selamento elastomérico com mástique de poliuretano (PU) de alta elasticidade.",
        },
        {
          title: "Pintura e Revestimento de Alta Performance",
          desc: "Lavagem hidro-jateada de alta pressão, aplicação de fundo preparador e acabamento em textura acrílica hidro-repelente resistente a intempéries e raios UV.",
        },
      ],
    },
    gallery: [
      {
        src: "/images/fachada-atlanta-dia.png",
        title: "Perspectiva Diurna",
        subtitle: "Edifício Atlanta finalizado com acabamento homogêneo e proteção climática.",
        tag: "Diurno",
      },
      {
        src: "/images/fachada-atlanta-noite.png",
        title: "Perspectiva Noturna",
        subtitle: "Realce volumétrico e harmonia arquitetônica com iluminação técnica.",
        tag: "Noturno",
      },
    ],
    benefits: [
      {
        title: "Rigor Normativo e CREA/SP",
        desc: "Todas as etapas acompanhadas por Engenheiro Civil com emissão de ART e relatórios fotográficos periódicos.",
      },
      {
        title: "Segurança Absoluta (NR-35 / NR-18)",
        desc: "Equipe 100% certificada com EPIs, cabos de vida de aço certificados e ancoragens testadas conforme norma.",
      },
      {
        title: "Valorização Patrimonial Imediata",
        desc: "Requalificação estética e estrutural que aumenta o valor de mercado das unidades residenciais ou comerciais.",
      },
      {
        title: "Garantia de Estanqueidade",
        desc: "Eliminação definitiva de infiltrações em esquadrias, juntas de dilatação e superfícies cimentícias.",
      },
    ],
    methodology: [
      {
        step: "1",
        title: "Laudo Diagnóstico e Teste Percussivo",
        desc: "Inspeção técnica completa para identificar patologias ocultas, fissuras e descolamentos.",
      },
      {
        step: "2",
        title: "Montagem da Infraestrutura de Segurança",
        desc: "Instalação de pontos de ancoragem certificados, andaimes e linhas de vida para trabalho em altura (NR-35).",
      },
      {
        step: "3",
        title: "Tratamento Estrutural e Hidrojateamento",
        desc: "Remoção de partes soltas, despassivação de armaduras oxidadas, recomposição e lavagem pressurizada.",
      },
      {
        step: "4",
        title: "Selamento de Fissuras e Juntas com PU",
        desc: "Aplicação de mástiques flexíveis para evitar novas infiltrações e movimentações estruturais.",
      },
      {
        step: "5",
        title: "Pintura / Texturização e Entrega Técnica",
        desc: "Aplicação do sistema de acabamento hidrofugante, vistoria final com o síndico/cliente e termo de garantia.",
      },
    ],
  },

  "construcao-residencial": {
    slug: "construcao-residencial",
    title: "Construção Residencial de Alto Padrão",
    subtitle: "Gestão executiva completa, precisão estrutural e acabamentos refinados para residências exclusivas",
    shortDescription: "Construção de casas de alto padrão em condomínios fechados com acompanhamento integral de engenharia.",
    category: "obras",
    image: "/images/residencia.png",
    heroImage: "/images/residencia.png",
    badge: "Construção Civil",
    description:
      "A CPE ENGENHARIA constrói residências de alto padrão com metodologia de gestão rigorosa, cronograma físico-financeiro detalhado e controle minucioso da qualidade de materiais e mão de obra em cada etapa construtiva.",
    sidebarImageCaption: "Obra residencial entregue • Alto Padrão SP",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "Emissão de ART para fundações, estrutura e execução global da obra",
      standards: [
        "ABNT NBR 6118 (Projeto de estruturas de concreto)",
        "ABNT NBR 15575 (Edificações habitacionais — Desempenho)",
        "ABNT NBR 5626 (Instalação predial de água fria)",
        "NR-18 (Condições e Meio Ambiente de Trabalho na Indústria da Construção)",
      ],
    },
    benefits: [
      { title: "Gestão Físico-Financeira", desc: "Controle total de custos e prazos sem surpresas no orçamento." },
      { title: "Alto Padrão Executivo", desc: "Mão de obra qualificada e supervisão direta de engenheiro residente." },
      { title: "Compatibilização BIM", desc: "Integração total entre arquitetura, cálculo estrutural e instalações." },
      { title: "Garantia Estrutural", desc: "Entrega técnica com memorial descritivo e garantia integral de obra." },
    ],
    methodology: [
      { step: "1", title: "Compatibilização e Planejamento", desc: "Análise dos projetos e elaboração do orçamento analítico e cronograma." },
      { step: "2", title: "Fundações e Movimentação de Terra", desc: "Locação da obra, estaqueamento e blocos de coroamento." },
      { step: "3", title: "Superestrutura e Alvenaria", desc: "Concretagem de pilares, vigas, lajes e alvenaria de vedação." },
      { step: "4", title: "Instalações e Impermeabilização", desc: "Passagem das redes hidráulica, elétrica e impermeabilização rígida/flexível." },
      { step: "5", title: "Acabamentos Nobres e Entrega", desc: "Revestimentos, esquadrias, louças, metais e vistoria final com entrega das chaves." },
    ],
  },

  "galpoes-industriais": {
    slug: "galpoes-industriais",
    title: "Construção de Galpões e Instalações Industriais",
    subtitle: "Estruturas metálicas, pré-moldados e pisos industriais para centros de distribuição e fábricas",
    shortDescription: "Construção e reforma de galpões logísticos e plantas industriais com foco em produtividade e robustez.",
    category: "obras",
    image: "/images/warehouse.png",
    heroImage: "/images/warehouse.png",
    badge: "Engenharia Industrial",
    description:
      "Desenvolvemos e executamos galpões logísticos e industriais, com pisos de concreto polido de alta capacidade de carga, montagem de estruturas metálicas e fechamentos em telhas termoacústicas (painéis PIR/EPS).",
    sidebarImageCaption: "Galpão logístico e industrial entregue",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART emitida para cálculo estrutural e execução civil",
      standards: [
        "ABNT NBR 8800 (Projeto de estruturas de aço e de estruturas mistas)",
        "ABNT NBR 9062 (Projeto e execução de estruturas de concreto pré-moldado)",
        "ABNT NBR 14039 (Instalações elétricas de média tensão)",
      ],
    },
    benefits: [
      { title: "Pisos de Alta Carga", desc: "Dimensionamento com armadura de aço ou fibras para tráfego pesado de empilhadeiras." },
      { title: "Vãos Livres Otimizados", desc: "Estruturas metálicas projetadas para máximo aproveitamento do espaço de estocagem." },
      { title: "Eficiência Térmica e Acústica", desc: "Sistemas de cobertura que reduzem o consumo de energia e ruídos externos." },
      { title: "Rapidez Construtiva", desc: "Metodologias pré-fabricadas que aceleram o tempo de retorno sobre o investimento." },
    ],
    methodology: [
      { step: "1", title: "Sondagem e Terraplanagem", desc: "Estudos geotécnicos, corte/aterro e compactação do solo." },
      { step: "2", title: "Fundações Profundas", desc: "Execução de estacas e blocos de ancoragem para pilares." },
      { step: "3", title: "Montagem da Estrutura", desc: "Içamento e contraventamento da estrutura metálica/pré-moldada." },
      { step: "4", title: "Piso Industrial e Cobertura", desc: "Nivelamento a laser do piso e instalação de telhas termoacústicas." },
      { step: "5", title: "Fechamentos e AVCB", desc: "Instalações de combate a incêndio, docas e vistoria para liberação de uso." },
    ],
  },

  "projeto-arquitetonico": {
    slug: "projeto-arquitetonico",
    title: "Projetos Arquitetônicos e Legais",
    subtitle: "Concepção funcional, volumetria contemporânea e aprovação em prefeituras e condomínios",
    shortDescription: "Projetos arquitetônicos residenciais, comerciais e industriais compatibilizados e prontos para aprovação.",
    category: "projetos",
    image: "/images/architectural.png",
    heroImage: "/images/architectural.png",
    badge: "Projeto Técnico",
    description:
      "Elaboramos projetos arquitetônicos autorais e executivos de alto nível, integrando estética refinada, ergonomia espacial, sustentabilidade e estrita conformidade com o Plano Diretor e Código de Obras municipal.",
    sidebarImageCaption: "Projeto Arquitetônico Executivo • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de autoria de projeto e coordenação geral",
      standards: [
        "ABNT NBR 6492 (Documentação técnica para projetos arquitetônicos)",
        "ABNT NBR 9050 (Acessibilidade a edificações, mobiliário e espaços)",
        "Códigos de Obras e Zoneamento Municipal",
      ],
    },
    benefits: [
      { title: "Modelagem 3D Fotorrealista", desc: "Visualização antecipada completa em maquete 3D e renderizações imersivas." },
      { title: "Aprovação Descomplicada", desc: "Documentação técnica completa para habite-se e aprovação em condomínios." },
      { title: "Otimização de Espaços", desc: "Planejamento inteligente para máxima circulação, iluminação e ventilação natural." },
      { title: "Compatibilização BIM", desc: "Zero retrabalho na obra com projetos integrados em ambiente digital." },
    ],
    methodology: [
      { step: "1", title: "Briefing e Levantamento", desc: "Entendimento das necessidades do cliente e levantamento topográfico do lote." },
      { step: "2", title: "Estudo Preliminar", desc: "Definição do layout espacial, volumetria inicial e primeiras maquetes 3D." },
      { step: "3", title: "Anteprojeto e Aprovação", desc: "Refinamento técnico e submissão à Prefeitura Municipal e associação de moradores." },
      { step: "4", title: "Projeto Executivo", desc: "Detalhamento de cortes, fachadas, paginações de piso, esquadrias e pontos de elétrica." },
    ],
  },

  "projeto-estrutural": {
    slug: "projeto-estrutural",
    title: "Cálculo Estrutural e Fundações",
    subtitle: "Dimensionamento seguro e econômico em Concreto Armado, Alvenaria Estrutural e Aço",
    shortDescription: "Cálculo estrutural e fundações dimensionados para máxima segurança e economia de aço e concreto.",
    category: "projetos",
    image: "/images/structural.png",
    heroImage: "/images/structural.png",
    badge: "Engenharia de Estruturas",
    description:
      "Projetamos estruturas em concreto armado, protendido, perfis metálicos e alvenaria estrutural através de softwares de cálculo de última geração, garantindo o dimensionamento exato das armaduras e fundações.",
    sidebarImageCaption: "Modelo Estrutural Tridimensional • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART específica de responsabilidade técnica pelo cálculo estrutural",
      standards: [
        "ABNT NBR 6118 (Projeto de estruturas de concreto — Procedimento)",
        "ABNT NBR 6122 (Projeto e execução de fundações)",
        "ABNT NBR 8681 (Ações e segurança nas estruturas)",
      ],
    },
    benefits: [
      { title: "Economia Real de Materiais", desc: "Dimensionamento que evita o superdimensionamento e reduz gastos com concreto e aço." },
      { title: "Segurança e Estabilidade", desc: "Eliminação total de riscos de patologias, trincas ou deformações excessivas." },
      { title: "Quantitativos Precisos", desc: "Tabelas completas de aço dobrado e volumes de concreto para cotação precisa." },
      { title: "Suporte Técnico na Obra", desc: "Acompanhamento do engenheiro calculista para esclarecimento de dúvidas da armação." },
    ],
    methodology: [
      { step: "1", title: "Análise da Sondagem SPT", desc: "Interpretação do perfil geotécnico para escolha da fundação ideal." },
      { step: "2", title: "Lançamento da Estrutura", desc: "Posicionamento estratégico de pilares e vigas compatibilizados com a arquitetura." },
      { step: "3", title: "Análise Computacional e Cargas", desc: "Simulação de cargas permanentes, acidentais e ação dos ventos." },
      { step: "4", title: "Detalhamento e Pranchas", desc: "Geração das pranchas de armação, formas, resumo de aço e memorial de cálculo." },
    ],
  },

  "avcb-bombeiros": {
    slug: "avcb-bombeiros",
    title: "AVCB, CLCB e Proteção Contra Incêndio",
    subtitle: "Projetos de segurança contra incêndio (PPCI), renovações e aprovação rápida junto ao Corpo de Bombeiros",
    shortDescription: "Projetos e regularização de AVCB e CLCB para condomínios, indústrias e estabelecimentos comerciais.",
    category: "projetos",
    image: "/images/avcb.png",
    heroImage: "/images/avcb.png",
    badge: "Segurança Contra Incêndio",
    description:
      "A CPE ENGENHARIA realiza laudos técnicos periciais, projetos de combate a incêndio (PPCI), vistorias em campo e adequações físicas para obtenção e renovação do Auto de Vistoria do Corpo de Bombeiros (AVCB e CLCB) em todo o Estado de São Paulo.",
    sidebarImageCaption: "Sistema de combate a incêndio aprovado",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de projeto e laudo de instalações de segurança contra incêndio",
      standards: [
        "Instruções Técnicas (ITs) do Corpo de Bombeiros da PMESP",
        "Decreto Estadual nº 63.911 de SP (Regulamento de Segurança Contra Incêndios)",
        "ABNT NBR 13714 (Sistemas de hidrantes e de mangotinhos para combate a incêndio)",
        "ABNT NBR 10898 (Sistema de iluminação de emergência)",
      ],
    },
    benefits: [
      { title: "Aprovação Sem Retrabalho", desc: "Projetos desenvolvidos rigorosamente alinhados aos critérios dos vistoriadores do CBPMESP." },
      { title: "Segurança Jurídica e Predial", desc: "Edificação regularizada para seguro patrimonial, licença de funcionamento e alvará." },
      { title: "Acompanhamento Presencial", desc: "Acompanhamento do engenheiro responsável durante a vistoria oficial do bombeiro." },
      { title: "Agilidade no Via Fácil Bombeiros", desc: "Gestão do processo online do início ao protocolo final de emissão da licença." },
    ],
    methodology: [
      { step: "1", title: "Vistoria Diagnóstica", desc: "Levantamento das rotas de fuga, hidrantes, extintores, sinalização e portas corta-fogo." },
      { step: "2", title: "Elaboração do Projeto Técnico", desc: "Desenho das pranchas de combate a incêndio conforme a ocupação e carga de incêndio." },
      { step: "3", title: "Protocolo e Vistoria", desc: "Envio ao Corpo de Bombeiros, acompanhamento da análise e vistoria in loco." },
      { step: "4", title: "Emissão do AVCB / CLCB", desc: "Entrega do certificado oficial emitido com validade regulamentar." },
    ],
  },
};

export const services = Object.values(servicesData);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug];
}
