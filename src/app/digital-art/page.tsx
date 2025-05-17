
import DigitalArts from "@/components/Home/DigitalArts";
import digitalArts from "../../../public/data/digitalArt.json";

export default function Sketch() {
  // const { sketch } = works;
  return (
    <>
      <DigitalArts isPage digitalArt={digitalArts} />
    </>
  );
}
