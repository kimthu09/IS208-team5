import Link from "next/link";
import { Card } from "../ui/card"
import Image from "next/image";

const UserCard = (props: { avaUrl: string, avaDes: string, name: string, studentCode: string, githubUrl: string, mainJob: string }) => {
    const { avaUrl, avaDes, name, studentCode, githubUrl, mainJob } = props
    return (
        <Link href={githubUrl} target="_blank">
            <Card className="group backdrop-blur-sm bg-white/10 flex flex-col gap-16 items-center justify-center w-[300px] p-4 transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-white">
                <Image src={avaUrl} alt={avaDes} width={150} height={150} placeholder="empty" className="rounded-full mx-auto flex-shrink-0 bg-white" />
                <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="font-semibold text-center text-lg text-primary">{name}</p>
                    <p className="text-center text-lg text-[#A6A6A6] group-hover:text-black">{studentCode}</p>
                    <p className="text-center text-lg text-[#A6A6A6] group-hover:text-black">{mainJob}</p>
                </div>

            </Card>
        </Link>
    )
}

export default UserCard