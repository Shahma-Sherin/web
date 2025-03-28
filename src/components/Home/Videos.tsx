"use client";

import { VideosType, VideoType } from "@/appTypes";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Videos({
  videos,
  isPage = false,
}: {
  videos: VideosType;
  isPage?: boolean;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-start flex-col p-6" id="video">
      <div className="flex justify-between w-full">
        <Link
          href={"/#video"}
          className="p-6 text-2xl font-bold flex justify-center items-center"
        >
          {isPage && <ArrowBackIosIcon />}
          {"Video"}
        </Link>
      </div>
      <div className="grid grid-cols-1 items-center gap-2 w-full md:grid-cols-4">
        {videos.map((item: VideoType, index) => {
          return (
            <div key={index} className="w-full flex justify-center">
              {isClient && (
                <ReactPlayer
                  url={item.url}
                  height={400}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "4px solid #B2A4D4", //
                  }}
                  loop={true}
                  width={300}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        {!isPage ? (
          <Link
            href={"/video"}
            className="p-4 text-xl font-bold flex hover:underline"
          >
            {"View More"}
          </Link>
        ) : (
          <Link
            href={"/"}
            className="p-4 text-xl font-bold flex hover:underline justify-center"
          >
            <ArrowBackIosIcon /> {"Home"}
          </Link>
        )}
      </div>
    </div>
  );
}
