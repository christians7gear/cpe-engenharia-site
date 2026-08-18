"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "residencial" | "comercial" | "industrial" | "projetos";
  location: string;
  year: string;
  image: string;
  linkUrl: string;
  badge: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Projetos Arquitetônicos",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/22ea0ab3-63c7-48c8-aecb-b4ea3e7f8de8.png",
    linkUrl: "/servicos/projetos-arquitetonicos",
    badge: "Projetos Técnicos",
  },
  {
    id: "2",
    title: "Projetos Complementares",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/7ff63605-22e9-4efa-832a-43af18883e18.png",
    linkUrl: "/servicos/projetos-complementares",
    badge: "Estrutural / Hidráulica / Elétrica",
  },
  {
    id: "3",
    title: "Projetos SDA (Detecção & Alarme)",
    category: "projetos",
    location: "Guarulhos, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/4a275068-3c84-403b-ba10-5e628a12d6ef.png",
    linkUrl: "/servicos/projetos-sda",
    badge: "Sistemas Especiais",
  },
  {
    id: "4",
    title: "Projetos SPCI (Combate a Incêndio)",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/4a275068-3c84-403b-ba10-5e628a12d6ef.png",
    linkUrl: "/servicos/projetos-spci",
    badge: "Proteção Contra Incêndio",
  },
  {
    id: "5",
    title: "Regularização & AVCB Bombeiros",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/a2de6bfc-29df-46af-8d7d-e1238e07926b.png",
    linkUrl: "/servicos/avcb",
    badge: "Laudos & Aprovações",
  },
  {
    id: "6",
    title: "Residência Alto Padrão",
    category: "residencial",
    location: "Mogi das Cruzes, SP",
    year: "2024",
    image: "/images/residencia.jpg",
    linkUrl: "/servicos/obras-residenciais",
    badge: "Construção Residencial",
  },
  {
    id: "7",
    title: "Posto de Abastecimento - Transtassi",
    category: "comercial",
    location: "Guarulhos, SP",
    year: "2024",
    image: "/images/posto-tassi.png",
    linkUrl: "/servicos/postos-abastecimento",
    badge: "Infraestrutura & Frotas",
  },
  {
    id: "8",
    title: "Galpão Logístico & Centro de Distribuição",
    category: "industrial",
    location: "Guarulhos, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/025a3994-37de-4f81-9bb3-7276165b3a50.png",
    linkUrl: "/servicos/galpoes-industriais",
    badge: "Construção Industrial",
  },
  {
    id: "9",
    title: "Plantas Industriais & Fábricas",
    category: "industrial",
    location: "São Bernardo, SP",
    year: "2023",
    image: "https://cdn.abacus.ai/images/89524fd6-adbb-4264-96cb-0f4601dff1e0.png",
    linkUrl: "/servicos/industrias",
    badge: "Engenharia Industrial",
  },
  {
    id: "10",
    title: "Reforma & Retrofit de Fachadas",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/3cf78604-3225-4ac4-9f1c-3a27b4958552.png",
    linkUrl: "/servicos/reforma-fachadas",
    badge: "Revitalização Predial",
  },
];

const categories = [
  { id: "all", label: "Todos os Serviços" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
  { id: "projetos", label: "Projetos Técnicos" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-slate-50 min-h-screen">
      {/* Banner Principal */}
      <section className="bg-slate-950 text-white py-16 mb-12 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Obras e Projetos
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Portfólio <span className="text-red-600">CPE Engenharia</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Explore nossos cases de sucesso em projetos complementares, aprovações regulatórias, reformas corporativas e execução de obras de alto padrão.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grade de Itens do Portfólio com Links Diretos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Imagem do Projeto */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-white bg-slate-900/85 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-semibold text-white bg-red-600 px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-md">
                      Ver Especificações do Serviço <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-500" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão de Ação Direta */}
              <div className="p-6 pt-0">
                <Link
                  href={item.linkUrl}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 hover:border-red-600 transition-all group/btn shadow-sm"
                >
                  <span>Conhecer o Serviço Completo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
