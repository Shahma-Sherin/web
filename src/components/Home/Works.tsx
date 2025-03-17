"use client";
import Image from "next/image";
import works from "../../../public/data/works.json";
import { lazy } from "react";
import { WorkType } from "@/appTypes";
const ReactPlayer = lazy(() => import("react-player"));

export default function Works() {
  const { sketch, video } = works;

  return (
    <div className="w-full h-screen flex flex-col py-4 ">
      <header className="p-6 text-2xl font-bold flex text-white  bg-[#B2A4D4] flex-col">
        {"Works "}
        {/* <hr className="h-1 w-full bg-[#B2A4D4]" /> */}
      </header>
      <main className="flex items-start flex-col p-6">
        <div className="p-6 text-2xl font-bold flex ">{"Sketch"}</div>
        <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-4">
          {sketch.map((item: WorkType) => {
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
        <div className="p-6 text-2xl font-bold flex ">{"Video"}</div>
        <div className="grid grid-cols-1 items-center gap-2 w-full md:grid-cols-4">
          {video.map((item: WorkType, index) => {
            return (
              <div key={index} className="w-full flex justify-center">
                <ReactPlayer
                  url={item.url}
                  height={400}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "4px solid #B2A4D4", //
                  }}
                  loop={true}
                  width={240}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
