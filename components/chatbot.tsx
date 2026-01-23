"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá! Sou o assistente virtual da CPE Engenharia. Como posso ajudar você hoje? Posso tirar dúvidas sobre nossos serviços de projetos e obras.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView?.({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input?.trim?.() || isLoading) return;

    const userMessage = input?.trim?.() ?? "";
    setInput("");
    setMessages((prev) => [...(prev ?? []), { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...(messages ?? []), { role: "user", content: userMessage }],
        }),
      });

      if (!response?.ok) throw new Error("Erro na resposta");

      const reader = response?.body?.getReader?.();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      let partialData = "";

      setMessages((prev) => [...(prev ?? []), { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = (await reader?.read?.()) ?? { done: true, value: undefined };
        if (done) break;

        partialData += decoder.decode(value, { stream: true });
        const lines = partialData.split("\n");
        partialData = lines?.pop?.() ?? "";

        for (const line of lines ?? []) {
          if (line?.startsWith?.("data: ")) {
            const data = line?.slice?.(6) ?? "";
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              const content = parsed?.choices?.[0]?.delta?.content ?? "";
              if (content) {
                assistantMessage += content;
                setMessages((prev) => {
                  const newMessages = [...(prev ?? [])];
                  newMessages[newMessages.length - 1] = {
                    role: "assistant",
                    content: assistantMessage,
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...(prev ?? []),
        {
          role: "assistant",
          content: "Desculpe, ocorreu um erro. Por favor, tente novamente ou entre em contato via WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-red-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente CPE</h3>
                  <p className="text-xs text-red-100">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages?.map?.((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    message?.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message?.role === "assistant" && (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message?.role === "user"
                        ? "bg-red-600 text-white rounded-br-md"
                        : "bg-white text-gray-700 shadow-sm rounded-bl-md"
                    }`}
                  >
                    {message?.content ?? ""}
                  </div>
                  {message?.role === "user" && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              )) ?? []}
              {isLoading && (messages?.[messages?.length - 1]?.content ?? "") === "" && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <form
                onSubmit={(e) => {
                  e?.preventDefault?.();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e?.target?.value ?? "")}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim?.()}
                  className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-600" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
