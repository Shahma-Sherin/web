import Sketches from "@/components/Home/Sketches";
import works from "../../../public/data/works.json";
export default function Sketch() {
  const { sketch } = works;
  return (
    <>
      <Sketches isPage sketches={sketch} />
    </>
  );
}
