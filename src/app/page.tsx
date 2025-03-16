import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-between py-4">
      <header className="p-4 text-2xl font-bold flex flex-col justify-between shadow-[#B2A4D4]">
        {"Portfolio "}
      </header>
      <main className="flex flex-col sm:flex-row justify-around items-center">
        <div className="flex flex-col gap-2">
          <p className="text-3xl sm:text-6xl font-extrabold hover:scale-110 duration-400 ease-in-out uppercase">
            {"Shahma Sherin K"}
          </p>
          <p className="text-2xl text-center tracking-widest font-extrabold hover:scale-110 duration-400 ease-in-out uppercase">
            {"Artist"}
          </p>
        </div>
        <Image
          className="border-4 h-[60%] sm:h-[130%] w-auto border-[#B2A4D4]"
          src="./asset/banner/character.png"
          alt="Next.js logo"
          width={400}
          height={38}
          priority
        />
      </main>
      <footer className="flex bottom-4 right-0 left-0 items-center justify-center">
        <div className="flex gap-1 cursor-pointer">
          <p className="text-2xl font-bold hover:underline">{"Instagram "} </p>
          <p className="text-2xl font-bold">{" | "} </p>
          <p className="text-2xl font-bold hover:underline">{" youtube"} </p>
        </div>
      </footer>
    </div>
  );
}
