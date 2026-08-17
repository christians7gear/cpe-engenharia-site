import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "@/lib/company-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo Inferior com Identidade Completa */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center transition-transform group-hover:scale-105 w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 100 80" className="w-full h-full object-contain">
                  <defs>
                    <linearGradient id="footDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="60%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="footRedBack" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="40%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#7f1d1d" />
                    </linearGradient>
                    <linearGradient id="footRedFront" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fca5a5" />
                      <stop offset="30%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#991b1b" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 28,12 C 14,24 10,48 18,65 C 22,72 27,76 30,78 C 24,70 20,56 22,42 C 24,26 30,17 33,10 Z"
                    fill="url(#footDark)"
                  />
                  <path
                    fillRule="evenodd"
                    d="M 45,15 C 34,15 28,30 29,48 C 30,66 38,75 48,75 C 56,75 62,64 62,48 C 62,32 55,15 45,15 Z M 44,24 C 49,24 53,34 53,48 C 53,62 48,67 44,67 C 39,67 36,58 36,48 C 36,36 40,24 44,24 Z"
                    fill="url(#footRedBack)"
                  />
                  <path
                    fillRule="evenodd"
                    d="M 60,20 C 50,20 44,32 45,49 C 46,65 53,73 62,73 C 69,73 74,63 74,49 C 74,34 68,20 60,20 Z M 59,28 C 63,28 66,36 66,49 C 66,61 63,65 59,65 C 55,65 53,58 53,49 C 53,38 56,28 59,28 Z"
                    fill="url(#footRedFront)"
                  />
                  <ellipse cx="79" cy="49" rx="3.5" ry="7.5" fill="url(#footDark)" />
                </svg>
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
