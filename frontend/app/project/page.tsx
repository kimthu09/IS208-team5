import PageTitle from "@/components/page-title/page-title";
import { PageTitleUnderlineType } from "@/constants";

const ProjectPage = () => {
    return (
        <div className="flex flex-col gap-16 items-center">
            <PageTitle title="Đồ án" type={PageTitleUnderlineType.Type2} />
        </div>
    );
}

export default ProjectPage;