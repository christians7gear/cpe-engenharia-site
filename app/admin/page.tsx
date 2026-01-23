"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Users, FileText, Briefcase, LogOut, Clock, Mail, Phone, Building, Eye } from "lucide-react";

interface Quote { id: string; name: string; email: string; phone: string; serviceType: string; status: string; createdAt: string; }
interface Lead { id: string; name: string; email: string; phone?: string; message: string; createdAt: string; }

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({ leads: 0, quotes: 0, projects: 0, pendingQuotes: 0 });
  const [recentQuotes, setRecentQuotes] = useState<Quote[]>([]);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const { data: session, status } = useSession() || {};
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && status === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [mounted, status, router]);

  useEffect(() => {
    if (mounted && status === "authenticated") {
      fetch("/api/admin/stats").then((r) => r.json()).then((data) => {
        setStats(data?.stats ?? {});
        setRecentQuotes(data?.recentQuotes ?? []);
        setRecentLeads(data?.recentLeads ?? []);
      }).catch(console.error);
    }
  }, [mounted, status]);

  if (!mounted || status === "loading") return <div className="min-h-screen flex items-center justify-center bg-gray-100"><div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" /></div>;
  if (status === "unauthenticated") return null;

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <header className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
          <button onClick={() => signOut({ callbackUrl: "/admin/login" })} className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"><LogOut className="w-5 h-5" />Sair</button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[{ icon: FileText, label: "Orçamentos", value: stats?.quotes ?? 0, color: "bg-blue-500" }, { icon: Clock, label: "Pendentes", value: stats?.pendingQuotes ?? 0, color: "bg-yellow-500" }, { icon: Users, label: "Contatos", value: stats?.leads ?? 0, color: "bg-green-500" }, { icon: Briefcase, label: "Projetos", value: stats?.projects ?? 0, color: "bg-purple-500" }]?.map?.((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (index ?? 0) * 0.1 }} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${stat?.color ?? ""} rounded-lg flex items-center justify-center text-white`}><stat.icon className="w-6 h-6" /></div>
                <div><p className="text-2xl font-bold text-gray-900">{stat?.value ?? 0}</p><p className="text-sm text-gray-500">{stat?.label ?? ""}</p></div>
              </div>
            </motion.div>
          )) ?? []}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Últimos Orçamentos</h2>
            <div className="space-y-4">
              {(recentQuotes?.length ?? 0) === 0 ? <p className="text-gray-500 text-sm">Nenhum orçamento ainda.</p> : recentQuotes?.map?.((quote) => (
                <div key={quote?.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900">{quote?.name ?? ""}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${(quote?.status ?? "") === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{(quote?.status ?? "") === "pending" ? "Pendente" : quote?.status ?? ""}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{quote?.serviceType ?? ""}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{quote?.email ?? ""}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{quote?.phone ?? ""}</span>
                  </div>
                </div>
              )) ?? []}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Últimos Contatos</h2>
            <div className="space-y-4">
              {(recentLeads?.length ?? 0) === 0 ? <p className="text-gray-500 text-sm">Nenhum contato ainda.</p> : recentLeads?.map?.((lead) => (
                <div key={lead?.id} className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-1">{lead?.name ?? ""}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{lead?.message ?? ""}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{lead?.email ?? ""}</span>
                    {lead?.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{lead?.phone ?? ""}</span>}
                  </div>
                </div>
              )) ?? []}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
