import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? "http://localhost:3000"),
  title: {
    default: "CPE Engenharia | Construindo Qualidade de Vida",
    template: "%s | CPE Engenharia",
  },
  description:
    "Projetos arquitetônicos, complementares, AVCB e execução de obras. Atendemos todo o Brasil com projetos e São Paulo com execução. Engenheiro com CREA ativo.",
  keywords: [
    "engenharia civil",
    "projetos arquitetônicos",
    "AVCB",
    "SPCI",
    "SDA",
    "obras residenciais",
    "galpões industriais",
    "postos de combustível",
    "São Paulo",
    "engenheiro civil",
  ],
  authors: [{ name: "CPE Engenharia" }],
  creator: "CPE Engenharia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "CPE Engenharia",
    title: "CPE Engenharia | Construindo Qualidade de Vida",
    description:
      "Projetos arquitetônicos, complementares, AVCB e execução de obras em São Paulo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPE Engenharia",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton phoneNumber="5511989320917" />
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
