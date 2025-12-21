"use client"; // Pastikan menggunakan client component

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion"; // Import framer-motion

export default function PortofolioCard() {
  return (
    // Kita gunakan motion.div sebagai wrapper utama untuk menangkap hover state
    <motion.div
      className="w-[390px]"
      initial="rest"
      whileHover="hovered"
      animate="rest"
    >
      <Card>
        <CardContent>
          {/* Container gambar dengan perspective agar efek 3D terlihat nyata */}
          <div
            className="flex justify-center rounded-xl overflow-hidden mb-6"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              variants={{
                rest: { rotateY: 0 },
                hovered: { rotateY: 180 },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full flex justify-center"
            >
              <Image
                src={"/images/mock-image-porto.jpg"}
                alt="Mock"
                width={388}
                height={388}
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-bold mb-4">
              Helo World -{" "}
              <span className="text-[#667085]">asjdas asnd ajipajsdad</span>
            </h4>
            <p className="font-semibold text-[14px] text-[#667085]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ab
              tempora omnis illo maxime veritatis aperiam iusto, deleniti
              doloribus, dolorum odio eius. Ducimus, incid unt nisi qui quo
              nostrum ad fuga.
            </p>
          </div>
          <Separator />
          <div className="flex gap-2 flex-wrap mt-6">
            <Badge
              variant={"outline"}
              className="text-[#475467] font-medium text-xs py-1 px-3"
            >
              Shifyan
            </Badge>
            <Badge
              variant={"outline"}
              className="text-[#475467] font-medium text-xs py-1 px-3"
            >
              Shifyan
            </Badge>
            <Badge
              variant={"outline"}
              className="text-[#475467] font-medium text-xs py-1 px-3"
            >
              Shifyan
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
