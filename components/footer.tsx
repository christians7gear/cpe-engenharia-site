import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "@/lib/company-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo Inferior com a Imagem Oficial */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="bg-white p-1 rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105 w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="CPE Engenharia"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xl font-black text-white tracking-wider leading-none">
                  CPE <span className="text-red-600">ENGENHARIA</span>
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-slate-400 mt-1">
                  {companyData?.slogan ?? "Construindo Qualidade de Vida"}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 pt-2 font-mono">
              CNPJ: {companyData?.cnpj ?? "62.575.418/0001-84"}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/servicos" className="hover:text-red-500 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-red-500 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="hover:text-red-500 transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato Institucional */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {companyData?.address?.full ?? "Av. Paulista, nº 807 – Bela Vista – São Paulo/SP – CEP 01311-100"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a
                  href={`https://wa.me/${companyData?.team?.admin?.whatsapp ?? ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  (11) 98932-0917
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:contato@cpeeng.com.br"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  contato@cpeeng.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 CPE Engenharia. Todos os direitos reservados.</p>
          <p className="text-slate-600">
            Responsável Técnico: Christian Gomes da Silva - Eng. Christian Gomes
          </p>
        </div>
      </div>
    </footer>
  );
}
