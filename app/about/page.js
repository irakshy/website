import React from "react";

const About = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        <div className="container space-y-28 py-16">
          <div className="max-w-4xl space-y-4 pt-16">
            <h1 className="text-7xl font-bold">About me</h1>
            <h6 className="text-3xl font-semibold">
              I specialize in leveraging artificial intelligence technologies to
              craft innovative solutions and drive business growth for my
              clients.
            </h6>
          </div>

          <div className="h-[30rem] w-full rounded-lg bg-gradient-to-tl from-purple-700 to-orange-500"></div>

          <div className="max-w-6xl py-8 text-2xl">
            Our portfolio speaks for itself. With over 70 awards in design and
            digital innovation, we have a proven track record of delivering
            recognition and success for our partners. Our team of experts is
            dedicated to understanding your business needs and creating designs
            that align with your goals. Let us help you elevate your brand and
            stand out in your industry.
          </div>

          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
            <h1 className="text-5xl font-semibold">
              Research & <br /> Brand Strategy
            </h1>
            <ul className="list-disc px-2 text-3xl md:px-0">
              <li>Brand Strategy</li>
              <li>Research & Insights</li>
              <li>Content Marketing</li>
              <li>User Experience Research</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
            <h1 className="text-5xl font-semibold">
              Research & <br /> Brand Strategy
            </h1>
            <ul className="list-disc px-2 text-3xl md:px-0">
              <li>Brand Strategy</li>
              <li>Research & Insights</li>
              <li>Content Marketing</li>
              <li>User Experience Research</li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default About;
