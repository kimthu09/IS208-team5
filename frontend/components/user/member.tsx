import UserCard from "./user-card";

const Member = () => {
    return (
        <div className="flex flex-wrap gap-16 items-center justify-center">
            <UserCard
                avaUrl={"/images/ava/Mai.png"}
                avaDes={"NM"}
                name={"Nguyễn Lê Ngọc Mai"}
                studentCode={"21520339"}
                githubUrl={"https://github.com/NLNM-0-0"}
                mainJob="Backend Developer"
            />
            <UserCard
                avaUrl={"/images/ava/Thu.png"}
                avaDes={"AT"}
                name={"Nguyễn Kim Anh Thư"}
                studentCode={"21521495"}
                githubUrl={"https://github.com/kimthu09"}
                mainJob="Full-stack Developer" />
            <UserCard
                avaUrl={"/images/ava/Tri.png"}
                avaDes={"MT"}
                name={"Nguyễn Minh Trí"}
                studentCode={"21520495"}
                githubUrl={"https://github.com/Karin1412"}
                mainJob="Frontend Developer" />
        </div>
    );
}

export default Member;