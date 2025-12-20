import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
export default function PortofolioCard() {
  return (
    <div>
      <Card className="w-[390px]">
        <CardContent>
          <div className="flex justify-center rounded-xl overflow-hidden mb-6">
            <Image
              src={"/images/mock-image-porto.jpg"}
              alt="Mock"
              width={388}
              height={388}
            />
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
            <Badge variant={"outline"}>Shifyan</Badge>
            <Badge variant={"outline"}>Shifyan</Badge>
            <Badge variant={"outline"}>Shifyan</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
