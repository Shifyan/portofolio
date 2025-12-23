"use client";
import PortofolioCard from "./PortofolioCard";
import { Button } from "./ui/button";
import { PAGE_ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";

export default function PortofolioSection() {
  const router = useRouter();

  return (
    <div>
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
      <div className="mt-16 flex justify-center">
        <Button
          variant={"outline"}
          className="rounded-[78px] py-3 px-[42px] font-semibold hover:cursor-pointer"
          onClick={() => router.push(PAGE_ROUTES.PORTOFOLIO)}
        >
          View All
        </Button>
      </div>
    </div>
  );
}
