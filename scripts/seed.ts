import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("johndoe123", 12);
  
  await prisma.user.upsert({
    where: { email: "john@doe.com" },
    update: {},
    create: {
      email: "john@doe.com",
      name: "Administrador",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("Admin user created");

  // Create sample projects
  const projects = [
    {
      title: "Residência Alto Padrão",
      slug: "residencia-alto-padrao",
      category: "residencial",
      description: "Casa de alto padrão com 4 suítes, piscina e área gourmet.",
      location: "São Paulo, SP",
      area: "450m²",
      year: "2024",
      imageUrl: "https://cdn.abacus.ai/images/cc7a2846-a6d0-46a9-a123-55731c65a5ff.png",
      featured: true,
    },
    {
      title: "Galpão Logístico",
      slug: "galpao-logistico",
      category: "industrial",
      description: "Centro de distribuição com 5.000m² de área construída.",
      location: "Guarulhos, SP",
      area: "5.000m²",
      year: "2024",
      imageUrl: "https://cdn.abacus.ai/images/025a3994-37de-4f81-9bb3-7276165b3a50.png",
      featured: true,
    },
    {
      title: "Posto de Combustível",
      slug: "posto-combustivel",
      category: "comercial",
      description: "Construção completa de posto com loja de conveniência.",
      location: "Campinas, SP",
      area: "1.200m²",
      year: "2023",
      imageUrl: "https://cdn.abacus.ai/images/53518646-e45e-4c47-81d1-54baa81043f3.png",
      featured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: {
        ...project,
        images: [],
        published: true,
      },
    });
  }

  console.log("Sample projects created");
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
