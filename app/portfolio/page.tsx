"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Maximize } from "lucide-react";
import { companyData } from "@/lib/company-data";

const categories = [
  { id: "all", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
];

const placeholderProjects = [
  {
    id: "1",
    title: "Residência Alto Padrão",
    category: "residencial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/cc7a2846-a6d0-46a9-a123-55731c65a5ff.png",
  },
  {
    id: "2",
    title: "Galpão Logístico",
    category: "industrial",
    location: "Guarulhos, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/025a3994-37de-4f81-9bb3-7276165b3a50.png",
  },
  {
    id: "3",
    title: "Posto de Combustível",
    category: "comercial",
    location: "Campinas, SP",
    year: "2023",
    image: "https://cdn.abacus.ai/images/53518646-e45e-4c47-81d1-54baa81043f3.png",
  },
  {
    id: "4",
    title: "Indústria Metalurgica",
    category: "industrial",
    location: "São Bernardo, SP",
    year: "2023",
    image: "https://cdn.abacus.ai/images/89524fd6-adbb-4264-96cb-0f4601dff1e0.png",
  },
  {
    id: "5",
    title: "Reforma de Fachada Comercial",
    category: "comercial",
    location: "São Paulo, SP",
    year: "2024",
    image: "https://cdn.abacus.ai/images/3cf78604-3225-4ac4-9f1c-3a27b4958552.png",
  },
  {
    id: "6",
    title: "Casa Térrea Moderna",
    category: "residencial",
    location: "Osasco, SP",
    year: "2023",
    image: "https://cdn.abacus.ai/images/cc7a2846-a6d0-46a9-a123-55731c65a5ff.png",
  },
];

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const filteredProjects = activeCategory === "all"
    ? placeholderProjects
    : placeholderProjects?.filter?.((p) => p?.category === activeCategory) ?? [];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-20">
          <Image src={companyData?.images?.hero ?? ""} alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 text-center text-white">
          <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Nosso Trabalho</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfólio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Conheça alguns dos projetos e obras realizados pela CPE Engenharia.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories?.map?.((cat) => (
              <button
                key={cat?.id}
                onClick={() => setActiveCategory(cat?.id ?? "all")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeCategory === cat?.id ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                {cat?.label}
              </button>
            )) ?? []}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects?.map?.((project, index) => (
              <motion.div
                key={project?.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index ?? 0) * 0.1 }}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image src={project?.image ?? ""} alt={project?.title ?? ""} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Maximize className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project?.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{project?.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{project?.year}</span>
                  </div>
                </div>
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>
    </>
  );
}
