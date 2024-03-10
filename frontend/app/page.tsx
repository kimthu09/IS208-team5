import Introduce from "@/components/home/introduce";
import Tool from "@/components/home/tool";

export default function Home() {
  return (
    <div className="flex md:mt-32 mt-20 flex-col gap-32">
      <Introduce />
      <Tool />
    </div>
  );
}
