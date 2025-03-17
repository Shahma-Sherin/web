// import Image from "next/image";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-between py-4 bg-[url('/asset/banner/decor.png')] bg-no-repeat bg-bottom sm:bg-cover sm:bg-center">
      <header className="p-4 text-2xl font-bold flex flex-col justify-between shadow-[#B2A4D4]">
        {"Portfolio "}
      </header>
      <main className="flex flex-col sm:flex-row justify-around items-center">
        <div className="flex flex-col gap-2">
          <div className="text-3xl sm:text-6xl font-extrabold hover:scale-110 duration-400 ease-in-out uppercase">
            {"Shahma Sherin K"}
          </div>
          <div className="text-2xl text-center tracking-widest font-extrabold hover:scale-110 duration-400 ease-in-out uppercase">
            {"Artist"}
          </div>
        </div>
        <Image
          className="border-4 h-[60%] sm:h-[130%] w-auto border-[#B2A4D4]"
          src="/asset/banner/character.png"
          alt="Next.js logo"
          width={400}
          height={39}
          priority
        />
      </main>
      <footer className="flex bottom-4 right-0 left-0 items-center justify-center">
        <div className="flex gap-1 cursor-pointer bg-[#B2A4D4] text-white rounded-4xl p-1 px-3">
          <Link
            className="text-2xl font-bold hover:underline"
            target="_blank"
            href={"https://www.instagram.com/sha_bnth.az"}
          >
            {"Instagram "}
          </Link>
          <div className="text-2xl font-bold">{" | "} </div>
          <Link
            href={"https://www.youtube.com/@art_of_shahma"}
            target="_blank"
            className="text-2xl font-bold hover:underline"
          >
            {" youtube"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
