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
  "projetos-arquitetonicos": {
    slug: "projetos-arquitetonicos",
    title: "Projetos Arquitetônicos e Legais",
    subtitle: "Concepção funcional, volumetria contemporânea e aprovação em prefeituras e condomínios",
    shortDescription: "Projetos autorais residenciais, comerciais e industriais compatibilizados e prontos para aprovação.",
    category: "projetos",
    image: "/images/architectural.png",
    heroImage: "/images/architectural.png",
    badge: "Projeto Técnico",
    description:
      "Elaboramos projetos arquitetônicos autorais e executivos de alto nível técnico, unindo estética, funcionalidade, conforto térmico-acústico e conformidade com o Plano Diretor e Código de Obras municipal.",
    sidebarImageCaption: "Projeto Arquitetônico Executivo • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de autoria e coordenação de projetos",
      standards: [
        "ABNT NBR 6492 (Documentação técnica para projetos arquitetônicos)",
        "ABNT NBR 9050 (Acessibilidade a edificações, mobiliário e espaços)",
        "Códigos de Obras e Zoneamento Municipal",
      ],
    },
    benefits: [
      { title: "Modelagem 3D Fotorrealista", desc: "Visualização completa em maquete 3D e renderizações imersivas." },
      { title: "Aprovação Descomplicada", desc: "Documentação técnica completa para habite-se e aprovação em condomínios." },
      { title: "Otimização de Espaços", desc: "Planejamento inteligente para máxima circulação, iluminação e ventilação natural." },
      { title: "Compatibilização BIM", desc: "Zero retrabalho na obra com projetos integrados em ambiente digital." },
    ],
    methodology: [
      { step: "1", title: "Briefing e Levantamento", desc: "Entendimento das necessidades do cliente e levantamento topográfico do lote." },
      { step: "2", title: "Estudo Preliminar", desc: "Definição do layout espacial, volumetria inicial e maquetes 3D." },
      { step: "3", title: "Anteprojeto e Aprovação", desc: "Submissão aos órgãos municipais e associações de condomínio." },
      { step: "4", title: "Projeto Executivo", desc: "Detalhamento de cortes, fachadas, paginações e pranchas de obra." },
    ],
  },

  "projetos-complementares": {
    slug: "projetos-complementares",
    title: "Projetos Complementares e Cálculo Estrutural",
    subtitle: "Dimensionamento seguro e econômico de Estruturas, Hidráulica, Elétrica e Fundações",
    shortDescription: "Cálculo estrutural em concreto e aço, projetos hidrossanitários e elétricos integrados em BIM.",
    category: "projetos",
    image: "/images/structural.png",
    heroImage: "/images/structural.png",
    badge: "Engenharia de Estruturas",
    description:
      "Projetamos estruturas em concreto armado, perfis metálicos, alvenaria estrutural e todas as instalações complementares (hidrossanitário e elétrico), garantindo economia de insumos e total segurança.",
    sidebarImageCaption: "Modelo Estrutural Tridimensional • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART específica de responsabilidade técnica pelo cálculo estrutural",
      standards: [
        "ABNT NBR 6118 (Projeto de estruturas de concreto)",
        "ABNT NBR 6122 (Projeto e execução de fundações)",
        "ABNT NBR 5410 (Instalações elétricas de baixa tensão)",
        "ABNT NBR 5626 (Sistemas prediais de água fria)",
      ],
    },
    benefits: [
      { title: "Economia Real de Materiais", desc: "Dimensionamento que evita desperdícios e reduz custos de aço e concreto." },
      { title: "Segurança e Estabilidade", desc: "Eliminação total de riscos de patologias, trincas ou deformações estruturais." },
      { title: "Quantitativos Precisos", desc: "Tabelas completas de materiais para cotação e compra assertiva." },
      { title: "Suporte Técnico na Obra", desc: "Acompanhamento do engenheiro calculista para esclarecimento técnico." },
    ],
    methodology: [
      { step: "1", title: "Análise da Sondagem SPT", desc: "Interpretação geotécnica para escolha ideal da fundação." },
      { step: "2", title: "Lançamento da Estrutura", desc: "Posicionamento estratégico compatibilizado com a arquitetura." },
      { step: "3", title: "Análise Computacional e Cargas", desc: "Simulação de cargas permanentes, acidentais e vento." },
      { step: "4", title: "Detalhamento e Pranchas", desc: "Pranchas de armação, formas, resumo de aço e memorial de cálculo." },
    ],
  },

  "projetos-sda": {
    slug: "projetos-sda",
    title: "Projetos de SDAI (Detecção e Alarme de Incêndio)",
    subtitle: "Sistemas inteligentes de detecção pontual, linear por feixe óptico e alarme centralizado",
    shortDescription: "Projetos de detecção e alarme de incêndio para indústrias, condomínios e grandes centros de logística.",
    category: "projetos",
    image: "/images/fire_protection.png",
    heroImage: "/images/fire_protection.png",
    badge: "Sistemas Especiais",
    description:
      "Desenvolvemos projetos de Sistemas de Detecção e Alarme de Incêndio (SDAI) convencionais e endereçáveis, assegurando resposta rápida e integração total com centrais de automação predial e portas corta-fogo.",
    sidebarImageCaption: "Sistema SDAI Integrado • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART emitida para projeto de sistemas eletrônicos de segurança contra incêndio",
      standards: [
        "ABNT NBR 17240 (Sistemas de detecção e alarme de incêndio)",
        "Instrução Técnica nº 19 do Corpo de Bombeiros da PMESP",
      ],
    },
    benefits: [
      { title: "Detecção Precoce", desc: "Sensores inteligentes para detecção imediata de fumaça e elevação térmica." },
      { title: "Integração de Sistemas", desc: "Interligação com painéis de pressurização, dampers e controle de acesso." },
      { title: "Conformidade com Bombeiros", desc: "Projetos 100% aprováveis nas vistorias de AVCB do CBPMESP." },
      { title: "Topologia Otimizada", desc: "Redução de custos de cabeamento blindado com rotas inteligentes." },
    ],
    methodology: [
      { step: "1", title: "Classificação da Área", desc: "Mapeamento das zonas de cobertura e pé-direito dos ambientes." },
      { step: "2", title: "Dimensionamento dos Sensores", desc: "Definição do raio de cobertura e tipo de detecção (ótica/térmica)." },
      { step: "3", title: "Topologia de Cabos e Centrais", desc: "Desenho unifilar das rotas blindadas e centrais de comando." },
      { step: "4", title: "Entrega do Memorial e Pranchas", desc: "Memorial descritivo e diagrama de laços para instalação." },
    ],
  },

  "projetos-spci": {
    slug: "projetos-spci",
    title: "Projetos SPCI (Sistemas de Proteção Contra Incêndio)",
    subtitle: "Redes de hidrantes, chuveiros automáticos (Sprinklers), reservatórios e casa de bombas",
    shortDescription: "Projetos hidráulicos de combate a incêndio com cálculo isométrico e perda de carga precisa.",
    category: "projetos",
    image: "/images/fire_protection.png",
    heroImage: "/images/fire_protection.png",
    badge: "Segurança Contra Incêndio",
    description:
      "Dimensionamento completo de redes hidráulicas de combate a incêndio: hidrantes, mangotinhos, sistemas de sprinklers automáticos, bombas principais e jockey com cálculos isométricos e de perda de carga.",
    sidebarImageCaption: "Rede Hidráulica SPCI • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de cálculo hidráulico e sistema contra incêndio",
      standards: [
        "ABNT NBR 13714 (Sistemas de hidrantes e mangotinhos)",
        "ABNT NBR 10897 (Proteção contra incêndio por chuveiro automático)",
        "Instrução Técnica nº 22 do Corpo de Bombeiros da PMESP",
      ],
    },
    benefits: [
      { title: "Cálculo Hidráulico Preciso", desc: "Dimensionamento exato da vazão e pressão para cada esguicho e sprinkler." },
      { title: "Otimização de Reservatório", desc: "Cálculo rigoroso do volume de RTI (Reserva Técnica de Incêndio)." },
      { title: "Segurança Operacional", desc: "Garantia de resposta contínua com bombas principais e jockey calibradas." },
      { title: "Aprovação em Vistorias", desc: "Pranchas compatibilizadas que facilitam a inspeção do Corpo de Bombeiros." },
    ],
    methodology: [
      { step: "1", title: "Estudo de Carga de Incêndio", desc: "Determinação do risco da ocupação e vazões regulamentares." },
      { step: "2", title: "Traçado Isométrico", desc: "Modelagem das tubulações em aço ranhurado ou roscado." },
      { step: "3", title: "Cálculo de Perda de Carga", desc: "Definição das potências da moto-bomba e altura manométrica." },
      { step: "4", title: "Memorial e Detalhamento", desc: "Geração dos memoriais de cálculo e plantas executivas." },
    ],
  },

  "regularizacao-avcb": {
    slug: "regularizacao-avcb",
    title: "Regularização de AVCB e CLCB",
    subtitle: "Emissão e renovação de licenças junto ao Corpo de Bombeiros da PMESP em todo o Estado de SP",
    shortDescription: "Laudos técnicos, vistorias em campo e tramitação completa no sistema Via Fácil Bombeiros.",
    category: "projetos",
    image: "/images/avcb.png",
    heroImage: "/images/avcb.png",
    badge: "Regularização Legal",
    description:
      "A CPE ENGENHARIA realiza laudos técnicos periciais, vistorias prévias e gestão completa do processo para obtenção e renovação do Auto de Vistoria do Corpo de Bombeiros (AVCB e CLCB) para indústrias, condomínios e comércios.",
    sidebarImageCaption: "Certificado de Regularização AVCB • CPE Engenharia",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "Emissão obrigatória de ART de inspeção e laudos regulamentares",
      standards: [
        "Decreto Estadual nº 63.911/2018 (Regulamento de Segurança Contra Incêndios)",
        "Instruções Técnicas do Corpo de Bombeiros da PMESP",
      ],
    },
    benefits: [
      { title: "Tramitação Ágil", desc: "Aceleração do processo no sistema Via Fácil Bombeiros." },
      { title: "Segurança Jurídica", desc: "Edificação regularizada perante prefeitura, seguradoras e fiscalização." },
      { title: "Acompanhamento In Loco", desc: "Presença de Engenheiro Civil no dia da vistoria oficial." },
      { title: "Sem Retrabalho", desc: "Diagnóstico completo antes do protocolo para evitar comunique-se." },
    ],
    methodology: [
      { step: "1", title: "Vistoria Técnica Prévia", desc: "Auditoria in loco de extintores, sinalização, iluminação e rotas de fuga." },
      { step: "2", title: "Adequação e Emissão de Laudos", desc: "Laudos elétricos, de gás, CMAR e estanqueidade com ART." },
      { step: "3", title: "Protocolo e Vistoria Oficial", desc: "Submissão digital e acompanhamento do vistoriador do bombeiro." },
      { step: "4", title: "Emissão e Entrega da Licença", desc: "Disponibilização do AVCB/CLCB oficial com validade legal." },
    ],
  },

  "residencia-alto-padrao": {
    slug: "residencia-alto-padrao",
    title: "Construção Residencial de Alto Padrão",
    subtitle: "Gestão executiva completa, precisão estrutural e acabamentos refinados em condomínios fechados",
    shortDescription: "Construção de casas de alto padrão com gestão físico-financeira e engenheiro residente.",
    category: "obras",
    image: "/images/residencia.png",
    heroImage: "/images/residencia.png",
    badge: "Construção Civil",
    description:
      "Execução de residências de alto padrão com rigoroso controle de custos, cronograma físico-financeiro transparente e acabamentos de altíssima qualidade técnica.",
    sidebarImageCaption: "Obra residencial entregue • Alto Padrão SP",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de execução estrutural e civil global",
      standards: [
        "ABNT NBR 6118 (Estruturas de concreto)",
        "ABNT NBR 15575 (Desempenho de edificações habitacionais)",
        "NR-18 (Segurança e Saúde no Trabalho na Construção)",
      ],
    },
    benefits: [
      { title: "Gestão Físico-Financeira", desc: "Previsibilidade orçamentária e relatórios semanais de evolução." },
      { title: "Supervisão Contínua", desc: "Acompanhamento rigoroso de engenheiro residente em todas as fases." },
      { title: "Acabamentos de Precisão", desc: "Execução impecável de porcelanatos, esquadrias e marcenaria integrada." },
      { title: "Garantia Integral de Obra", desc: "Termo de garantia e manual do proprietário na entrega das chaves." },
    ],
    methodology: [
      { step: "1", title: "Compatibilização e Orçamento", desc: "Orçamento analítico e cronograma executivo detalhado." },
      { step: "2", title: "Fundações e Movimentação", desc: "Estacas, blocos de coroamento e contenções de solo." },
      { step: "3", title: "Superestrutura e Vedação", desc: "Pilares, vigas, lajes maciças e alvenaria termoacústica." },
      { step: "4", title: "Instalações e Impermeabilização", desc: "Redes hidráulicas, elétricas e impermeabilização total." },
      { step: "5", title: "Acabamentos e Entrega Técnica", desc: "Revestimentos nobres, pintura e entrega oficial." },
    ],
  },

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
      art: "Emissão obrigatória de ART antes do início da obra",
      standards: [
        "ABNT NBR 13781 / 13783 / 13786 (Sistemas de Armazenamento de Combustíveis)",
        "ABNT NBR 14605 (Drenagem Oleosa e Caixas Separadoras SAO)",
        "NR-10 (Eletricidade em Áreas Classificadas / Ex)",
        "NR-20 (Segurança no Trabalho com Inflamáveis e Combustíveis)",
      ],
    },
    technicalScope: {
      title: "Escopo de Engenharia Executado em Campo",
      items: [
        {
          title: "Pavimentação Rígida de Alta Resistência",
          desc: "Execução de piso de concreto armado usinado com acabamento polido e juntas seladas com mástique resistente a hidrocarbonetos.",
        },
        {
          title: "Infraestrutura Hidráulica e Mecânica",
          desc: "Tubulações em PEAD soldadas por eletrofusão, bombas de alto fluxo, filtros coalescentes e interligação de tanques.",
        },
        {
          title: "Contenção e Proteção Ambiental",
          desc: "Bacias de contenção estanques, canaletas perimetrais blindadas e caixas separadoras de água e óleo (SAO).",
        },
        {
          title: "Cobertura Metálica e Instalações Ex",
          desc: "Estrutura metálica com testeira padronizada, iluminação LED industrial e instalações elétricas à prova de explosão.",
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
      { title: "Expertise Técnica em Normas", desc: "Conhecimento profundo das normas ABNT, NRs e órgãos ambientais." },
      { title: "Segurança Operacional Absoluta", desc: "Sistemas de drenagem, pista blindada e contenção de vazamentos." },
      { title: "Conformidade Ambiental Rigorosa", desc: "Execução que atende 100% aos requisitos de licenciamento (CETESB/IBAMA)." },
      { title: "Agilidade na Execução", desc: "Planejamento otimizado para minimizar o impacto na operação logística." },
    ],
    methodology: [
      { step: "1", title: "Planejamento e Adequação", desc: "Levantamento topográfico e compatibilização dos projetos civil, mecânico e elétrico." },
      { step: "2", title: "Pavimentação Armada", desc: "Armação com telas soldadas e concretagem com concreto usinado Fck para tráfego pesado." },
      { step: "3", title: "Bombas, Tanques e Tubulações", desc: "Montagem da hidráulica com tubos PEAD, filtros e tanques." },
      { step: "4", title: "Cobertura e Elétrica Ex", desc: "Içamento da cobertura metálica e fiação blindada à prova de explosão." },
      { step: "5", title: "Comissionamento e ART", desc: "Testes de estanqueidade, calibração e entrega técnica operacional." },
    ],
  },

  "galpoes-logisticos": {
    slug: "galpoes-logisticos",
    title: "Galpão Logístico & Centro de Distribuição",
    subtitle: "Estruturas metálicas, pré-moldados e pisos industriais de alta capacidade para hubs logísticos",
    shortDescription: "Construção de galpões logísticos com pisos nivelados a laser e vãos livres para máxima armazenagem.",
    category: "obras",
    image: "/images/warehouse.png",
    heroImage: "/images/warehouse.png",
    badge: "Engenharia Logística",
    description:
      "Construção de centros de distribuição e galpões logísticos modernos com foco em modulação estrutural, nivelamento a laser de pisos industriais, docas elevadas e telhas termoacústicas para eficiência energética.",
    sidebarImageCaption: "Galpão logístico entregue • Guarulhos/SP",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de projeto estrutural e execução civil",
      standards: [
        "ABNT NBR 8800 (Estruturas de aço e mistas)",
        "ABNT NBR 9062 (Estruturas de concreto pré-moldado)",
        "ABNT NBR 14039 (Instalações elétricas de média tensão)",
      ],
    },
    benefits: [
      { title: "Pisos de Nivelamento a Laser", desc: "Planicidade perfeita para tráfego veloz e seguro de empilhadeiras tridirecionais." },
      { title: "Grandes Vãos Livres", desc: "Otimização máxima do layout de porta-paletes e docas de carga." },
      { title: "Isolamento Termoacústico", desc: "Coberturas em telha sanduíche com conforto térmico e economia de energia." },
      { title: "Velocidade de Obra", desc: "Uso de sistemas pré-fabricados com montagem rápida e limpa." },
    ],
    methodology: [
      { step: "1", title: "Terraplanagem e Geotecnia", desc: "Plataformas compactadas e controle de umidade do solo." },
      { step: "2", title: "Fundações e Pilares", desc: "Estacas escavadas e montagem de pilares pré-moldados." },
      { step: "3", title: "Cobertura e Fechamento", desc: "Montagem da estrutura metálica e painéis térmicos." },
      { step: "4", title: "Piso Industrial Nivelado", desc: "Concretagem a laser com endurecedor de superfície e juntas seladas." },
      { step: "5", title: "Docas e AVCB", desc: "Instalação de niveladores de doca, hidrantes e entrega técnica." },
    ],
  },

  "plantas-industriais": {
    slug: "plantas-industriais",
    title: "Plantas Industriais & Fábricas",
    subtitle: "Construção e reforma de instalações fabris com infraestrutura pesada e normas sanitárias/ambientais",
    shortDescription: "Construção de indústrias, fundações para máquinas pesadas, subestações e drenagem química.",
    category: "obras",
    image: "/images/industrial_facility.png",
    heroImage: "/images/industrial_facility.png",
    badge: "Engenharia Industrial",
    description:
      "A CPE ENGENHARIA executa obras industriais complexas: bases antivibratórias para maquinário pesado, subestações elétricas, drenagens com canaletas anticorrosivas e reformas sem interromper a produção da fábrica.",
    sidebarImageCaption: "Planta fabril industrial • São Bernardo/SP",
    technicalNorms: {
      crea: "CREA/SP sob Responsabilidade Técnica do Eng. Christian Gomes",
      art: "ART de responsabilidade técnica para obras industriais",
      standards: [
        "ABNT NBR 5410 / NBR 14039 (Instalações Elétricas de Baixa e Média Tensão)",
        "NR-10, NR-12 e NR-33 (Segurança Industrial)",
      ],
    },
    benefits: [
      { title: "Trabalho Sem Parar a Fábrica", desc: "Planejamento executivo por fases para manter a operação fabril ativa." },
      { title: "Bases de Alta Carga", desc: "Cálculo dinâmico de fundações para equipamentos de alta vibração." },
      { title: "Instalações Utilitárias", desc: "Redes de ar comprimido, vapor, água industrial e gás." },
      { title: "Segurança do Trabalho", desc: "Rigor absoluto em conformidade com as Normas Regulamentadoras do MTE." },
    ],
    methodology: [
      { step: "1", title: "Mapeamento das Interferências", desc: "Compatibilização dos maquinários com a infraestrutura civil." },
      { step: "2", title: "Fundações Industriais", desc: "Blocos maciços com amortecimento elastomérico para máquinas." },
      { step: "3", title: "Subestação e Utilidades", desc: "Construção da cabine primária e redes aéreas de utilidades." },
      { step: "4", title: "Pisos Especiais", desc: "Aplicação de pisos uretânicos e epóxi de alta resistência química." },
      { step: "5", title: "Testes e Comissionamento", desc: "Entrega técnica com asfalto perimetral e certidões industriais." },
    ],
  },

  "reforma-fachadas": {
    slug: "reforma-fachadas",
    title: "Reforma e Retrofit de Fachadas",
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
      art: "Emissão obrigatória de ART antes do início da obra",
      standards: [
        "ABNT NBR 16280 (Sistema de gestão de reformas)",
        "ABNT NBR 5674 (Manutenção de edificações)",
        "ABNT NBR 9575 / 9574 (Impermeabilização)",
        "NR-35 (Trabalho em Altura) e NR-18 (Construção Civil)",
      ],
    },
    technicalScope: {
      title: "Escopo de Engenharia Executado em Campo",
      items: [
        {
          title: "Engenharia Diagnóstica e Mapeamento",
          desc: "Mapeamento percussivo em 100% da fachada para identificação de áreas ocas, destacamentos e fissuras.",
        },
        {
          title: "Recuperação Estrutural de Armaduras",
          desc: "Escarificação do concreto degradado, despassivação de armaduras oxidadas e recomposição com argamassa estrutural.",
        },
        {
          title: "Tratamento de Juntas e Fissuras",
          desc: "Abertura em 'V' e aplicação de selativo elastomérico de poliuretano (PU) de alta elasticidade.",
        },
        {
          title: "Pintura e Texturização Nobre",
          desc: "Lavagem pressurizada, primer de aderência e aplicação de textura acrílica hidro-repelente resistente a raios UV.",
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
      { title: "Rigor Normativo e CREA/SP", desc: "Todas as etapas acompanhadas por Engenheiro Civil com ART." },
      { title: "Segurança Absoluta (NR-35)", desc: "Equipe com cabos de vida de aço certificados e ancoragens testadas." },
      { title: "Valorização Patrimonial Imediata", desc: "Aumento imediato do valor de mercado das unidades residenciais." },
      { title: "Garantia de Estanqueidade", desc: "Eliminação definitiva de infiltrações e umidades na alvenaria." },
    ],
    methodology: [
      { step: "1", title: "Laudo Diagnóstico", desc: "Mapeamento percussivo para identificação de patologias ocultas." },
      { step: "2", title: "Infraestrutura de Segurança", desc: "Instalação de pontos de ancoragem certificados e linhas de vida (NR-35)." },
      { step: "3", title: "Tratamento Estrutural", desc: "Remoção de partes soltas, despassivação de armaduras e recomposição." },
      { step: "4", title: "Selamento de Fissuras", desc: "Aplicação de mástiques de PU flexíveis contra fissuras." },
      { step: "5", title: "Texturização e Entrega", desc: "Acabamento hidro-repelente e termo de garantia técnica." },
    ],
  },
};

// Aliases para manter compatibilidade total de links
servicesData["projeto-arquitetonico"] = servicesData["projetos-arquitetonicos"];
servicesData["projeto-estrutural"] = servicesData["projetos-complementares"];
servicesData["avcb-bombeiros"] = servicesData["regularizacao-avcb"];
servicesData["construcao-residencial"] = servicesData["residencia-alto-padrao"];
servicesData["galpoes-industriais"] = servicesData["galpoes-logisticos"];

export const services = [
  servicesData["projetos-arquitetonicos"],
  servicesData["projetos-complementares"],
  servicesData["projetos-sda"],
  servicesData["projetos-spci"],
  servicesData["regularizacao-avcb"],
  servicesData["residencia-alto-padrao"],
  servicesData["postos-abastecimento"],
  servicesData["galpoes-logisticos"],
  servicesData["plantas-industriais"],
  servicesData["reforma-fachadas"],
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug];
}
