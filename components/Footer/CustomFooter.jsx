import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const CustomFooter = () => {
  return (
    <footer className="border-t-2 border-white bg-black bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      <div className="container flex flex-col items-center justify-between gap-6 py-4 md:flex-row md:py-8">
        <Link
          href={"/contact"}
          className="rounded-2xl border-2 border-white bg-black px-2 py-2 font-extrabold text-white md:px-4"
        >
          GET IN TOUCH
        </Link>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.linkedin.com/in/irakshy/"
            target="_blank"
            className="text-xl text-blue-500 transition-all duration-500 hover:underline md:text-4xl"
          >
            <FaLinkedin />
          </a>
          <Link
            href="https://x.com/irakshy"
            target="_blank"
            className="text-xl text-white transition-all duration-500 hover:underline md:text-4xl"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://huggingface.co/irakshy"
            target="_blank"
            className="transition-all duration-500 hover:underline md:text-4xl"
          >
            <Image
              src={
                "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
              }
              height={24}
              width={24}
              className="md:size-10"
              alt=""
            />
          </Link>
          <Link
            href="https://github.com/irakshy"
            target="_blank"
            className="text-xl text-white transition-all duration-500 hover:underline md:text-4xl"
          >
            <FaGithub />
          </Link>{" "}
          <Link
            href="https://www.instagram.com/irakshy/"
            target="_blank"
            className="text-xl text-pink-500 transition-all duration-500 hover:underline md:text-4xl"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
