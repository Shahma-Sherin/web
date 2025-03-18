import works from "../../../public/data/works.json";
import Videos from "@/components/Home/Videos";

export default function Video() {
  const { video } = works;
  return (
    <>
      <Videos isPage videos={video} />
    </>
  );
}
