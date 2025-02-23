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
                for anything things.
                </p>
            </div>
        <div className="flex gap-1 items-center flex-col sm:flex-row">
          <a
            className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#a0c785] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://up.xn--pda.ink/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            status
          </a>
         
        </div>
      </main>
      
    </div>
  );
}
