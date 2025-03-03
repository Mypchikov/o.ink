import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="./logo.svg"
          alt="logo"
          width={180}
          height={38}
          priority
        />
      
      <div className="flex flex-col w-full md:w-fit">
                <p className="text-white/50 text-sm md:text-md">
                    ø.ink created by <b className="text-accent">@murchikov</b>
                </p>
                <p className="text-white/50 text-xs md:text-sm mt-2">
                  for me.
                </p>
            </div>
      </main>
      
    </div>
  );
}
