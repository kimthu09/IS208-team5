import { toolItems } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import RevealOnScroll from "../reveal-on-scroll";

const Tool = () => {
  return (
    <RevealOnScroll>
      <div className="w-full flex-col items-center gap-14">
        <h2 className="text-center text-4xl text-primary">Công cụ sử dụng</h2>
        <div className="flex justify-center pt-16 text-muted-foreground flex-wrap gap-32">
          <Link
            key={toolItems[0].title}
            className="group flex items-center gap-2 transition ease-in-out duration-300 hover:-translate-y-1"
            href={toolItems[0].href}
          >
            <Image src={`/images/tools/${toolItems[0].icon}.svg`} alt="" width={32} height={32} className="h-8 w-fit grayscale group-hover:grayscale-0" />
            <p className={`text-[#2684FF] text-3xl font-semibold grayscale group-hover:grayscale-0`}>{toolItems[0].title}</p>
          </Link>
          <Link
            key={toolItems[1].title}
            className="group flex items-center gap-2 transition ease-in-out duration-300 hover:-translate-y-1"
            href={toolItems[1].href}
          >
            <Image src={`/images/tools/${toolItems[1].icon}.svg`} alt="" width={32} height={32} className="h-8 w-fit grayscale group-hover:grayscale-0" />
            <p className={`text-[#28A8EA] text-3xl font-semibold grayscale group-hover:grayscale-0`}>{toolItems[1].title}</p>
          </Link>
          <Link
            key={toolItems[2].title}
            className="group flex items-center gap-2 transition ease-in-out duration-300 hover:-translate-y-1"
            href={toolItems[2].href}
          >
            <div className="relative w-8 h-8">
              <Image src={`/images/tools/github-gray.svg`} alt="" width={32} height={32} className="absolute left-0 top-0 h-8 w-fit opacity-100 group-hover:opacity-0" />
              <Image src={`/images/tools/github.svg`} alt="" width={32} height={32} className="absolute left-0 top-0 h-8 w-fit opacity-0 group-hover:opacity-100" />
            </div>
            <p className={`text-3xl font-semibold group-hover:text-black`}>{toolItems[2].title}</p>
          </Link>
        </div>
      </div>
    </RevealOnScroll>

  );
};

export default Tool;
