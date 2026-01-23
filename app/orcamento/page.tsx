"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle, User, Mail, Phone, Building, MapPin, FileText, Calendar, DollarSign, Upload } from "lucide-react";
import { companyData } from "@/lib/company-data";
import { services } from "@/lib/services-data";

export default function OrcamentoPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", serviceType: "", location: "", projectArea: "", deadline: "", budget: "", description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response?.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", serviceType: "", location: "", projectArea: "", deadline: "", budget: "", description: "" });
      } else {
        setStatus("error");
        setErrorMessage(data?.error ?? "Erro ao enviar");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Erro de conexão");
    }
  };

  if (!mounted) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" /></div>;

  if (status === "success") {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="max-w-[600px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicitação Enviada!</h2>
            <p className="text-gray-600 mb-8">Obrigado pelo interesse! Nossa equipe analisará sua solicitação e entrará em contato em breve.</p>
            <button onClick={() => setStatus("idle")} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">Nova Solicitação</button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-20"><Image src={companyData?.images?.hero ?? ""} alt="" fill className="object-cover" /></div>
        <div className="relative max-w-[1200px] mx-auto px-4 text-center text-white">
          <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Orçamento</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicite um Orçamento</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Preencha o formulário abaixo e receba uma proposta personalizada.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"><AlertCircle className="w-5 h-5 text-red-600" /><p className="text-red-700 text-sm">{errorMessage}</p></div>}
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="text" placeholder="Nome completo *" value={formData?.name ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? "" })} required className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
                <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="email" placeholder="E-mail *" value={formData?.email ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? "" })} required className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="tel" placeholder="Telefone *" value={formData?.phone ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), phone: e?.target?.value ?? "" })} required className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
                <div className="relative"><Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="text" placeholder="Empresa (opcional)" value={formData?.company ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), company: e?.target?.value ?? "" })} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>
              </div>

              <div className="relative">
                <select value={formData?.serviceType ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), serviceType: e?.target?.value ?? "" })} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white">
                  <option value="">Selecione o serviço *</option>
                  {services?.map?.((s) => <option key={s?.id} value={s?.slug}>{s?.title}</option>) ?? []}
                </select>
              </div>

              <div className="relative"><MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" /><input type="text" placeholder="Localização do projeto (cidade/estado) *" value={formData?.location ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), location: e?.target?.value ?? "" })} required className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /></div>

              <div className="grid md:grid-cols-3 gap-4">
                <input type="text" placeholder="Área (m²)" value={formData?.projectArea ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), projectArea: e?.target?.value ?? "" })} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                <input type="text" placeholder="Prazo desejado" value={formData?.deadline ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), deadline: e?.target?.value ?? "" })} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                <input type="text" placeholder="Orçamento previsto" value={formData?.budget ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), budget: e?.target?.value ?? "" })} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>

              <div className="relative"><FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" /><textarea placeholder="Descreva seu projeto *" value={formData?.description ?? ""} onChange={(e) => setFormData({ ...(formData ?? {}), description: e?.target?.value ?? "" })} required rows={5} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" /></div>

              <button type="submit" disabled={status === "loading"} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin" />Enviando...</> : <><Send className="w-5 h-5" />Solicitar Orçamento</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
