import { off, on } from "@/lib/utils";
import { useEffect, useState } from "react";
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll: any;
  //if it is SSR then check you are now on the client and window object is available
  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {
    prevScroll = window.scrollY;
  }
  const [scrollingUp, setScrollingUp] = useState(false);
  const handleScroll = () => {
    const currScroll = window.scrollY;
    // const isScrolled = prevScroll > currScroll;
    const isScrolled = window.scrollY >= 50;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  };
  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, []);
  return scrollingUp;
};

export default useScrollingUp;
