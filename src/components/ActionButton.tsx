import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import { PAGE_ROUTES } from "@/lib/routes";
export const ActionButton = ({ text = "Get In Touch" }: { text?: string }) => {
  return (
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
        <span className="text-lg text-[#344054] font-semibold">{text}</span>
      </Link>
    </Button>
  );
};
