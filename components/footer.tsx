"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { companyData } from "@/lib/company-data";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Image
              src={companyData?.images?.logo ?? "/images/logo.png"}
              alt="CPE Engenharia"
              width={200}
              height={67}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              {companyData?.slogan ?? "Construindo Qualidade de Vida"}. Projetos arquitetônicos e complementares para todo o Brasil,
              execução de obras na região de São Paulo.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">CNPJ: {companyData?.cnpj ?? ""}</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-red-500 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-red-500 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="text-gray-400 hover:text-red-500 transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                <span className="text-sm">{companyData?.address?.full ?? ""}</span>
              </li>
              <li>
                <a
                  href={`tel:${companyData?.team?.engineer?.phone?.replace?.(/\D/g, "") ?? ""}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm">{companyData?.team?.engineer?.phone ?? ""}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@cpeengenharia.com.br"
                  className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm">contato@cpeengenharia.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {companyData?.name ?? "CPE Engenharia"}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Responsável Técnico: {companyData?.team?.engineer?.name ?? ""} - {companyData?.team?.engineer?.crea ?? ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
