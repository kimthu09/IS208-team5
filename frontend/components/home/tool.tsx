import { toolItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Tool = () => {
  return (
    <div className="w-full flex-col items-center gap-14">
      <h2 className="text-center text-4xl">Công cụ sử dụng</h2>
      <div className="flex justify-around pt-16 text-muted-foreground">
        {toolItems.map((item) => (
          <Link
            key={item.title}
            className="flex items-center gap-2"
            href={item.href}
          >
            <item.icon className="w-8 h-8 inline-block" />
            <p className="text-3xl font-semibold">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tool;
