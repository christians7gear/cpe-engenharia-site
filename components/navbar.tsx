"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
            {/* Box do Logo Superior */}
            <div className="bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105 w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 border border-slate-100">
              <svg viewBox="0 0 100 80" className="w-full h-full object-contain">
                <defs>
                  <linearGradient id="navDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="60%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="navRedBack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="40%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                  <linearGradient id="navRedFront" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="30%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                </defs>

                <path
                  d="M 28,12 C 14,24 10,48 18,65 C 22,72 27,76 30,78 C 24,70 20,56 22,42 C 24,26 30,17 33,10 Z"
                  fill="url(#navDark)"
                />
                <path
                  fillRule="evenodd"
                  d="M 45,15 C 34,15 28,30 29,48 C 30,66 38,75 48,75 C 56,75 62,64 62,48 C 62,32 55,15 45,15 Z M 44,24 C 49,24 53,34 53,48 C 53,62 48,67 44,67 C 39,67 36,58 36,48 C 36,36 40,24 44,24 Z"
                  fill="url(#navRedBack)"
                />
                <path
                  fillRule="evenodd"
                  d="M 60,20 C 50,20 44,32 45,49 C 46,65 53,73 62,73 C 69,73 74,63 74,49 C 74,34 68,20 60,20 Z M 59,28 C 63,28 66,36 66,49 C 66,61 63,65 59,65 C 55,65 53,58 53,49 C 53,38 56,28 59,28 Z"
                  fill="url(#navRedFront)"
                />
                <ellipse cx="79" cy="49" rx="3.5" ry="7.5" fill="url(#navDark)" />
              </svg>
            </div>

            {/* Texto da Marca */}
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
