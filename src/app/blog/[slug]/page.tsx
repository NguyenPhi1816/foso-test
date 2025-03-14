import Link from "next/link";
import "./detail.css";
import RightBanners from "@/components/RightBanners/RightBanners";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import Blog, { TBlog } from "@/components/Blog/Blog";
import Rating from "@/components/Rating/Rating";

const Detail = async () => {
  const relatedBlogResponse = await fetch(
    `${process.env.API_URL}/api/related-blog`
  );
  const relatedBlog = await relatedBlogResponse.json();

  return (
    <div className="max-w-[90rem] w-[90rem] mx-auto">
      {/* breadcrumb */}
      <div className="mb-12 flex-1 flex items-center gap-1">
        <Link href="/" className="text-sm">
          Trang chủ
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12px"
          viewBox="0 -960 960 960"
          width="12px"
          fill="#17181A"
        >
          <path d="m320.62-93.85-56.77-56.77L593.23-480 263.85-809.38l56.77-56.77L706.77-480 320.62-93.85Z" />
        </svg>
        <Link href="/" className="text-sm">
          Tài nguyên
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12px"
          viewBox="0 -960 960 960"
          width="12px"
          fill="#17181A"
        >
          <path d="m320.62-93.85-56.77-56.77L593.23-480 263.85-809.38l56.77-56.77L706.77-480 320.62-93.85Z" />
        </svg>
        <Link href="/" className="text-sm">
          Blog
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12px"
          viewBox="0 -960 960 960"
          width="12px"
          fill="#17181A"
        >
          <path d="m320.62-93.85-56.77-56.77L593.23-480 263.85-809.38l56.77-56.77L706.77-480 320.62-93.85Z" />
        </svg>
        <Link href="/" className="text-sm font-semibold">
          Quản lý sản xuất
        </Link>
      </div>
      {/* end of breadcrumb */}
      {/* content */}
      <div className="flex gap-6">
        {/* left column */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4 w-fit py-1 px-2 rounded-lg bg-[#E2F0FE] text-[#0F4F9E] text-[0.75rem] font-medium">
            Quản lý sản xuất
          </div>
          <h1 className="mb-4 text-(--text-highlight) text-4xl font-extrabold capitalize">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </h1>
          <div className="mb-6 w-full flex items-center">
            <div className="flex-1 flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border border-[#F1F5F7] bg-white">
                <img src="/foso-creator.png" alt="Foso Creator Avatar" />
              </div>
              <div>
                <p className="text-sm text-[#667F93] font-medium">Tác giả</p>
                <p className="text-[#33404A] font-bold">FOSO Creator</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-medium text-[#667F93]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M19.5 3.41H17.25V2.66C17.25 2.46109 17.171 2.27033 17.0303 2.12967C16.8897 1.98902 16.6989 1.91 16.5 1.91C16.3011 1.91 16.1103 1.98902 15.9697 2.12967C15.829 2.27033 15.75 2.46109 15.75 2.66V3.41H8.25V2.66C8.25 2.46109 8.17098 2.27033 8.03033 2.12967C7.88968 1.98902 7.69891 1.91 7.5 1.91C7.30109 1.91 7.11032 1.98902 6.96967 2.12967C6.82902 2.27033 6.75 2.46109 6.75 2.66V3.41H4.5C4.10218 3.41 3.72064 3.56804 3.43934 3.84934C3.15804 4.13065 3 4.51218 3 4.91V19.91C3 20.3078 3.15804 20.6894 3.43934 20.9707C3.72064 21.252 4.10218 21.41 4.5 21.41H19.5C19.8978 21.41 20.2794 21.252 20.5607 20.9707C20.842 20.6894 21 20.3078 21 19.91V4.91C21 4.51218 20.842 4.13065 20.5607 3.84934C20.2794 3.56804 19.8978 3.41 19.5 3.41ZM6.75 4.91V5.66C6.75 5.85892 6.82902 6.04968 6.96967 6.19033C7.11032 6.33099 7.30109 6.41 7.5 6.41C7.69891 6.41 7.88968 6.33099 8.03033 6.19033C8.17098 6.04968 8.25 5.85892 8.25 5.66V4.91H15.75V5.66C15.75 5.85892 15.829 6.04968 15.9697 6.19033C16.1103 6.33099 16.3011 6.41 16.5 6.41C16.6989 6.41 16.8897 6.33099 17.0303 6.19033C17.171 6.04968 17.25 5.85892 17.25 5.66V4.91H19.5V7.91H4.5V4.91H6.75ZM19.5 19.91H4.5V9.41H19.5V19.91Z"
                    fill="#667F93"
                  />
                </svg>
                Cập nhật vào: 17/11/2022
              </div>
              <div className="w-[1px] h-6 bg-[#D9E1E7]"></div>
              <div className="flex items-center gap-2 font-medium text-[#667F93]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 2.66C10.0716 2.66 8.18657 3.23183 6.58319 4.30317C4.97982 5.37452 3.73013 6.89726 2.99218 8.67884C2.25422 10.4604 2.06114 12.4208 2.43735 14.3121C2.81355 16.2034 3.74215 17.9407 5.10571 19.3043C6.46928 20.6679 8.20656 21.5965 10.0979 21.9727C11.9892 22.3489 13.9496 22.1558 15.7312 21.4178C17.5127 20.6799 19.0355 19.4302 20.1068 17.8268C21.1782 16.2234 21.75 14.3384 21.75 12.41C21.7473 9.82498 20.7192 7.34662 18.8913 5.51873C17.0634 3.69084 14.585 2.66273 12 2.66ZM12 20.66C10.3683 20.66 8.77326 20.1761 7.41655 19.2696C6.05984 18.3631 5.00242 17.0746 4.378 15.5671C3.75358 14.0597 3.5902 12.4009 3.90853 10.8005C4.22685 9.20017 5.01259 7.73016 6.16637 6.57637C7.32016 5.42259 8.79017 4.63685 10.3905 4.31853C11.9909 4.0002 13.6497 4.16357 15.1571 4.788C16.6646 5.41242 17.9531 6.46984 18.8596 7.82655C19.7661 9.18325 20.25 10.7783 20.25 12.41C20.2475 14.5973 19.3775 16.6943 17.8309 18.2409C16.2843 19.7875 14.1873 20.6575 12 20.66ZM18 12.41C18 12.6089 17.921 12.7997 17.7803 12.9403C17.6397 13.081 17.4489 13.16 17.25 13.16H12C11.8011 13.16 11.6103 13.081 11.4697 12.9403C11.329 12.7997 11.25 12.6089 11.25 12.41V7.16C11.25 6.96109 11.329 6.77033 11.4697 6.62967C11.6103 6.48902 11.8011 6.41 12 6.41C12.1989 6.41 12.3897 6.48902 12.5303 6.62967C12.671 6.77033 12.75 6.96109 12.75 7.16V11.66H17.25C17.4489 11.66 17.6397 11.739 17.7803 11.8797C17.921 12.0203 18 12.2111 18 12.41Z"
                    fill="#667F93"
                  />
                </svg>
                10 phút đọc
              </div>
            </div>
          </div>
          <div className="blog-content">
            <figure>
              <img src="/blog-image-1.png" />
              <figcaption>Quy trình 5s là gì?</figcaption>
            </figure>
            <div className="my-6 p-3 flex items-start">
              <div className="-mt-14 text-[6rem] text-[#15AA7A] font-(family-name:--font-racing-sans-one)">
                “
              </div>
              <div className="w-[778px] text-xl text-center text-[#33404A] font-medium">
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </div>
            </div>
            <h2 id="heading1">1. Quy trình 5S là gì?</h2>
            <p>
              Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
              xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
              Bản.
            </p>
            <p>
              Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
              dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ
              S đầu trong tiếng Nhật:
            </p>
            <ul>
              <li>
                <span>Seiri</span> <p>(Ngăn nắp)</p>
              </li>
              <li>
                <span>Seiso</span> <p>(Sạch sẽ)</p>
              </li>
              <li>
                <span>Seiton</span> <p>(Trật tự)</p>
              </li>
              <li>
                <span>Shitsuke</span> <p>(Kỷ luật)</p>
              </li>
              <li>
                <span>Seiketsu</span> <p>(Tiêu chuẩn hóa)</p>
              </li>
            </ul>
            <h2 id="heading2">2. Lợi ích quy trình 5S đem lại</h2>
            <p>
              Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
              bước của quy trình với mục đích cải tiến môi trường làm việc của
              doanh nghiệp.
            </p>
            <p>
              Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp
              sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi
              làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt
              theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
            </p>
            <p>
              Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
              quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
              một văn hóa doanh nghiệp tích cực.
            </p>
            <figure>
              <img src="/blog-image-2.png" />
              <figcaption>Tại sao doanh nghiệp cần quy trình 5S?</figcaption>
            </figure>
            <h2 id="heading3">
              3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            </h2>
            <p>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
              trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh
              rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do
              vì sao bạn nên lựa chọn quy trình:
            </p>
            <h3 id="heading3-1">3.1 Cải thiện rõ nét môi trường làm việc</h3>
            <p>
              Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
              gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
              việc hiệu quả cho từng cá nhân trong doanh nghiệp.
            </p>
            <h3 id="heading3-2">3.2 Tiết kiệm thời gian đáng kể</h3>
            <p>
              Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
              thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
              dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
              đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. 
            </p>
            <h3 id="heading3-3">3.3 Tăng năng suất làm việc</h3>
            <p>
              Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
              tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
              và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời
              gian và tăng năng suất làm việc.
            </p>
            <h3 id="heading3-4">3.4 Tiết kiệm chi phí</h3>
            <p>
              Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
              sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
              chi phí vận hành đáng kể cho doanh nghiệp của mình.
            </p>
            <h3 id="headin3-5">3.5 Tăng chất lượng sản phẩm</h3>
            <p>
              5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
              đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất
              không mong muốn.
            </p>
            <figure>
              <img src="/blog-image-3.png" />
              <figcaption>Quy trình 5s gồm các bước</figcaption>
            </figure>
            <h2 id="heading4">4. Quy trình 5S gồm các bước</h2>
            <p>
              5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu
              quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm
              bước cơ bản sau:
            </p>
            <h3 id="heading4-1">4.1 Seiri (Ngăn nắp)</h3>
            <p>
              Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
              nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo
              ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời
              gian.
            </p>
            <h3 id="heading4-2">4.2 Seiton (Sắp xếp)</h3>
            <p>
              Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị,
              tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và
              sử dụng chúng một cách dễ dàng.
            </p>
            <h3 id="heading4-3">4.3 Seiso (Vệ sinh)</h3>
            <p>
              Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
              trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và
              việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm
              bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
            </p>
            <h3 id="heading4-4">4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
            <p>
              Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này
              giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử
              dụng các dụng cụ, thiết bị, tài liệu.
            </p>
            <h3 id="heading4-5">4.5 Shitsuke (Kỷ luật)</h3>
            <p>
              Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
              vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
              trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
              và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và
              tuân thủ theo quy trình.
            </p>
            <figure>
              <img src="/blog-image-4.png" />
              <figcaption>Các bước thực hiện quy trình 5s</figcaption>
            </figure>
            <h2 id="heading5">5. Quy trình được thực hiện như sau:</h2>
            <p>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
              trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh
              rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do
              vì sao bạn nên lựa chọn quy trình:
            </p>
            <h3 id="heading5-1">5.1 Giai đoạn chuẩn bị</h3>
            <p>
              Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
              điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân
              bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả
              hơn.
            </p>
            <h3 id="heading5-2">5.2 Triển khai rộng rãi </h3>
            <p>
              Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
              trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức
              cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
            </p>
            <h3 id="heading5-3">5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
            <p>
              Đây là bước có thể khiến mọi người không hào hứng trong các bước
              của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không
              khí hào hứng cho từng cá nhân.
            </p>
            <h3 id="heading5-4">5.4 Sàng lọc, sắp xếp và đánh giá</h3>
            <p>
              Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
              doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
              thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
              và dễ dàng tìm kiếm sau này.
            </p>
            <h3 id="heading5-5">5.5 Đánh giá</h3>
            <p>
              Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
              trình cải tiến và xem xét cần cải tiến phương diện nào hay không
              trong quá trình thực hiện quy trình 5S.
            </p>
            <h2 id="heading6">6. Quy trình 5S có giống với Kaizen?</h2>
            <p>
              Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
              không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
              chúng có mối quan hệ chặt chẽ với nhau.
            </p>
            <div className="mb-6 border-l-[3px] border-[#15AA7A] pt-3 pr-4 pb-2 pl-9">
              <span className="flex w-[778px] text-xl font-medium italic">
                Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích
                cực, mang tính liên tục và bền vững.
              </span>
            </div>
            <div className="mb-6 border-l-[3px] border-[#15AA7A] pt-3 pr-4 pb-2 pl-9">
              <span className="flex w-[778px] text-xl font-medium italic">
                Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp
                đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
              </span>
            </div>
            <p>
              Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
              tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
              việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu
              tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để
              tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp
              theo. 
            </p>
            <h2 id="heading7">7. Đối tượng nào nên áp dụng 5S?</h2>
            <p>
              Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi
              ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy
              nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ
              quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp
              nhỏ.
            </p>
            <p>
              Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
              tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
              hiệu quả.
            </p>
            <figure>
              <img src="/blog-image-5.png" />
              <figcaption>
                Các yếu tố tạo nên thành công cho quy trình 5S
              </figcaption>
            </figure>
            <h2 id="heading8">
              8. Các yếu tố tạo nên thành công cho quy trình 5S
            </h2>
            <p>
              Và những nhân tố quyết định đến quá trình thành công của quy trình
              nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
            </p>
            <ul>
              <li>
                <p>
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                  Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có
                  áp dụng quy tắc này hay không.
                </p>
              </li>
              <li>
                <p>
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                  thực hiện triển khai 5S. 
                </p>
              </li>
              <li>
                <p>
                  Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần
                  huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi
                  ích chung của tổ chức, của doanh nghiệp.
                </p>
              </li>
            </ul>
            <p>
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng
              là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay
              vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với
              những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được
              doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương
              lai.
            </p>
          </div>
          <Rating />
        </div>
        {/* end of left column */}
        {/* right column */}
        <div className="w-[30.75rem] sticky top-[200px] self-start">
          <h3 className="text-2xl font-extrabold mb-6">Nội dung bài viết</h3>
          <TableOfContents />
          <RightBanners />
        </div>
        {/* end of right column */}
      </div>
      <div>
        <p className="mt-12 mb-6 text-(--text-highlight) text-4xl font-extrabold">
          Bài viết liên quan
        </p>
        <div className="grid grid-cols-3 gap-8">
          {relatedBlog &&
            relatedBlog.map((item: TBlog) => (
              <Blog key={item.name} {...item} />
            ))}
        </div>
      </div>
      {/* end of content */}
    </div>
  );
};

export default Detail;
