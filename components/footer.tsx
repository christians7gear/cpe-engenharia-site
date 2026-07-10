import Link from "next/link";
import { companyData } from "@/lib/company-data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lado Esquerdo - Info Empresa */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl font-bold text-white">{companyData.name}</span>
          </div>
          <p className="text-sm text-slate-400 mb-4">{companyData.slogan}</p>
          <p className="text-xs text-slate-500">CNPJ: {companyData.cnpj}</p>
        </div>

        {/* Centro - Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#servicos" className="hover:text-white transition">Serviços</Link></li>
            <li><Link href="#portfolio" className="hover:text-white transition">Portfólio</Link></li>
            <li><Link href="#orcamento" className="hover:text-white transition">Solicitar Orçamento</Link></li>
            <li><Link href="#contato" className="hover:text-white transition">Contato</Link></li>
          </ul>
        </div>

        {/* Lado Direito - Contato Atualizado */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="text-red-500 h-5 w-5 shrink-0 mt-0.5" />
              <span>{companyData.address.full}</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-red-500 h-5 w-5 shrink-0" />
              <a href={`https://wa.me/${companyData.team.admin.whatsapp}`} className="hover:text-white transition">
                {companyData.team.admin.phone}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-red-500 h-5 w-5 shrink-0" />
              <a href="mailto:contato@cpeengenharia.com.br" className="hover:text-white transition">
                contato@cpeengenharia.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
        <p className="mt-1">Responsável Técnico: Christian Gomes da Silva - {companyData.team.engineer.crea}</p>
      </div>
    </footer>
  );
}
