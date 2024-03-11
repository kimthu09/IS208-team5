import Image from "next/image";
import Link from "next/link";

const Introduce = () => {
  return (
    <div className="flex gap-8 md:flex-row flex-col-reverse">
      <div className="flex-1 flex-col">
        <h1 className="font-bold md:text-6xl text-5xl  md:leading-tight leading-tight md:text-left text-center">
          Quản Lý Dự Án Công Nghệ Thông Tin
        </h1>

        <Image
          className={`object-contain w-full h-auto mt-8 mb-12 max-w-[500px]`}
          src="/curve-line.svg"
          priority
          width={100}
          height={100}
          alt="line"
        ></Image>

        <p className="text-lg font-semibold w-full max-w-[500px] md:text-left text-center">
          Môn học tập trung vào việc trình bày và áp dụng các khái niệm cơ bản
          liên quan đến quản lý dự án công nghệ thông tin.
        </p>
        <p className="mt-4 md:text-left text-center font-medium text-lg">
          Giảng viên: Ths. Tạ Việt Phương IS208.O23
        </p>
      </div>
      <div className="flex-1">
        <Link href="https://storyset.com/people" target="_blank">
          <Image
            className={`object-contain w-full h-auto`}
            src="/plan.png"
            priority
            width={400}
            height={300}
            alt="Project Management"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
