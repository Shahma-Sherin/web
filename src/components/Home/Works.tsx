"use client";
import works from "../../../public/data/works.json";
import Sketch from "./Sketches";
import Videos from "./Videos";

export default function Works() {
  const { sketch, video } = works;

  return (
    <div className="w-full flex flex-col">
      <div className="p-6 text-2xl font-bold flex text-white  bg-[#B2A4D4] flex-col">
        {"Works"}
      </div>
      <Sketch sketches={sketch.filter((e) => e.isListed === true)} />
      <Videos videos={video.filter((e) => e.isListed === true)} />
    </div>
  );
}
