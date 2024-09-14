import DotBackground from "@/components/DotBackground/DotBackground";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <DotBackground>
        <main>
          <Hero />
          <div className="bg-white">
            <div className="bg-grid-small-black/[0.2] h-screen"></div>
          </div>
        </main>

        <footer className="flex h-[50svh] flex-wrap items-center justify-center gap-6"></footer>
      </DotBackground>
    </div>
  );
}
