"use client";

import Link from "next/link";
import { PAGE_ROUTES } from "@/lib/routes";
import { ActionButton } from "./ActionButton";

export default function Header() {
  // Style presisi sesuai spesifikasi Figma Anda
  const navStyle =
    "flex flex-row items-center py-[18px] px-[44px] gap-[46px] " +
    "bg-white/60 backdrop-blur-[7.5px] rounded-[90px] " +
    "shadow-[0px_0px_1px_rgba(0,0,0,0.3),_0px_2px_30px_rgba(0,0,0,0.08),_0px_0px_15px_rgba(0,0,0,0.03)] " +
    "text-[14px] font-semibold text-[#475467] whitespace-nowrap";

  return (
    <header className="relative w-full">
      {/* 1. Baris Utama (Logo & Action Button) - Akan ikut ter-scroll ke atas */}
      <div className="grid grid-cols-3 items-center py-[30px] px-[42px] w-full">
        {/* KIRI: Logo */}
        <div className="flex justify-start">
          <Link
            href={PAGE_ROUTES.HOME}
            className="text-2xl font-bold whitespace-nowrap"
          >
            Shif &bull; <span className="text-[#667085]">Yannn</span>
          </Link>
        </div>

        {/* TENGAH: Kosongkan kolom grid ini agar navigasi fixed bisa berada di tengah secara visual */}
        <div></div>

        {/* KANAN: Action Button */}
        <div className="flex justify-end">
          <ActionButton />
        </div>
      </div>

      {/* 2. NAVIGASI: Menggunakan FIXED agar selalu ikut di-scroll */}
      <div className="fixed top-[30px] left-1/2 -translate-x-1/2 z-999 pointer-events-none">
        <nav className={navStyle + " pointer-events-auto"}>
          <Link
            href={PAGE_ROUTES.HOME}
            className="hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href={PAGE_ROUTES.PORTOFOLIO}
            className="hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href={PAGE_ROUTES.ABOUT}
            className="hover:text-black transition-colors"
          >
            About Me
          </Link>
          <Link
            href={PAGE_ROUTES.CONTACT}
            className="hover:text-black transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
