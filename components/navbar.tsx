"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { companyData } from "@/lib/company-data";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/orcamento", label: "Orçamento" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-slate-950/80 backdrop-blur-md py-3.5 border-b border-white/10"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            {/* Box com o logotipo oficial sem distorções */}
            <div className="bg-white p-1 rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105 w-12 h-12 flex-shrink-0 border border-slate-100">
              <Image
                src="/images/logo.png"
                alt="CPE Engenharia"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Texto Oficial da Marca */}
            <div className="flex flex-col justify-center">
              <span className={`text-lg sm:text-xl font-black tracking-wider leading-none ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>
                CPE <span className="text-red-600">ENGENHARIA</span>
              </span>
              <span className={`text-[9px] sm:text-[11px] tracking-widest uppercase font-semibold mt-1 ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                Construindo Qualidade de Vida
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ""}
                href={link?.href ?? "/"}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link?.href
                    ? "bg-red-600 text-white"
                    : isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link?.label ?? ""}
              </Link>
            )) ?? []}
            <a
              href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Falar com a Priscila
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href ?? ""}
                  href={link?.href ?? "/"}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link?.href
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link?.label ?? ""}
                </Link>
              )) ?? []}
              <a
                href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Falar com a Priscila
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
