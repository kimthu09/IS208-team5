import GroupIntroduction from "@/components/home/group-introduction";
import Introduce from "@/components/home/introduce";
import MemberWithTitle from "@/components/home/member-with-title";
import Tool from "@/components/home/tool";

export default function Home() {
  return (
    <div className="flex md:mt-32 mt-20 flex-col gap-32">
      <Introduce />
      <Tool />
      <GroupIntroduction />
      <MemberWithTitle />
    </div>
  );
}
