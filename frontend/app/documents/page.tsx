"use client";

import PageTitle from "@/components/page-title/page-title";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageTitleUnderlineType, bienbanItems, phancongItems } from "@/constants";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

const DocumentsPage = () => {
    return (
        <div className="flex flex-col gap-16 items-center">
            <PageTitle title="Tài liệu" type={PageTitleUnderlineType.Type1} />
            <RevealOnScroll className="w-full">
                <div className="flex flex-col gap-8 w-full">

                    <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary self-start">
                        Biên bản
                    </h2>
                    <Accordion type="multiple" className="w-full hidden md:block">
                        {
                            bienbanItems.map((item, index) => {
                                return (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-xl backdrop-blur-sm bg-white/50 px-4 rounded">{item.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="gap-8 md:gap-0 mb-8 mt-4">
                                                <div className="w-full flex flex-col gap-4 flex-1 items-center">
                                                    <Link href={item.pdfPath} target="_blank" className="self-start">
                                                        <div className="flex flex-row gap-2">
                                                            <FaFilePdf className="text-primary h-6 w-6" />
                                                            <p className="text-lg text-primary">{item.title}</p>
                                                        </div>
                                                    </Link>
                                                    <iframe src={item.pdfPath} className="w-full opacity-100 h-[800px]" height={800} />
                                                </div>

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    <div className="flex flex-col gap-4 md:hidden">
                        {
                            bienbanItems.map((item, index) => {
                                return (
                                    <Link key={index} href={item.pdfPath} target="_blank" className="self-start">
                                        <div className="flex flex-row gap-2">
                                            <FaFilePdf className="text-primary h-6 w-6" />
                                            <p className="text-lg underline">{item.title}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </RevealOnScroll>
            <RevealOnScroll className="w-full">
                <div className="flex flex-col gap-8 w-full">
                    <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary self-start">
                        Phân công
                    </h2>
                    <Accordion type="multiple" className="w-full hidden md:block">
                        {
                            phancongItems.map((item, index) => {
                                return (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-xl backdrop-blur-sm bg-white/50 px-4 rounded">{item.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="gap-8 md:gap-0 mb-8 mt-4">
                                                <div className="w-full flex flex-col gap-4 flex-1 items-center">
                                                    <Link href={item.pdfPath} target="_blank" className="self-start">
                                                        <div className="flex flex-row gap-2">
                                                            <FaFilePdf className="text-primary h-6 w-6" />
                                                            <p className="text-lg text-primary">{item.title}</p>
                                                        </div>
                                                    </Link>
                                                    <iframe src={item.pdfPath} className="w-full opacity-100 h-[800px]" height={800} />
                                                </div>

                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    <div className="flex flex-col gap-4 md:hidden">
                        {
                            phancongItems.map((item, index) => {
                                return (
                                    <Link key={index} href={item.pdfPath} target="_blank" className="self-start">
                                        <div className="flex flex-row gap-2">
                                            <FaFilePdf className="text-primary h-6 w-6" />
                                            <p className="text-lg underline">{item.title}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    )
}

export default DocumentsPage;