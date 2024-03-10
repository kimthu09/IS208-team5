"use client";

import PageTitle from "@/components/page-title/page-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageTitleUnderlineType, documentItems } from "@/constants";

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
                                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 mb-8">
                                        <iframe className="flex-1 h-[500px]" src={item.bienBanPdfPath} />
                                        <iframe className="flex-1 h-[500px]" src={item.phanCongPdfPath} />
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