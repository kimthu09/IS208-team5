import RevealOnScroll from "../reveal-on-scroll";
import Member from "../user/member";

const MemberWithTitle = () => {
    return (
        <RevealOnScroll>
            <div className="w-full flex-col items-center">
                <h2 className="text-center text-4xl pb-16 text-primary">Thành viên nhóm</h2>
                <Member />
            </div>
        </RevealOnScroll>

    )
}

export default MemberWithTitle;