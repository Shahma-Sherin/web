"use client";
import works from "../../../public/data/works.json";
import DigitalArts from "./DigitalArts";
import Sketch from "./Sketches";
import Videos from "./Videos";
import digitalArts from "../../../public/data/digitalArt.json";

export default function Works() {
  const [{ sketch, video }] = works;

  return (
    <div className="w-full flex flex-col">
      <div className="p-6 text-2xl font-bold flex text-white  bg-[#B2A4D4] flex-col">
        {"Works"}
      </div>
      <DigitalArts
        digitalArt={digitalArts.filter((e) => e.isListed === true)}
      />
      <Sketch sketches={sketch.filter((e) => e.isListed === true)} />
      <Videos videos={video.filter((e) => e.isListed === true)} />
    </div>
  );
}
