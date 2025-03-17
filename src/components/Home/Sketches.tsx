import Image from "next/image";
import { SketchesType, SketchType } from "@/appTypes";

export default function Sketches({ sketches }: { sketches: SketchesType }) {
  return (
    <div className="flex items-start flex-col p-6">
      <div className="p-6 text-2xl font-bold flex ">{"Sketch"}</div>
      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-4">
        {sketches.map((item: SketchType) => {
          return (
            <div key={item.id}>
              <Image
                className="h-70 w-full max-w-full rounded-lg object-contain object-center border-2 border-[#B2A4D4]"
                src={item.url}
                width={30}
                height={30}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
