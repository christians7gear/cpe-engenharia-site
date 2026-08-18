"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "residencial" | "comercial" | "industrial";
  location: string;
  year: string;
  image: string;
  linkUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Residência Alto Padrão",
    category: "residencial",
    location: "Mogi das Cruzes, SP",
    year: "2024",
    image: "/images/residencia.jpg",
    linkUrl: "/servicos/obras-residenciais",
  },
  {
    id: "2",
    title: "Galpão Logístico",
    category: "industrial",
    location: "Guarulhos, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/025a3994-37de-4f81-9bb3-7276165b3a50.png",
    linkUrl: "/servicos/galpoes-industriais",
  },
  {
    id: "3",
    title: "Posto de Abastecimento - Transtassi",
    category: "comercial",
    location: "Guarulhos, SP",
    year: "2024",
    image: "/images/posto-tassi.png",
    linkUrl: "/servicos/postos-abastecimento",
  },
  {
    id: "4",
    title: "Indústria Metalúrgica",
    category: "industrial",
    location: "São Bernardo, SP",
    year: "2023",
    image: "https://cdn.abacus.ai/images/89524fd6-adbb-4264-96cb-0f4601dff1e0.png",
    linkUrl: "/servicos/industrias",
  },
  {
    id: "5",
    title: "Reforma de Fachada Comercial",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/3cf78604-3225-4ac4-9f1c-3a27b4958552.png",
    linkUrl: "/servicos/reforma-fachadas",
  },
  {
    id: "6",
    title: "Casa Térrea Moderna",
    category: "residencial",
    location: "Osasco, SP",
    year: "2023",
    image: "/images/residencia.jpg",
    linkUrl: "/servicos/obras-residenciais",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
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
            Nosso Trabalho
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Portfólio de <span className="text-red-600">Projetos & Obras</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Conheça alguns dos principais projetos arquitetônicos, complementares e obras executadas pela{" "}
            <strong className="text-white">CPE <span className="text-red-500">ENGENHARIA</span></strong>.
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
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-md"
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
              transition={{ delay: index * 0.05 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-semibold text-white bg-red-600 px-3 py-1 rounded-full flex items-center gap-1">
                      Ver Detalhes do Projeto <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
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

              {/* Botão para Acessar os Detalhes do Serviço */}
              <div className="p-6 pt-0">
                <Link
                  href={item.linkUrl}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 hover:border-red-600 transition-all group/btn"
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
