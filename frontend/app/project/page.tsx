import PageTitle from "@/components/page-title/page-title";
import { PageTitleUnderlineType } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { PiNavigationArrowFill } from "react-icons/pi";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <PageTitle title="Đồ án" type={PageTitleUnderlineType.Type2} />
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
      <div className="flex gap-8 md:flex-row flex-col self-start w-full">
        <div className="lg:basis-3/5 flex-1 flex flex-col gap-8">
          <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary">
            Sản phẩm
          </h2>
          <p className="text-lg font-medium">Đang cập nhật</p>
        </div>
        <div className="basis-2/5 px-16 lg:flex hidden">
          <Link href="https://storyset.com/people" target="_blank">
            <Image
              className={`object-contain w-full h-auto`}
              src="/web.png"
              priority
              width={400}
              height={400}
              alt="Project Management"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
