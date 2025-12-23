import Link from "next/link";
import { PAGE_ROUTES, SOCIAL_ACCOUNTS_ROUTES } from "@/lib/routes";
import { ActionButton } from "./ActionButton";
import { Separator } from "./ui/separator";
import Image from "next/image";

export default function FooterSection() {
  return (
    <div>
      {/* Action Section */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <Link
            href={PAGE_ROUTES.HOME}
            className="text-2xl font-bold whitespace-nowrap"
          >
            Shif &bull; <span className="text-[#667085]">Yannn</span>
          </Link>
        </div>
        <div className="flex justify-center ">
          <h2 className="text-[32px] font-semibold">
            Let{"'"}s Stay Connected
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-[18px] text-[#667085] text-center">
            Interested in discussing ideas, solving problems, or collaborating
            on impactful projects? Feel free to reach out.
          </p>
        </div>
        <div className="flex justify-center">
          <ActionButton text="Contact Me" />
        </div>
        {/* Footer Section */}
        <div>
          <Separator />
          <div className="flex justify-between mt-10">
            <div>
              <p className="text-[18px] text-[#667085]">
                © 2025 Shifyan Almustafid. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href={SOCIAL_ACCOUNTS_ROUTES.GITHUB.link} target="_blank">
                <Image
                  src={"/logos/icon-github.svg"}
                  alt={SOCIAL_ACCOUNTS_ROUTES.GITHUB.alt}
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={SOCIAL_ACCOUNTS_ROUTES.LINKEDIN.link} target="_blank">
                <Image
                  src={"/logos/icon-linkedin.svg"}
                  alt={SOCIAL_ACCOUNTS_ROUTES.LINKEDIN.alt}
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href={SOCIAL_ACCOUNTS_ROUTES.INSTAGRAM.link}
                target="_blank"
              >
                <Image
                  src={"/logos/icon-instagram.svg"}
                  alt={SOCIAL_ACCOUNTS_ROUTES.INSTAGRAM.alt}
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
