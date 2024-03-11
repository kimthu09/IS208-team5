import Member from "../user/member";

const MemberWithTitle = () => {
    return (
        <div className="w-full flex-col items-center">
            <h2 className="text-center text-4xl pb-16 text-primary">Thành viên nhóm</h2>
            <Member />
        </div>
    )
}

export default MemberWithTitle;