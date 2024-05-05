import PageTitle from "@/components/page-title/page-title";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { PageTitleUnderlineType } from "@/constants";
import { CheckCircle, CheckCircleIcon, CheckSquare, CircleCheck, CircleCheckIcon, CircleDashed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PiNavigationArrowFill } from "react-icons/pi";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <PageTitle title="Đồ án" type={PageTitleUnderlineType.Type2} />
      <RevealOnScroll>
        <div className="flex gap-8 md:flex-row flex-col self-start items-center">
          <div className="basis-2/5 px-16 lg:block hidden">
            <Link href="https://storyset.com/people" target="_blank">
              <Image
                className={`object-contain w-full h-auto`}
                src="/company.png"
                priority
                width={400}
                height={400}
                alt="Company"
              ></Image>
            </Link>
          </div>
          <div className="lg:basis-3/5 flex-1 flex flex-col gap-8">
            <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary">
              Đề tài
            </h2>
            <p className="text-lg font-medium">
              Giải pháp phần mềm mục đích cung cấp một nền tảng truy cập thông tin
              nội bộ, quản lý biểu mẫu và tài liệu, cũng như số hóa quy trình xử
              lý công việc hành chính nội bộ của công ty. Bao gồm các chức năng:
            </p>
            <div className="flex flex-row gap-5">
              <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
              <p className="flex-1">
                Bảng tin nội bộ, thông báo nội bộ, các vấn đề truyền thông nội bộ.
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
            Sản phẩm (Cập nhật lần cuối 5/5/2024)
          </h2>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            API Document
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Sử dụng swagger.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  chạy <span className="font-bold">Backend</span> và truy cập <Link href="http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/" target="_blank" className="text-primary underline">swagger</Link> để sử dụng.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <Image
                className={`object-cover w-full h-auto`}
                src="/images/project/swagger.png"
                priority
                width={1472}
                height={907}
                alt="Project Management"
              ></Image>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Đăng nhập
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/login.mp4" target="_blank" className="text-primary underline">đăng nhập</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Người dùng sử dụng email và mật khẩu để đăng nhập.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-5">
                  <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                  <p className="flex-1">
                    Tài khoản admin:
                  </p>
                </div>
                <p className="text-sm ml-12"><span className="font-bold">Email: </span>admin@gmail.com</p>
                <p className="text-sm ml-12"><span className="font-bold">Password: </span>123456</p>
              </div>

            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/login.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Quên mật khẩu
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/forget_password.mp4" target="_blank" className="text-primary underline">quên mật khẩu</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Người dùng nhập email và hệ thống sẽ gửi link hướng dẫn đến mail người dùng.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/forget_password.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll >
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Trang chủ
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/home.mp4" target="_blank" className="text-primary underline">trang chủ</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Các bài viết mới nhất, các bài viết học thuật và quan trọng.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Lịch cá nhân. <span className="italic">(đã bỏ ở LAB 4)</span>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Thông báo mới nhất.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll >
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Bài viết
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/post.mp4" target="_blank" className="text-primary underline">bài viết</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc bài viết.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xem chi tiết bài viết.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CircleDashed className="text-yellow-500 h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa bài viết.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo bài viết mới.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa bài viết.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CircleDashed className="text-yellow-500 h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tự động đăng bài chúc mừng sinh nhật theo tháng. <span className="italic">(Yêu cầu LAB4)</span>
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/post.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Nhân viên
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/staff.mp4" target="_blank" className="text-primary underline">nhân viên</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc nhân viên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xem chi tiết nhân viên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa nhân viên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo nhân viên mới.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa nhân viên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Cần chỉnh sửa lại 1 số thuộc tính phù hợp yêu cầu LAB4
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/staff.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Phòng ban
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/staff.mp4" target="_blank" className="text-primary underline">phòng ban</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc phòng ban.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xem chi tiết phòng ban.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa thông tin cơ bản phòng ban.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa lịch làm việc phòng ban. <span className="italic">(đã bỏ ở LAB 4)</span>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo phòng ban mới.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa phòng ban.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/staff.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Phòng họp
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/meeting_room.mp4" target="_blank" className="text-primary underline">phòng họp</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc phòng họp.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa phòng họp.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo phòng họp mới.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa phòng họp.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/meeting_room.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Tài nguyên
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/resource.mp4" target="_blank" className="text-primary underline">tài nguyên</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc tài nguyên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa tài nguyên.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo tài nguyên mới.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa tài nguyên.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/resource.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Lịch phòng họp
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/meeting_calendar.mp4" target="_blank" className="text-primary underline">lịch phòng họp</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc lịch phòng họp.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Đặt lịch phòng họp. <span className="italic">(Có gửi thông báo và email)</span>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xóa lịch phòng họp. <span className="italic">(Có gửi thông báo và email)</span>
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/meeting_calendar.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Lịch tài nguyên
          </h3>
          <p>Tương tự lịch phòng họp</p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Thông báo
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/noti.mp4" target="_blank" className="text-primary underline">thông báo</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Lọc thông báo.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Tạo thông báo. <span className="italic">(Có gửi thông báo và email)</span>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Đánh dấu đã đọc thông báo.
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/noti.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Cá nhân
          </h3>
          <div className="flex gap-4 md:flex-row flex-col self-start w-full">
            <div className="flex flex-col gap-4 lg:basis-1/3 flex-1">
              <div className="flex flex-row gap-5">
                <PiNavigationArrowFill className="text-primary h-6 w-6 inline-block rotate-[135deg]" />
                <p className="flex-1">
                  Link video: <Link href="/video/profile.mp4" target="_blank" className="text-primary underline">cá nhân</Link>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CheckCircleIcon className="text-primary h-6 w-6 inline-block" />
                <p className="flex-1">
                  Đổi mật khẩu.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CircleDashed className="text-yellow-500 h-6 w-6 inline-block" />
                <p className="flex-1">
                  Xem thông tin cá nhân. <span className="italic">(Yêu cầu LAB 4)</span>
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <CircleDashed className="text-yellow-500 h-6 w-6 inline-block" />
                <p className="flex-1">
                  Chỉnh sửa thông tin cơ bản. <span className="italic">(Yêu cầu LAB 4)</span>
                </p>
              </div>
            </div>
            <div className="basis-2/3 px-16 lg:flex hidden">
              <video width="1472" height="907" controls preload="none">
                <source src="/video/profile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="w-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold capitalize text-primary border-b-[2px] border-primary w-fit">
            Responsive
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-2 basis-3/4">
              <h4 className="text-primary text-xl text-center font-bold">Window</h4>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/login.png"
                priority
                width={1418}
                height={903}
                alt="login"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/home.png"
                priority
                width={1418}
                height={903}
                alt="home"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/post.png"
                priority
                width={1418}
                height={903}
                alt="post"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/post_detail.png"
                priority
                width={1418}
                height={903}
                alt="post_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/post_create.png"
                priority
                width={1418}
                height={903}
                alt="post_create"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/staff.png"
                priority
                width={1418}
                height={903}
                alt="staff"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/staff_detail.png"
                priority
                width={1418}
                height={903}
                alt="staff_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/staff_create.png"
                priority
                width={1418}
                height={903}
                alt="staff_create"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/unit.png"
                priority
                width={1418}
                height={903}
                alt="unit"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/unit_detail.png"
                priority
                width={1418}
                height={903}
                alt="unit_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/meeting_room.png"
                priority
                width={1418}
                height={903}
                alt="meeting_room"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/meeting_room_book.png"
                priority
                width={1418}
                height={903}
                alt="meeting_room_book"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/meeting_room_calendar.png"
                priority
                width={1418}
                height={903}
                alt="meeting_room_calendar"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/window/noti.png"
                priority
                width={1418}
                height={903}
                alt="noti"
              ></Image>
            </div>
            <div className=" flex flex-col gap-2 basis-1/4">
              <h4 className="text-primary text-xl text-center font-bold">Mobile</h4>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/login.png"
                priority
                width={625}
                height={903}
                alt="login"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/home.png"
                priority
                width={625}
                height={903}
                alt="home"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/post.png"
                priority
                width={625}
                height={903}
                alt="post"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/post_detail.png"
                priority
                width={625}
                height={903}
                alt="post_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/post_create.png"
                priority
                width={625}
                height={903}
                alt="post_create"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/staff.png"
                priority
                width={625}
                height={903}
                alt="staff"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/staff_detail.png"
                priority
                width={625}
                height={903}
                alt="staff_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/staff_create.png"
                priority
                width={625}
                height={903}
                alt="staff_create"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/unit.png"
                priority
                width={625}
                height={903}
                alt="unit"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/unit_detail.png"
                priority
                width={625}
                height={903}
                alt="unit_detail"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/meeting_room.png"
                priority
                width={625}
                height={903}
                alt="meeting_room"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/meeting_room_book.png"
                priority
                width={625}
                height={903}
                alt="meeting_room_book"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/meeting_room_calendar.png"
                priority
                width={625}
                height={903}
                alt="meeting_room_calendar"
              ></Image>
              <Image
                className={`object-contain w-full h-auto`}
                src="/images/project/mobile/noti.png"
                priority
                width={625}
                height={903}
                alt="noti"
              ></Image>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default ProjectPage;
