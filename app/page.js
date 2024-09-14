import Card from "@/components/Card/Card";
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
            <div className="bg-grid-small-black/[0.2]">
              <div className="container mx-auto flex h-full min-h-screen w-full flex-col justify-center py-4">
                <div className="grid w-full grid-cols-1 place-items-center content-center space-x-2 space-y-2 border border-red-500 md:grid-cols-2">
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex h-[50svh] flex-wrap items-center justify-center gap-6"></footer>
      </DotBackground>
    </div>
  );
}
