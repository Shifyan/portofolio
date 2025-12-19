import Link from "next/link";
import { PAGE_ROUTES } from "@/lib/routes";
import { ActionButton } from "./ActionButton";

export default function Header() {
  const classForCenterHeader =
    "flex items-center gap-[46px] py-[18px] px-[44px] rounded-[90px] bg-white/60 border border-white/80 shadow-[0_0_1px_rgba(0,0,0,0.3),_0_2px_30px_rgba(0,0,0,0.08),_0_0_15px_rgba(0,0,0,0.03)] backdrop-blur-[7.5px] text-[14px] font-semibold text-[#475467] whitespace-nowrap w-max";

  return (
    <header className="grid grid-cols-3 items-center py-[30px] px-[42px] w-full">
      <div className="flex justify-start">
        <Link
          href={PAGE_ROUTES.HOME}
          className="text-2xl font-bold whitespace-nowrap"
        >
          Shif &bull; <span className="text-[#667085]">Yannn</span>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className={classForCenterHeader}>
          <Link href={PAGE_ROUTES.HOME}>Home</Link>
          <Link href={PAGE_ROUTES.PORTOFOLIO}>Portofolio</Link>
          <Link href={PAGE_ROUTES.ABOUT}>About Me</Link>
          <Link href={PAGE_ROUTES.CONTACT}>Contact</Link>
        </div>
      </div>

      <div className="flex justify-end">
        <ActionButton />
      </div>
    </header>
  );
}
