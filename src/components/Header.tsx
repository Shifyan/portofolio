import Link from "next/link";
import { Button } from "./ui/button";
import { PAGE_ROUTES } from "@/lib/routes";
import Image from "next/image";

export default function Header() {
  const classForCenterHeader =
    "flex justify-between items-center gap-[46px] py-[18px] px-[44px] rounded-[90px] bg-white/60 border border-white/80 shadow-[0_0_1px_rgba(0,0,0,0.3),_0_2px_30px_rgba(0,0,0,0.08),_0_0_15px_rgba(0,0,0,0.03)] backdrop-blur-[7.5px] text-[14px] font-semibold text-[#475467]";
  return (
    <div className="flex justify-between items-center py-[30px] px-[42px]">
      <Link href={PAGE_ROUTES.HOME} className="text-2xl font-bold">
        Shif &bull; <span className="text-[#667085]">Yannn</span>
      </Link>
      <div className={classForCenterHeader}>
        <Link href={PAGE_ROUTES.HOME}>Home</Link>
        <Link href={PAGE_ROUTES.PORTOFOLIO}>Portofolio</Link>
        <Link href={PAGE_ROUTES.ABOUT}>About Me</Link>
        <Link href={PAGE_ROUTES.CONTACT}>Contact</Link>
      </div>

      <div>
        <Button variant="outline" asChild className="py-6 px-7 rounded-[78px]">
          <Link
            href={PAGE_ROUTES.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Image
              src="/Social-icon.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="inline"
            />
            <span className="text-lg text-[#344054] font-semibold">
              Get In Touch
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
