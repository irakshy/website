"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Card({ title }) {
  return (
    <div className="group/card w-full max-w-xl">
      <div
        className={cn(
          "card backgroundImage relative mx-auto h-96 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[45px] p-4 shadow-xl md:h-[32rem] md:max-w-2xl",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover",
        )}
      >
        <div className="absolute left-0 top-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
        <div className="z-100 flex h-full w-full flex-row items-center">
          <div className="grid h-full grid-rows-2">
            <div className="flex h-full flex-col justify-around">
              <h1 className="text-center text-4xl font-bold">{title}</h1>
            </div>
            <div className="flex h-full flex-col p-2">
              <p className="text-justify text-sm">
                2 min read 2 min read 2 min read 2 min read 2 min read 2 min
                read 2 min read 2 min read 2 min read 2 min read 2 min read 2
                min read 2 min read 2 min read 2 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
