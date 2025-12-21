import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const optionToolbox = [
  { src: "/logos/vscode.svg", alt: "VS Code logo" },
  { src: "/logos/postman.svg", alt: "VS Code logo" },
  { src: "/logos/insomnia.svg", alt: "VS Code logo" },
  { src: "/logos/git.svg", alt: "VS Code logo" },
  { src: "/logos/github.svg", alt: "VS Code logo" },
  { src: "/logos/figma.svg", alt: "VS Code logo" },
  { src: "/logos/eslint.svg", alt: "VS Code logo" },
  { src: "/logos/nginx.svg", alt: "VS Code logo" },
  { src: "/logos/notion.svg", alt: "VS Code logo" },
  { src: "/logos/vercel.svg", alt: "VS Code logo" },
  { src: "/logos/strapi.svg", alt: "VS Code logo" },
  { src: "/logos/supabase.svg", alt: "VS Code logo" },
];
export default function ToolboxSection() {
  return (
    <div>
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
        <div className="grid grid-cols-7 gap-10 justify-center max-w-[920px] ">
          {optionToolbox.map((item, index) => (
            <Card className="w-24 h-24" key={index}>
              <CardContent>
                <Image src={item.src} alt={item.alt} width={58} height={58} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
