"use client";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="min-h-screen h-screen py-12 flex flex-col justify-between bg-[url('/asset/banner/decor.png')] bg-no-repeat bg-bottom sm:bg-cover sm:bg-center">
      <div className="flex flex-col sm:flex-row gap-2 justify-around items-center h-full">
        <div className="flex flex-col gap-2">
          <div className="banner-text font-bold uppercase">
            {"Shahma Sherin K"}
          </div>
          <div className="text-center sub-banner-text font-bold uppercase">
            {"Artist"}
          </div>
        </div>
        <Image
          className="border-4 h-[40vh] sm:h-[70vh] w-auto border-[#B2A4D4]"
          src="/asset/banner/character.png"
          alt="Next.js logo"
          width={200}
          height={39}
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-1 cursor-pointer bg-[#B2A4D4] text-white rounded-4xl p-1 px-3">
          <Link
            className="text-2xl font-bold hover:underline flex items-center gap-2"
            target="_blank"
            href={"https://www.instagram.com/sha_bnth.az"}
          >
            <InstagramIcon />
            {"Instagram "}
          </Link>
          <div className="text-2xl font-bold">{" |  "} </div>
          <Link
            href={"https://www.youtube.com/@art_of_shahma"}
            target="_blank"
            className="text-2xl font-bold hover:underline flex items-center gap-2"
          >
            <YouTubeIcon />

            {" Youtube"}
          </Link>
        </div>
      </div>
    </div>
  );
}
