import { title } from "process";
import Image from "next/image";

const PageTitle = (props: { title: string }) => {
    const { title } = props
    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-primary">{title}</h1>
            <Image src="/images/underline/underline-1.png" alt="underline" height={20} width={200} className="opacity-90" />
        </div>
    );
}

export default PageTitle