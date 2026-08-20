export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: string[];
  image: string;
  gallery?: string[];
  standards?: string[];
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
      "Elaboração do Estudo Preliminar e Anteprojeto com
