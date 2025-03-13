import Blog from "@/components/Blog/Blog";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="blur-bg absolute -left-[24rem] top-70 z-0"></div>
      {/* banner */}
      <div className="py-12 flex items-center justify-center">
        <img src="/Saly-42.png" alt="Calendar" className="px-11 py-10" />
        <div className="w-[80rem]">
          {/* breadcrumb */}
          <div className="flex-1 flex items-center justify-center gap-1">
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
            <Link href="/" className="text-sm font-semibold">
              Blog
            </Link>
          </div>
          {/* end of breadcrumb */}
          <h1 className="mt-18 text-[4rem] text-center">
            Blog <span className="linear-gradient-txt">FOSO</span> – <br /> Cập
            Nhật Tin Tức{" "}
            <span className="custom-underline-txt">
              <span>Mới Nhất</span>
            </span>
          </h1>
          <p className="mt-2 text-lg text-center">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
        <img src="/Saly-25.png" alt="Calendar" className="px-15.5 py-11.5" />
      </div>
      {/* end of banner */}
      {/* start of blogs */}
      <div className="flex gap-8 max-w-[90rem] w-[90rem] mx-auto relative z-1">
        {/* Column left */}
        <div className="flex-1">
          <h2 className="text-(--text-highlight) text-[2.25rem] font-extrabold leading-[4.5rem]">
            Tất cả bài viết
          </h2>
          <div className="blogs-banner flex rounded-4xl">
            <div className="flex-1 flex flex-col gap-8 pt-15 pl-15">
              <p className="text-white text-[2.25rem] font-bold w-[23.5rem] leading-[2.5rem]">
                Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
              </p>
              <Link
                href="/"
                className="flex items-center w-fit px-6 py-2 gap-3 rounded-full border border-white text-white text-sm font-bold"
              >
                Tham Gia Ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-6 mr-6">
              <img src="/blog-banner.png" />
            </div>
          </div>
          <div className="blogs-list">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
        {/* End of Column left */}
        {/* Column right */}
        <div className="w-[25.42%]"></div>
        {/* End of Column right */}
      </div>
      {/* end of blogs */}
    </div>
  );
}
