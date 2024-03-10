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

export enum PageTitleUnderlineType {
  Type1 = 1,
  Type2 = 2,
  Type3 = 3
}

export interface DocumentItem {
  title: string;
  bienBanPdfPath: string;
  phanCongPdfPath: string;
}

export const documentItems: DocumentItem[] = [
  {
    title: "Biên bản cuộc họp và phân công công việc lần 1",
    bienBanPdfPath: "/files/documents/1/bien-ban.pdf",
    phanCongPdfPath: "/files/documents/1/phan-cong.pdf"
  },
  {
    title: "Biên bản cuộc họp và phân công công việc lần 2",
    bienBanPdfPath: "/files/documents/2/bien-ban.pdf",
    phanCongPdfPath: "/files/documents/2/phan-cong.pdf"
  },
  {
    title: "Biên bản cuộc họp và phân công công việc lần 3",
    bienBanPdfPath: "/files/documents/3/bien-ban.pdf",
    phanCongPdfPath: "/files/documents/3/phan-cong.pdf"
  }
] 