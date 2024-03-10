"use client";
import { sidebarItems } from "@/constants";
import useScrollingUp from "@/hooks/scroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMobile from "./header-mobile";

const Header = () => {
  const pathname = usePathname();
  const scrolled = useScrollingUp();
  return (
    <div className="relative">
      <div
        className={`z-[50] flex justify-between items-center transition-all fixed w-full px-[8vw] 
            duration-200 ${
              scrolled
                ? "h-14 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.2)] pt-3 pb-2"
                : "h-24 pt-10"
            }`}
      >
        <Link href={"/"}>
          <Image
            className={`object-contain w-auto h-auto origin-left transition duration-200 ${
              scrolled ? "scale-75" : "scale-100"
            }`}
            src="/icon.png"
            priority
            width={100}
            height={100}
            alt="logo"
          ></Image>
        </Link>

        <div className="hidden lg:gap-10 gap-5 md:flex">
          {sidebarItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <div
                className={`group relative inline-block overflow-hidden text-lg font-semibold text-[#A6A6A6] leading-8 whitespace-nowrap ${
                  item.href === pathname ? "text-primary" : ""
                }`}
              >
                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-200 group-hover:w-full"></span>
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <HeaderMobile />
    </div>
  );
};

export default Header;
