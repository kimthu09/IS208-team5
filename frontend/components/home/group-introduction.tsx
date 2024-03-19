"use client";
import { teamMemberInfos } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import RevealOnScroll from "../reveal-on-scroll";

export const dynamicStyle = [
    "left-0",
    "left-72",
    "w-0",
    "w-72",
    "text-[#A6A6A655]",
    "bg-[#A6A6A655]",
    "bg-[#A6A6A611]"
]

const GroupIntroduction = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimation1, setIsAnimation1] = useState(false);
    const [isAnimation2, setIsAnimation2] = useState(false);

    const changeIndex = (index: number) => {
        console.log(index)
        setCurrentIndex(index);
    };

    useEffect(() => {
        const autoplay = setInterval(() => {
            setIsAnimation1(true);
            setTimeout(() => {
                if (currentIndex === 2) {
                    setCurrentIndex(0);
                } else {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }
            }, 200);
        }, 5000);

        setTimeout(() => {
            setIsAnimation1(false);
            setIsAnimation2(true);
            setTimeout(() => {
                setIsAnimation2(false);
            }, 400);
        }, 200);

        return () => clearInterval(autoplay);
    }, [currentIndex]);

    return (
        <RevealOnScroll>
            <div className="w-full flex-col items-center">
                <div className="flex flex-row items-center mb-16 gap-8">
                    <hr className="h-1 flex-1 bg-primary rounded border-none" />
                    <h2 className="text-center text-4xl text-primary leading-[52px]">Chào các bạn,<br />Chúng mình là nhom5</h2>
                    <hr className="h-1 flex-1 bg-primary rounded border-none" />
                </div>
                <div className="flex flex-col-reverse gap-8 items-center lg:items-start lg:flex-row lg:gap-2">
                    <div className="flex flex-row gap-2 w-fit">
                        <div className="flex flex-col gap-3 items-stretch cursor-pointer" >
                            <div className="relative flex flex-row gap-2 items-center" onClick={() => changeIndex(0)}>
                                <p className={`transition-all duration-300 font-bold flex-1 text-${currentIndex == 0 ? 'primary' : '[#A6A6A655]'} text-${currentIndex == 0 ? 'scale-125' : 'scale-100'}`}>{1}</p>
                                <div className={`transition-all duration-300 w-[2px] h-[88px] bg-[#A6A6A655] opacity-${currentIndex == 0 ? 0 : 100} rounded`} ></div>
                                <div className={`transition-all duration-300 absolute right-0 w-[2px] h-${currentIndex == 0 ? '[88px]' : 0} bg-primary rounded`} ></div>
                            </div>
                            <div className="relative flex flex-row gap-2 items-center cursor-pointer" onClick={() => changeIndex(1)}>
                                <p className={`transition-all duration-300 font-bold flex-1 text-${currentIndex == 1 ? 'primary' : '[#A6A6A655]'} text-${currentIndex == 1 ? 'scale-125' : 'scale-100'}`}>{2}</p>
                                <div className={`transition-all duration-300 w-[2px] h-[88px] bg-[#A6A6A655] opacity-${currentIndex == 1 ? 0 : 100} rounded`} ></div>
                                <div className={`transition-all duration-300 absolute right-0 w-[2px] h-${currentIndex == 1 ? '[88px]' : 0} bg-primary rounded`} ></div>
                            </div>
                            <div className="relative flex flex-row gap-2 items-center cursor-pointer" onClick={() => changeIndex(2)}>
                                <p className={`transition-all duration-300 font-bold flex-1 text-${currentIndex == 2 ? 'primary' : '[#A6A6A655]'} text-${currentIndex == 2 ? 'scale-125' : 'scale-100'}`}>{3}</p>
                                <div className={`transition-all duration-300 w-[2px] h-[88px] bg-[#A6A6A655] opacity-${currentIndex == 2 ? 0 : 100} rounded`} ></div>
                                <div className={`transition-all duration-300 absolute right-0 w-[2px] h-${currentIndex == 2 ? '[88px]' : 0} bg-primary rounded`} ></div>
                            </div>
                        </div>
                        <div className="relative md:w-[600px]">
                            <Image className={`transition-all duration-1000 ${currentIndex == 0 ? "block" : "hidden"}`} src={teamMemberInfos[0].avaUrl} alt={"ava"} width={288} height={288} />
                            <Image className={`transition-all duration-1000 ${currentIndex == 1 ? "block" : "hidden"}`} src={teamMemberInfos[1].avaUrl} alt={"ava"} width={288} height={288} />
                            <Image className={`transition-all duration-1000 ${currentIndex == 2 ? "block" : "hidden"}`} src={teamMemberInfos[2].avaUrl} alt={"ava"} width={288} height={288} />
                            <div className={`w-${isAnimation1 ? 72 : 0} h-72 bg-white absolute top-0 left-${isAnimation2 ? 72 : 0} transition-all duration-100 ease-in-out`} />
                            <div className={`text-xl p-2 bg-[#A6A6A611] block mt-2 w-[288px] md:w-fit md:mt-0 md:absolute  md:left-[272px]  md:top-16 md:inline-block transition-transform ease-in-out 
        ${isAnimation1 ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
                        }`}>
                                <div className="flex flex-row gap-2 items-start text-primary">
                                    <p className="font-bold">{teamMemberInfos[currentIndex].name}</p>
                                    <Link href={teamMemberInfos[currentIndex].githubUrl} target="_blank">
                                        <FaGithub className="mt-1" />
                                    </Link>
                                </div>

                                <p className="text-[#A6A6A6]">{teamMemberInfos[currentIndex].studentCode}</p>
                                <p className="text-[#A6A6A6]">{teamMemberInfos[currentIndex].mainJob}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-xl">
                        <p className="mb-4">Nhóm chúng mình gồm có 3 thành viên đều đến từ khoa CNPM.</p>
                        <p>
                            Với tinh thần hợp tác và sự nhiệt huyết đầy cháy bỏng, chúng mình tin rằng mỗi thử thách sẽ trở thành cơ hội để chúng mình mạnh mẽ hơn. Bằng cách làm việc cùng nhau và chia sẻ kiến thức, chúng mình cam kết sẽ hỗ trợ lẫn nhau và cùng nhau phát triển bản thân cũng như hoàn thành môn học một cách xuất sắc.
                        </p>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
    )
}

export default GroupIntroduction;