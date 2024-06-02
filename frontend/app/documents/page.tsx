"use client";

import DocumentComp from "@/components/document/document-item";
import PageTitle from "@/components/page-title/page-title";
import RevealOnScroll from "@/components/reveal-on-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PageTitleUnderlineType,
  tuan12Items,
  tuan34Items,
  tuan56Items,
  tuan78Items,
  tuan910Items,
} from "@/constants";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

const DocumentsPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center">
      <PageTitle title="Tài liệu" type={PageTitleUnderlineType.Type1} />
      <DocumentComp title="Tuần 1 + 2" items={tuan12Items} />
      <DocumentComp title="Tuần 3 + 4" items={tuan34Items} />
      <DocumentComp title="Tuần 5 + 6 (Sprint 1)" items={tuan56Items} />
      <DocumentComp title="Tuần 7 + 8 (Sprint 2)" items={tuan78Items} />
      <DocumentComp title="Tuần 9 + 10 (Sprint 3)" items={tuan910Items} />
    </div>
  );
};

export default DocumentsPage;
