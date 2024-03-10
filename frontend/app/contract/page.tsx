import PageTitle from "@/components/page-title/page-title";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageTitleUnderlineType } from "@/constants";

const Paraph = (props: { title: string, content: string[], other: any }) => {
    const { title, content, other } = props;
    return (
        <div className="self-stretch flex flex-col gap-4">
            <h2 className="text-primary text-lg">
                {title}
            </h2>
            {
                content.length == 1 ? <p className="ml-4">{content[0]}</p> : <ul>
                    {content.map((item, index) => (
                        <li className="list-item list-disc ml-8 text-primary" key={index}><p className="text-black">{item}</p></li>
                    ))}
                </ul>
            }
            {other}
        </div>
    )
}

const ContractPage = () => (
    <div className="flex flex-col gap-16 items-center h-fit">
        <PageTitle title="Hợp đồng" type={PageTitleUnderlineType.Type3} />
        <iframe src="/files/contract/hop-dong-thanh-lap-nhom.pdf" className="w-full h-[500px]" />
        <div className="flex flex-col gap-8">
            <Paraph
                title={"1. Các nguyên tắc làm việc nhóm"}
                content={[
                    "Họp nhóm đúng giờ. Nếu có việc đột xuất cần báo trước giờ họp. Mỗi người có tối đa 10 phút để tham gia vào cuộc họp. Nếu sau khoảng thời gian ấy vẫn không có mặt, nhóm vẫn sẽ bắt đầu họp. Vắng họp cần lý do chính đáng.",
                    "Hoàn thành deadline đúng hạn. Nếu có sự cố nào đó thì phải báo. Thời gian tăng thêm sẽ tùy vào tiến độ hoàn thành công việc hiện tại của nhóm cũng như độ nghiêm trọng của vấn đề.",
                    "Tự do chia sẻ ý kiến, quan điểm của cá nhân. Khuyến khích phát biểu những điểm chưa hài lòng về nhóm để nhóm cùng nhau sửa đổi.",
                    "Nếu có ý kiến trái chiều sẽ biểu quyết bằng bỏ phiếu."
                ]}
                other={null} />
            <Paraph
                title={"2. Kế hoạch giao tiếp nhóm"}
                content={[
                    "Liên lạc thông qua Messenger.",
                ]}
                other={null} />
            <Paraph
                title={"3. Kế hoạch họp nhóm"}
                content={[
                    "Lịch họp cố định đánh giá tiến độ làm việc của nhóm: Online trên Google Meet 21h thứ 7 hàng tuần.",
                    "Ngoài ra sẽ có các buổi họp khác, sẽ được thông báo trên Messenger trước thời gian và địa điểm tối thiểu là 2 ngày."
                ]}
                other={null} />
            <div className="self-stretch flex flex-col gap-4">
                <h2 className="text-primary text-lg">
                    4. Quy tắc thưởng và phạt
                </h2>
                <h3 className="text-primary text-lg ml-8">
                    4.1 Các quy tắc thưởng
                </h3>
                <ul>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Giúp đỡ thành viên khác hoàn thành công việc thì sẽ được cộng 1 điểm.</p></li>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Góp ý, đưa ý kiến tốt thì sẽ được cộng 1 điểm.</p></li>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Thành viên có số điểm cộng cao nhất trong tuần sẽ nhận quỹ thưởng đồ ăn từ
                        nhóm trưởng (nếu quỹ còn).</p></li>
                </ul>
                <h3 className="text-primary text-lg ml-8">
                    4.2 Các quy tắc phạt
                </h3>
                <ul>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Trễ họp quá 20 phút thì sẽ đóng 10,000 VND vào quỹ và bị trừ 1 điểm trừ.</p></li>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Công việc được giao hoàn thành không đúng hạn hoặc là làm không nghiêm
                        túc thì sẽ bị phạt 5 điểm trừ.</p></li>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Nghỉ họp không báo trước thì sẽ đóng 20,000 VND vào quỹ và bị trừ 2 điểm.</p></li>
                    <li className="list-item list-disc ml-16 text-primary"><p className="text-black">Nếu điểm trừ vượt quá 20 điểm sẽ bị đuổi khỏi nhóm.</p></li>
                </ul>
            </div>
            <Paraph
                title={"5. Tiêu chí đánh giá thành viên"}
                content={[
                    "Ở buổi học cuối, các thành viên sẽ đánh giá lẫn nhau dựa trên thang điểm từ 0 – 10 kèm theo lý do vì sao đánh giá như vậy.",
                    "Các mức đánh giá"
                ]}
                other={<Table>
                    <TableHeader>
                        <TableRow className="bg-primary text-white border-none">
                            <TableHead className="text-center font-bold"></TableHead>
                            <TableHead className="text-center font-bold">9-10</TableHead>
                            <TableHead className="text-center font-bold">7-8</TableHead>
                            <TableHead className="text-center font-bold">5-6</TableHead>
                            <TableHead className="text-center font-bold">&lt;5 </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-none">
                            <TableCell className="bg-primary text-white font-bold">Tinh thần trách nhiệm</TableCell>
                            <TableCell className="border-b border-r">Hoàn thành tốt, nhanh chóng công việc được giao và công việc có hiệu quả cao</TableCell>
                            <TableCell className="border-b border-r">Hoàn thành tốt, nhanh chóng công việc được giao</TableCell>
                            <TableCell className="border-b border-r">Hoàn thành nhưng thời gian muộn</TableCell>
                            <TableCell className="border-b border-r">Không hoàn thành công việc</TableCell>
                        </TableRow>
                        <TableRow className="border-none">
                            <TableCell className="bg-primary text-white font-bold">Tinh thần hợp tác</TableCell>
                            <TableCell className="border-b border-r">Hòa đồng, thân thiện, giúp đỡ thành viên khác</TableCell>
                            <TableCell className="border-b border-r">Tôn trọng các thành viên khác nhưng cách làm việc còn khá riêng lẻ</TableCell>
                            <TableCell className="border-b border-r">Làm việc riêng lẻ, độc lập với nhóm</TableCell>
                            <TableCell className="border-b border-r">Không tôn trọng thành viên trong nhóm gây mất đoàn kết</TableCell>
                        </TableRow>
                        <TableRow className="border-none">
                            <TableCell className="bg-primary text-white font-bold">Chuyên cần</TableCell>
                            <TableCell className="border-b border-r">Tham gia các hoạt động của nhóm đầy đủ, tích cực, đúng thời gian</TableCell>
                            <TableCell className="border-b border-r">Tham gia đủ các buổi họp nhóm, một số buổi còn đến trễ</TableCell>
                            <TableCell className="border-b border-r">Vắng 1-2 buổi và còn đi trễ</TableCell>
                            <TableCell className="border-b border-r">Không tham gia hoạt động của nhóm trên 2 buổi</TableCell>
                        </TableRow>
                        <TableRow className="border-none">
                            <TableCell className="bg-primary text-white font-bold">Đóng góp ý kiến</TableCell>
                            <TableCell className="border-b border-r">Có nhiều ý tưởng sáng tạo, tích cực, mang tính đột phá</TableCell>
                            <TableCell className="border-b border-r">Đóng góp nhiều ý tưởng, nhưng tính đột phá không cao</TableCell>
                            <TableCell className="border-b border-r">Ít khi đóng góp khi cần tham khảo ý kiến</TableCell>
                            <TableCell className="border-b border-r">Không tham gia bàn luận vấn đề nào trong nhóm</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>} />
        </div>


    </div>
)

export default ContractPage;