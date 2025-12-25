"use client"; // 1. Wajib tambahkan ini di baris paling atas

import { Badge } from "@/components/ui/badge";
import { ActionButton } from "@/components/ActionButton";
import Marquee from "react-fast-marquee";
import PortofolioSection from "@/components/PortofolioSection";
import ToolboxSection from "@/components/ToolboxSection";
import FooterSection from "@/components/FooterSection";
// 2. Import motion
import { motion } from "framer-motion";

export default function HomePage() {
  const imageRoute = [
    { src: "/logos/html.svg", alt: "HTML logo" },
    { src: "/logos/css.svg", alt: "CSS logo" },
    { src: "/logos/javascript.svg", alt: "JavaScript logo" },
    { src: "/logos/bootstrap.svg", alt: "Bootstrap logo" },
    { src: "/logos/tailwindcss.svg", alt: "Tailwind CSS logo" },
    { src: "/logos/nodejs.svg", alt: "Node.js logo" },
    { src: "/logos/react.svg", alt: "React logo" },
    { src: "/logos/nextjs.svg", alt: "Next.js logo" },
    { src: "/logos/mysql.svg", alt: "MySQL logo" },
    { src: "/logos/postgresql.svg", alt: "PostgreSQL logo" },
    { src: "/logos/mongodb.svg", alt: "MongoDB logo" },
  ];

  return (
    <div>
      <div className="py-10">
        <div className="flex justify-center gap-2 text-[#475467] mb-4">
          <Badge
            variant="outline"
            className="text-[#475467] font-medium text-xs py-1 px-3"
          >
            React Developer
          </Badge>
          <Badge
            variant="outline"
            className="text-[#475467] font-medium text-xs py-1 px-3"
          >
            Front-End Developer
          </Badge>
          <Badge
            variant="outline"
            className="text-[#475467] font-medium text-xs py-1 px-3"
          >
            Back-End Developer
          </Badge>
        </div>
        <div className="mb-10">
          <div>
            <h1 className="font-bold text-[59px] text-center mb-3">
              <span className="text-[#667085]">Hello!</span> I am Shifyan
              Almustafid, <br />a Developer Based in Indonesia
            </h1>
            <h3 className="flex justify-center text-[#667085]">
              Passionate about building end-to-end digital solutions and
              transforming ideas into real-world impact.
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <ActionButton text="Contact Me" />
        </div>
      </div>

      {/* Section Technologies */}
      <div className="py-15">
        <div>
          <h2 className="font-semibold text-[32px] text-center mb-6">
            Technologies I Work With
          </h2>
          <h3 className="text-[#667085] font-medium text-[18px] text-center">
            Helping organizations innovate and grow through scalable technology
            solutions
          </h3>
        </div>
        {/* Marquee Logo */}
        <div className="mt-16 mb-2 px-15">
          <Marquee
            gradient={true}
            speed={50}
            autoFill={true}
            gradientWidth={380}
            pauseOnHover={false} // Atur ke false agar marquee tidak berhenti
          >
            {imageRoute.map((image, index) => (
              <div
                key={index}
                className="h-30 flex items-center px-10"
                style={{ perspective: "1000px" }} // Menjaga kedalaman 3D saat berputar
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="h-17 w-auto object-contain cursor-pointer"
                  initial={{ opacity: 0.7, rotateY: 0 }}
                  whileHover={{
                    opacity: 1,
                    rotateY: 360,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Portofolio Section */}
      <div className="py-15">
        <PortofolioSection />
      </div>
      <div className="py-16">
        <ToolboxSection />
      </div>
      <div className="py-16 px-20">
        <FooterSection />
      </div>
    </div>
  );
}
