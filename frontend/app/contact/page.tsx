import PageTitle from "@/components/page-title/page-title";
import Member from "@/components/user/member";
import UserCard from "@/components/user/user-card";
import { PageTitleUnderlineType } from "@/constants";

const ContactPage = () => {
    return (
        <div className="flex flex-col gap-16 items-center">
            <PageTitle title="Liên hệ" type={PageTitleUnderlineType.Type1} />
            <Member />
            <div className="flex flex-col items-center gap-8 w-[60vw] lg:flex-row lg:items-start">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-primary">Bạn có thể tìm thấy chúng tôi ở</h2>
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="text-lg font-medium">Trường Đại học Công nghệ thông tin</p>
                        <p className="text-[#A6A6A6]">Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311458665854!2d106.80023887481951!3d10.8700160892845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1710001939899!5m2!1svi!2s"
                    width="0"
                    height="450"
                    loading="lazy"
                    className="w-[50vw] h-[40vh] lg:w-[30vw]" />
            </div>

        </div>
    );
}

export default ContactPage;