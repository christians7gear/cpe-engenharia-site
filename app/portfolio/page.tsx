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
    image: "/images/architectural.png",
    linkUrl: "/servicos/projetos-arquitetonicos",
    badge: "Projetos Técnicos",
  },
  {
    id: "2",
    title: "Projetos Complementares",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "/images/structural.png",
    linkUrl: "/servicos/projetos-complementares",
    badge: "Estrutural / Hidráulica / Elétrica",
  },
  {
    id: "3",
    title: "Projetos SPDA (Para-raios)",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "/images/spda.jpg",
    linkUrl: "/servicos/projetos-spda",
    badge: "Proteção Atmosférica (NBR 5419)",
  },
  {
    id: "4",
    title: "Projetos SPCI (Combate a Incêndio)",
    category: "projetos",
    location: "São Paulo, SP",
    year: "2024",
    image: "/images/fire_protection.png",
    linkUrl: "/servicos/projetos-spci",
    badge: "Proteção Contra Incêndio",
  },
  {
    id: "5",
    title: "Regularização & AVCB Bombeiros",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "/images/avcb.png",
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
    image: "/images/warehouse.png",
    linkUrl: "/servicos/galpoes-industriais",
    badge: "Construção Industrial",
  },
  {
    id: "9",
    title: "Plantas Industriais & Fábricas",
    category: "industrial",
    location: "São Bernardo, SP",
    year: "2023",
    image: "/images/industrial_facility.png",
    linkUrl: "/servicos/industrias",
    badge: "Engenharia Industrial",
  },
  {
    id: "10",
    title: "Reforma & Retrofit de Fachadas",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "/images/fachada-atlanta-dia.png",
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
            Conheça alguns dos projetos e obras que desenvolvemos e executamos com excelência técnica.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid do Portfólio */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={item.linkUrl}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-sm border border-white/10">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform duration-200">
                    Ver detalhes
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
