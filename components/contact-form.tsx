"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response?.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data?.error ?? "Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setErrorMessage("Erro de conexão. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
        <p className="text-green-700">
          Obrigado pelo contato. Nossa equipe responderá em breve.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-green-600 font-medium hover:underline"
        >
          Enviar nova mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Seu nome *"
            value={formData?.name ?? ""}
            onChange={(e) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? "" })}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Seu e-mail *"
            value={formData?.email ?? ""}
            onChange={(e) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? "" })}
            required
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="tel"
          placeholder="Seu telefone"
          value={formData?.phone ?? ""}
          onChange={(e) => setFormData({ ...(formData ?? {}), phone: e?.target?.value ?? "" })}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
        <textarea
          placeholder="Sua mensagem *"
          value={formData?.message ?? ""}
          onChange={(e) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? "" })}
          required
          rows={compact ? 3 : 5}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Ao enviar, você concorda que seus dados serão armazenados para contato.
      </p>
    </form>
  );
}
