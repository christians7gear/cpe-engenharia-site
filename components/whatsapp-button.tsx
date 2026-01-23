"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Briefcase, Phone } from "lucide-react";
import { companyData } from "@/lib/company-data";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const name = companyData?.team?.admin?.name ?? "Priscila";
  const role = "Atendimento Comercial";
  const whatsapp = companyData?.team?.admin?.whatsapp ?? "";

  const message = encodeURIComponent(
    "Olá! Vim pelo site da CPE Engenharia e gostaria de um orçamento."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden mb-4"
          >
            <div className="bg-green-600 p-4 text-white">
              <h3 className="font-semibold">Atendimento no WhatsApp</h3>
              <p className="text-sm text-green-100">
                Clique para falar com nosso comercial
              </p>
            </div>

            <div className="p-4">
              <a
                href={`https://wa.me/${whatsapp}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
                <Phone className="w-5 h-5 text-green-600" />
              </a>

              <p className="text-xs text-gray-500 mt-3">
                Atendimento rápido para orçamento e dúvidas sobre projetos e obras.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"
        }`}
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
