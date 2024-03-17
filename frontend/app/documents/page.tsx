"use client";

import PageTitle from "@/components/page-title/page-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageTitleUnderlineType, documentItems } from "@/constants";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

const DocumentsPage = () => {
    return (
        <div className="flex flex-col gap-16 items-center">
            <PageTitle title="Tài liệu" type={PageTitleUnderlineType.Type1} />
            <Accordion type="multiple" className="w-full px-4">
                {
                    documentItems.map((item, index) => {
                        return (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-xl backdrop-blur-sm bg-white/50 px-4 rounded">{item.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex gap-8 lg:gap-0 mb-8 mt-4">
                                        <div className="w-full flex flex-col gap-4 flex-1 items-center">
                                            <Link href={"/files/contract/hop-dong-thanh-lap-nhom.pdf"} target="_blank">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <p className="text-lg text-primary">Biên bản</p>
                                                    <FaFilePdf className="text-primary h-6 w-6" />
                                                </div>
                                            </Link>
                                            <iframe src={item.bienBanPdfPath} className="w-full opacity-0 h-0 lg:opacity-100 lg:h-[800px]" height={800} />
                                        </div>
                                        <div className="w-full flex flex-col gap-4 flex-1 items-center">
                                            <Link href={"/files/contract/hop-dong-thanh-lap-nhom.pdf"} target="_blank">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <p className="text-lg text-primary">Phân công</p>
                                                    <FaFilePdf className="text-primary h-6 w-6" />
                                                </div>
                                            </Link>
                                            <iframe src={item.phanCongPdfPath} className="w-full opacity-0 h-0 lg:opacity-100 lg:h-[800px]" height={800} />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default DocumentsPage;