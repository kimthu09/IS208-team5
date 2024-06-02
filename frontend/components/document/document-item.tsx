import Link from "next/link";
import RevealOnScroll from "../reveal-on-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaFilePdf } from "react-icons/fa";
import { DocumentItem } from "@/constants";

const DocumentComp = ({
  title,
  items,
}: {
  title: string;
  items: DocumentItem[];
}) => {
  return (
    <RevealOnScroll className="w-full">
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl capitalize text-primary border-l-[6px] pl-2 py-2 border-primary self-start">
          {title}
        </h2>
        <Accordion type="multiple" className="w-full hidden md:block">
          {items.map((item, index) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl backdrop-blur-sm bg-white/50 px-4 rounded">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="gap-8 md:gap-0 mb-8 mt-4">
                    <div className="w-full flex flex-col gap-4 flex-1 items-center">
                      <Link
                        href={item.pdfPath}
                        target="_blank"
                        className="self-start"
                      >
                        <div className="flex flex-row gap-2">
                          <FaFilePdf className="text-primary h-6 w-6" />
                          <p className="text-lg text-primary">{item.title}</p>
                        </div>
                      </Link>
                      <iframe
                        src={item.pdfPath}
                        className="w-full opacity-100 h-[800px]"
                        height={800}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="flex flex-col gap-4 md:hidden">
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.pdfPath}
                target="_blank"
                className="self-start"
              >
                <div className="flex flex-row gap-2">
                  <FaFilePdf className="text-primary h-6 w-6" />
                  <p className="text-lg underline">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default DocumentComp;
