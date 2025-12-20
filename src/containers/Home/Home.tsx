import { Badge } from "@/components/ui/badge";
import { ActionButton } from "@/components/ActionButton";
import Marquee from "react-fast-marquee";
import PortofolioCard from "@/components/PortofolioCard";
import { Button } from "@/components/ui/button";
export default function HomePage() {
  const imageRoute = [
    { src: "/logos/html.svg", alt: "Next.js logo" },
    { src: "/logos/css.svg", alt: "Next.js logo" },
    { src: "/logos/javascript.svg", alt: "Next.js logo" },
    { src: "/logos/bootstrap.svg", alt: "Next.js logo" },
    { src: "/logos/tailwindcss.svg", alt: "Next.js logo" },
    { src: "/logos/nodejs.svg", alt: "Node.js logo" },
    { src: "/logos/react.svg", alt: "React logo" },
    { src: "/logos/nextjs.svg", alt: "Next.js logo" },
    { src: "/logos/mysql.svg", alt: "Next.js logo" },
    { src: "/logos/postgresql.svg", alt: "Next.js logo" },
    { src: "/logos/mongodb.svg", alt: "Next.js logo" },
  ];
  return (
    <div>
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
        <div className="mt-10 mb-2 px-15">
          <Marquee
            gradient={true}
            speed={50}
            autoFill={true}
            gradientWidth={380}
          >
            {imageRoute.map((image, index) => (
              <div key={index} className="h-30 flex items-center px-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-17 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      {/* Portofolio Section */}
      <div className="py-15">
        <div className=" text-center mb-15">
          <h2 className="text-[46px] font-semibold pb-6">Portofolio</h2>
          <h3 className="text-[18px] font-semibold text-[#667085]">
            Check out what we{"'"}ve been working on lately
          </h3>
        </div>
        <div className="flex justify-center gap-4 ">
          <PortofolioCard />
          <PortofolioCard />
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            variant={"outline"}
            className="rounded-[78px] py-3 px-[42px] font-semibold hover:cursor-pointer"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
