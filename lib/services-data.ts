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
  shortDescription?: string;
  description: string;
  category?: string;
  image?: string;
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
};

export const services = Object.values(servicesData);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug];
}
