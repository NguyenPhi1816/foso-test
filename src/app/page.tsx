import BlogPage from "@/components/BlogPage/BlogPage";
import Link from "next/link";

export default async function Home() {
  const categoryResponse = await fetch(`${process.env.API_URL}/api/category`, {
    cache: "no-store",
  });
  const categories = await categoryResponse.json();

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
      <BlogPage categories={categories} />
    </div>
  );
}
