import { Badge } from "@/components/ui/badge";
import { ActionButton } from "@/components/ActionButton";
export default function HomePage() {
  return (
    <div className="py-10">
      <div className="flex justify-center gap-2 text-[#475467] mb-4">
        <Badge variant="outline" className="text-[#475467]">
          React Developer
        </Badge>
        <Badge variant="outline" className="text-[#475467]">
          Front-End Developer
        </Badge>
        <Badge variant="outline" className="text-[#475467]">
          Back-End Developer
        </Badge>
      </div>
      <div className="mb-7">
        <div>
          <h1 className="font-bold text-[59px] text-center mb-3">
            <span className="text-[#667085]">Hello!</span> I am Shifyan
            Almustafid, a Web Developer Based in Indonesia
          </h1>
          <h3 className="flex justify-center text-[#667085]">
            Passionate about building end-to-end web applications and
            transforming ideas into real-world solutions.
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <ActionButton text="Contact Me" />
      </div>
    </div>
  );
}
