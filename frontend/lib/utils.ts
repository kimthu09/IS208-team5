import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function on(obj: any, ...args: any) {
  obj.addEventListener(...args);
}

export function off(obj: any, ...args: any) {
  obj.removeEventListener(...args);
}
