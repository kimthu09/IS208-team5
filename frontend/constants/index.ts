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
  icon: String;
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
    icon: "jira",
  },
  {
    title: "OneDrive",
    href: "#",
    icon: "onedrive",
  },
  {
    title: "GitHub",
    href: "#",
    icon: "github",
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

export type TeamMemberInfo = {
  avaUrl: string;
  avaDes: string;
  name: string;
  studentCode: string;
  githubUrl: string;
  mainJob: string
};

export const teamMemberInfos: TeamMemberInfo[] = [
  {
    avaUrl: "/images/ava/Mai.png",
    avaDes: "NM",
    name: "Nguyễn Lê Ngọc Mai",
    studentCode: "21520339",
    githubUrl: "https://github.com/NLNM-0-0",
    mainJob: "Backend Developer",
  },
  {
    avaUrl: "/images/ava/Thu.png",
    avaDes: "AT",
    name: "Nguyễn Kim Anh Thư",
    studentCode: "21521495",
    githubUrl: "https://github.com/kimthu09",
    mainJob: "Full-stack Developer",
  },
  {
    avaUrl: "/images/ava/Tri.png",
    avaDes: "MT",
    name: "Nguyễn Minh Trí",
    studentCode: "21520495",
    githubUrl: "https://github.com/Karin1412",
    mainJob: "Frontend Developer",
  }
]