"use client";
import Image from "next/image";
import { SketchesType, SketchType } from "@/appTypes";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ImageModal from "../ImageModal";
import { useState } from "react";

export default function Sketches({
  sketches,
  isPage = false,
}: {
  sketches: SketchesType;
  isPage?: boolean;
}) {
  const [modal, setModal] = useState({ open: false, url: "", name: "" });
  return (
    <div className="flex items-start flex-col p-6" id="sketch">
      <div className="flex justify-between w-full">
        <Link
          href={"/#sketch"}
          className="p-6 text-2xl font-bold flex justify-center items-center"
        >
          {isPage && <ArrowBackIosIcon />}
          {"Sketch"}
        </Link>
        {!isPage && (
          <Link
            href={"/sketch"}
            className="p-6 text-xl font-bold flex hover:underline"
          >
            {"View More"}
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-4">
        {sketches.map((item: SketchType, i) => {
          return (
            <div key={i}>
              <Image
                className="h-70 w-full max-w-full rounded-lg object-cover object-center border-2 border-[#B2A4D4]"
                src={item.url}
                width={30}
                height={30}
                alt={item.title}
                onClick={() =>
                  setModal({ open: true, url: item.url, name: item.title })
                }
              />
              <ImageModal
                src={modal.url}
                alt={modal.name}
                isOpen={modal.open}
                onClose={() => setModal({ open: false, url: "", name: "" })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
