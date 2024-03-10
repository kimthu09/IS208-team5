import { IconType } from "react-icons";
import { SiJirasoftware } from "react-icons/si";
import { TbBrandOnedrive } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
export type SidebarItem = {
  title: string;
  href: string;
};
export type ToolItem = {
  title: string;
  href: string;
  icon: IconType;
};
export const sidebarItems: SidebarItem[] = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Hợp đồng",
    href: "/contract",
  },
  {
    title: "Tài liệu",
    href: "/documents",
  },
  {
    title: "Đồ án",
    href: "/project",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

export const toolItems: ToolItem[] = [
  {
    title: "Jira",
    href: "#",
    icon: SiJirasoftware,
  },
  {
    title: "OneDrive",
    href: "#",
    icon: TbBrandOnedrive,
  },
  {
    title: "GitHub",
    href: "#",
    icon: FaGithub,
  },
];
