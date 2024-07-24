"use client";

import PageTitle from "@/components/page-title/page-title";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { PageTitleUnderlineType } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { PiNavigationArrowFill } from "react-icons/pi";
import ImageComponent from "@/components/image-component";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <PageTitle title="Đồ án" type={PageTitleUnderlineType.Type2} />
      <RevealOnScroll>
        <div className="flex gap-8 md:flex-row flex-col self-start">
          <div className="basis-2/5 px-16 lg:block hidden">
            <Link href="https://storyset.com/people" target="_blank">
              <ImageComponent
                className={`object-contain w-full h-auto`}
                src="/company.png"
                priority
                width={400}
                height={400}
                alt="Company"
              ></ImageComponent>
            </Link>
          </div>
          <div className="lg:basis-3/5 flex-1 flex flex-col gap-8">
            <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary">
              Đề tài
            </h2>
            <p className="text-lg font-medium">
              Giải pháp phần mềm mục đích cung cấp một nền tảng truy cập thông
              tin nội bộ, quản lý biểu mẫu và tài liệu, cũng như số hóa quy
              trình xử lý công việc hành chính nội bộ của công ty. Bao gồm các
              chức năng:
            </p>
            <div className="flex flex-row gap-5">
              <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
              <p className="flex-1">
                Bảng tin nội bộ, thông báo nội bộ, các vấn đề truyền thông nội
                bộ.
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
              <p className="flex-1">Thư viện tài liệu.</p>
            </div>
            <div className="flex flex-row gap-5">
              <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
              <p className="flex-1">Xử lý yêu cầu liên đơn vị.</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex gap-8 flex-col w-full">
          <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary">
            Sản phẩm
          </h2>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Giới thiệu
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex gap-4 lg:basis-1/4 flex-col self-start w-full">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Source code:{" "}
                  <Link
                    href="https://github.com/kimthu09/company-internal-web"
                    target="_blank"
                    className="text-primary underline underline-offset-2"
                  >
                    github
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Backend API:{" "}
                  <Link
                    href="https://ciw-be.onrender.com/swagger-ui/index.html"
                    target="_blank"
                    className="text-primary underline underline-offset-2"
                  >
                    swagger
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Frontend:{" "}
                  <Link
                    href="https://company-internal-web.vercel.app/"
                    target="_blank"
                    className="text-primary underline underline-offset-2"
                  >
                    companion
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  <span className="font-bold text-primary">Note: </span>
                  Để chạy được ở local xin hãy đọc{" "}
                  <Link
                    href="https://github.com/kimthu09/company-internal-web?tab=readme-ov-file#h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-c%C3%A0i-%C4%91%E1%BA%B7t-v%C3%A0-ch%E1%BA%A1y-%E1%BB%A9ng-d%E1%BB%A5ng-%E1%BB%9F-local"
                    target="_blank"
                    className="text-primary underline underline-offset-2  "
                  >
                    hướng dẫn sau
                  </Link>
                </p>
              </div>
            </div>
            <div className="basis-3/4 px-16 lg:flex hidden">
              <ImageComponent
                className={`object-cover w-full h-auto`}
                src="/images/project/home.png"
                priority
                width={1918}
                height={911}
                alt="Home page"
              ></ImageComponent>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Các tính năng chính
          </h3>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-authentication`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                {"Authentication"}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/login.png"
                    priority
                    width={1418}
                    height={903}
                    alt="login"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Đăng nhập
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/reset-password.png"
                    priority
                    width={1418}
                    height={903}
                    alt="reset-password"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Quên mật khẩu
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-post`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                {"Bảng tin"}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-2/3 h-auto self-center`}
                    src="/images/project/final/post-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc bảng tin
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/post-detail.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-detail"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xem chi tiết bảng tin
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/post-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo bảng tin mới
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/post-update.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-update"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa bảng tin
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/post-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa bảng tin
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/post-birthday.png"
                    priority
                    width={1418}
                    height={903}
                    alt="post-birthday"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tự động đăng bài chúc mừng sinh nhật theo tháng
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-staff`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Nhân viên
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/staff-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="staff-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc nhân viên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/staff-detail.png"
                    priority
                    width={1418}
                    height={903}
                    alt="staff-detail"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xem chi tiết nhân viên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/staff-detail.png"
                    priority
                    width={1418}
                    height={903}
                    alt="staff-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo nhân viên mới
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/staff-edit.png"
                    priority
                    width={1418}
                    height={903}
                    alt="staff-edit"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa nhân viên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/staff-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="staff-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa nhân viên
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-unit`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Phòng ban
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/unit-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="unit-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc phòng ban
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/unit-detail.png"
                    priority
                    width={1418}
                    height={903}
                    alt="unit-detail"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xem chi tiết phòng ban
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/unit-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="unit-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo phòng ban mới
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/unit-update.png"
                    priority
                    width={1418}
                    height={903}
                    alt="unit-update"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa phòng ban
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/unit-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="unit-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa phòng ban
                  </p>
                  <p className="text-base">
                    <span className="text-primary"> Note: </span>
                    Phân quyền sẽ được cài đặt ở phòng ban. Các nhân viên thuộc
                    phòng ban đều có các quyền mà phòng ban có.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-meeting-room`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Phòng họp
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc phòng họp
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo phòng họp mới
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-edit.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-edit"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa phòng họp
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa phòng họp
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value={`item-meeting-room-calendar`}
              className="mb-2"
            >
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Lịch phòng họp
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-calendar-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc lịch phòng họp
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-book.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-calendar-book"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Đặt lịch phòng họp (Có gửi thông báo và email)
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="meeting-room-calendar-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa lịch phòng họp (Có gửi thông báo và email)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-resource`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Tài nguyên
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/resource-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc tài nguyên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/resource-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo tài nguyên mới
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/resource-edit.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-edit"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa tài nguyên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/resource-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa tài nguyên
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-resource-calendar`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Lịch tài nguyên
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-calendar-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc lịch tài nguyên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-book.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-calendar-book"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Đặt lịch tài nguyên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/meeting-room-calendar-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="resource-calendar-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa lịch tài nguyên
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-noti`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Thông báo
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/noti-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="noti-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc thông báo
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/noti-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="noti-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo thông báo (Có gửi thông báo và email)
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/noti-mark.png"
                    priority
                    width={1418}
                    height={903}
                    alt="noti-mark"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Đánh dấu đã đọc thông báo
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-profile`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Cá nhân
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/profile-password.png"
                    priority
                    width={1418}
                    height={903}
                    alt="profile-password"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Đổi mật khẩu
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/profile-detail.png"
                    priority
                    width={1418}
                    height={903}
                    alt="profile-detail"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xem thông tin cá nhân
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/profile-update.png"
                    priority
                    width={1418}
                    height={903}
                    alt="profile-update"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Chỉnh sửa thông tin cơ bản
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={`item-request-for-leave`} className="mb-2">
              <AccordionTrigger className="text-base backdrop-blur-sm bg-white/50 px-4 py-2 rounded">
                Xin nghỉ phép
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 mt-4">
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-personal.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-personal"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xem xin nghỉ phép của mình
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-create.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-create"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Tạo đơn xin nghỉ phép
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-delete.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-delete"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Xóa đơn xin nghỉ phép (Có gửi thông báo và email)
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-filter.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-filter"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Lọc đơn xin nghỉ phép nhân viên
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-approve.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-approve"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Duyệt đơn xin nghỉ phép (Có gửi thông báo và email)
                  </p>
                  <ImageComponent
                    className={`object-contain md:w-3/4 h-auto self-center`}
                    src="/images/project/final/leave-reject.png"
                    priority
                    width={1418}
                    height={903}
                    alt="leave-reject"
                  ></ImageComponent>
                  <p className="flex-1 self-center text-base italic mb-4">
                    Từ chối đơn xin nghỉ phép (Có gửi thông báo và email)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Lịch sử các đợt cập nhật
          </h3>
          <div className="flex flex-row gap-5">
            <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
            <p className="flex-1">
              <Link
                href="/project/5-5-2024"
                target="_blank"
                className="underline underline-offset-2"
              >
                05/05/2024
              </Link>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default ProjectPage;
