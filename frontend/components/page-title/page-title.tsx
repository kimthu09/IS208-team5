import Image from "next/image";
import { PageTitleUnderlineType } from "@/constants";

const PageTitle = (props: { title: string, type: PageTitleUnderlineType }) => {
    const { title, type } = props
    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-primary">{title}</h1>
            <Image src={`/images/underline/underline-${type}.png`} alt="underline" height={20} width={200} className="opacity-90" />
        </div>
    );
}

export default PageTitle