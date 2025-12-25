"use client"; // Pastikan ada ini karena Framer Motion berjalan di sisi client

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const optionToolbox = [
  { src: "/logos/vscode.svg", alt: "VS Code logo" },
  { src: "/logos/postman.svg", alt: "Postman logo" },
  { src: "/logos/insomnia.svg", alt: "Insomnia logo" },
  { src: "/logos/git.svg", alt: "Git logo" },
  { src: "/logos/github.svg", alt: "GitHub logo" },
  { src: "/logos/figma.svg", alt: "Figma logo" },
  { src: "/logos/eslint.svg", alt: "ESLint logo" },
  { src: "/logos/nginx.svg", alt: "Nginx logo" },
  { src: "/logos/notion.svg", alt: "Notion logo" },
  { src: "/logos/vercel.svg", alt: "Vercel logo" },
  { src: "/logos/strapi.svg", alt: "Strapi logo" },
  { src: "/logos/supabase.svg", alt: "Supabase logo" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ToolboxSection() {
  return (
    <div className="py-20">
      {" "}
      {/* Tambahkan padding agar scroll lebih terasa */}
      <div className="text-center mb-16">
        <h1 className="font-semibold text-[48px]">
          Build & Engineering{" "}
          <span className="text-[#667085] mb-6">Toolbox</span>
        </h1>
        <p className="text-[#667085] text-[18px] font-medium">
          A comprehensive suite of tools supporting how I build, deliver, and
          maintain software.
        </p>
      </div>
      <div className="flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }} // Animasi jalan sekali saat 20% konten terlihat
          className="grid grid-cols-7 gap-10 justify-center max-w-[920px]"
        >
          {optionToolbox.map((item, index) => (
            // 4. Bungkus Card dengan motion.div menggunakan itemVariants
            <motion.div key={index} variants={itemVariants}>
              <Card className="w-24 h-24 flex items-center justify-center">
                <CardContent className="p-0 flex items-center justify-center">
                  <Image src={item.src} alt={item.alt} width={58} height={58} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
