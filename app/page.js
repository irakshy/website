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

          <div className="bg-white bg-grid-small-black/[0.2]">
            <div className="mx-auto flex h-full min-h-screen w-full flex-col justify-center p-2 py-4 md:container lg:p-0">
              <div className="grid w-full grid-cols-1 place-items-center content-center gap-4 lg:grid-cols-2">
                <Card title=" GEN AI Engineer" />
                <Card title=" COMFY UI" />
              </div>
            </div>
          </div>
        </main>

        <footer className="flex h-[50svh] flex-wrap items-center justify-center gap-6"></footer>
      </DotBackground>
    </div>
  );
}
