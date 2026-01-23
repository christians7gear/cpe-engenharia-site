"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { Service } from "@/lib/services-data";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
    service?.icon ?? "Ruler"
  ] ?? Icons.Ruler;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index ?? 0) * 0.1, duration: 0.5 }}
    >
      <Link href={`/servicos/${service?.slug ?? ""}`}>
        <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
          <div className="relative aspect-video bg-gray-100">
            <Image
              src={service?.image ?? "/images/architectural.png"}
              alt={service?.title ?? ""}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  {service?.category === "projetos" ? "Projeto" : "Execução"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
              {service?.title ?? ""}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {service?.shortDescription ?? ""}
            </p>
            <div className="mt-4 flex items-center text-red-600 font-medium text-sm">
              Saiba mais
              <Icons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
