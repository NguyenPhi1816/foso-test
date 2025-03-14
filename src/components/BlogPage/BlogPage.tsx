"use client";
import Blog, { TBlog } from "@/components/Blog/Blog";
import RightBanners from "@/components/RightBanners/RightBanners";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Category = {
  name: string;
  amount: number;
  href: string;
};

type TBlogResponse = {
  data: TBlog[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

interface IBlogPage {
  categories: Category[];
}

const BlogPage: React.FC<IBlogPage> = ({ categories }) => {
  const [blogs, setBlogs] = useState<TBlogResponse>();

  const limit = 6;
  async function getBlog(page: number) {
    const blogResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?page=${page}&limit=${limit}`
    );

    return await blogResponse.json();
  }

  async function handleGetBlogs(page: number) {
    const data = await getBlog(page);
    setBlogs(data);
  }

  useEffect(() => {
    handleGetBlogs(1);
  }, []);

  return (
    <>
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
              <Link href="/" className="outlined-btn w-fit ">
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
            {blogs &&
              blogs.data &&
              blogs.data.map((item: TBlog) => (
                <Blog key={item.name} {...item} />
              ))}
          </div>
        </div>
        {/* End of Column left */}
        {/* Column right */}
        <div className="w-[25.42%]">
          <h3 className="text-2xl font-extrabold mb-6">Tìm Kiếm</h3>
          <div className="mb-8 py-3 pr-2 pl-6 rounded-xl flex items-center gap-2 bg-white shadow-[0px 12px 24px -4px rgba(145, 158, 171, 0.16)]">
            <input
              placeholder="Tìm kiếm bài viết"
              className="font-medium flex-1 focus:outline-0"
            />
            <button className="p-3 rounded-xl flex bg-[#15AA7A] w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.5308 20.8794L16.8368 16.1863C18.1973 14.5529 18.8757 12.4578 18.7309 10.3369C18.5861 8.21608 17.6293 6.23268 16.0593 4.79935C14.4894 3.36602 12.4274 2.59312 10.3021 2.64142C8.17687 2.68972 6.15205 3.5555 4.64888 5.05867C3.14571 6.56184 2.27993 8.58666 2.23163 10.7119C2.18333 12.8372 2.95623 14.8992 4.38956 16.4691C5.82289 18.039 7.80629 18.9959 9.92715 19.1407C12.048 19.2855 14.1431 18.6071 15.7765 17.2466L20.4696 21.9406C20.5393 22.0103 20.622 22.0656 20.713 22.1033C20.8041 22.141 20.9017 22.1604 21.0002 22.1604C21.0988 22.1604 21.1963 22.141 21.2874 22.1033C21.3784 22.0656 21.4612 22.0103 21.5308 21.9406C21.6005 21.8709 21.6558 21.7882 21.6935 21.6972C21.7312 21.6061 21.7506 21.5085 21.7506 21.41C21.7506 21.3115 21.7312 21.2139 21.6935 21.1228C21.6558 21.0318 21.6005 20.9491 21.5308 20.8794ZM3.75021 10.91C3.75021 9.57498 4.14609 8.26994 4.88779 7.1599C5.62949 6.04987 6.6837 5.18471 7.9171 4.67382C9.1505 4.16293 10.5077 4.02925 11.8171 4.2897C13.1264 4.55015 14.3292 5.19303 15.2732 6.13703C16.2172 7.08104 16.8601 8.28377 17.1205 9.59314C17.381 10.9025 17.2473 12.2597 16.7364 13.4931C16.2255 14.7265 15.3603 15.7807 14.2503 16.5224C13.1403 17.2641 11.8352 17.66 10.5002 17.66C8.71061 17.658 6.99488 16.9462 5.72944 15.6808C4.46399 14.4153 3.7522 12.6996 3.75021 10.91Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <h3 className="text-2xl font-extrabold mb-6">Danh Mục</h3>
          <ul className="mb-8 flex flex-col gap-4">
            {!!categories &&
              categories.map((item: Category) => (
                <li className="category-item pb-2" key={item.name}>
                  <Link href={item.href} className="flex items-center gap-2">
                    <span className="flex-1 text-lg text-[#33404A] font-medium">
                      {item.name}
                    </span>
                    <span className="text-lg text-[#667F93] font-medium">
                      {item.amount}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          <RightBanners />
        </div>
        {/* End of Column right */}
      </div>
      {/* end of blogs */}
      {/* start of pagination */}
      {blogs && (
        <div className="mt-[4.5rem] flex items-center max-w-[90rem] w-[90rem] mx-auto">
          <button
            className={`flex items-center gap-2 ${
              blogs.currentPage === 1 ? "next-prev-disabled" : ""
            }`}
            onClick={() => handleGetBlogs(blogs.currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.9996 12.9098C20.9996 13.1088 20.9206 13.2995 20.7799 13.4402C20.6393 13.5808 20.4485 13.6598 20.2496 13.6598H5.55993L11.0302 19.1292C11.0999 19.1989 11.1552 19.2816 11.1929 19.3727C11.2306 19.4637 11.25 19.5613 11.25 19.6598C11.25 19.7584 11.2306 19.856 11.1929 19.947C11.1552 20.0381 11.0999 20.1208 11.0302 20.1905C10.9606 20.2601 10.8778 20.3154 10.7868 20.3531C10.6957 20.3908 10.5982 20.4103 10.4996 20.4103C10.4011 20.4103 10.3035 20.3908 10.2124 20.3531C10.1214 20.3154 10.0387 20.2601 9.96899 20.1905L3.21899 13.4405C3.14926 13.3708 3.09394 13.2881 3.05619 13.197C3.01845 13.106 2.99902 13.0084 2.99902 12.9098C2.99902 12.8113 3.01845 12.7137 3.05619 12.6226C3.09394 12.5316 3.14926 12.4489 3.21899 12.3792L9.96899 5.62922C10.1097 5.48849 10.3006 5.40942 10.4996 5.40942C10.6986 5.40942 10.8895 5.48849 11.0302 5.62922C11.171 5.76995 11.25 5.96082 11.25 6.15984C11.25 6.35886 11.171 6.54974 11.0302 6.69047L5.55993 12.1598H20.2496C20.4485 12.1598 20.6393 12.2389 20.7799 12.3795C20.9206 12.5202 20.9996 12.7109 20.9996 12.9098Z"
                fill="#4D5F6E"
              />
            </svg>
            Trang truớc
          </button>
          <div className="flex-1 flex justify-center items-center">
            {blogs.totalPages > 6 ? (
              <>
                <button
                  className={`pagination-btn ${
                    blogs.currentPage === 1 ? "active" : ""
                  }`}
                  onClick={() => handleGetBlogs(1)}
                >
                  1
                </button>

                {(blogs.currentPage <= 3 ||
                  blogs.currentPage >= blogs.totalPages - 2) && (
                  <button
                    className={`pagination-btn ${
                      blogs.currentPage === 2 ? "active" : ""
                    }`}
                    onClick={() => handleGetBlogs(2)}
                  >
                    2
                  </button>
                )}

                {(blogs.currentPage <= 3 ||
                  blogs.currentPage >= blogs.totalPages - 2) && (
                  <button
                    className={`pagination-btn ${
                      blogs.currentPage === 3 ? "active" : ""
                    }`}
                    onClick={() => handleGetBlogs(3)}
                  >
                    3
                  </button>
                )}

                {/* Hiển thị "..." nếu currentPage > 3 */}
                {blogs.currentPage > 3 && <span className="px-2">...</span>}

                {/* Hiển thị 2 trang trước và 2 trang sau currentPage */}
                {blogs.currentPage > 3 &&
                  blogs.currentPage < blogs.totalPages - 2 &&
                  Array.from(
                    { length: 5 },
                    (_, index) => blogs.currentPage - 2 + index
                  )
                    .filter((page) => page > 1 && page < blogs.totalPages) // Chỉ lấy trang hợp lệ
                    .map((page) => (
                      <button
                        key={page}
                        className={`pagination-btn ${
                          blogs.currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handleGetBlogs(page)}
                      >
                        {page}
                      </button>
                    ))}

                {/* Hiển thị "..." nếu currentPage < totalPages - 2 */}
                {blogs.currentPage < blogs.totalPages - 2 && (
                  <span className="px-2">...</span>
                )}

                {(blogs.currentPage <= 3 ||
                  blogs.currentPage >= blogs.totalPages - 2) && (
                  <button
                    className={`pagination-btn ${
                      blogs.currentPage === blogs.totalPages - 2 ? "active" : ""
                    }`}
                    onClick={() => handleGetBlogs(blogs.totalPages)}
                  >
                    {blogs.totalPages - 2}
                  </button>
                )}

                {(blogs.currentPage <= 3 ||
                  blogs.currentPage >= blogs.totalPages - 2) && (
                  <button
                    className={`pagination-btn ${
                      blogs.currentPage === blogs.totalPages - 1 ? "active" : ""
                    }`}
                    onClick={() => handleGetBlogs(blogs.totalPages)}
                  >
                    {blogs.totalPages - 1}
                  </button>
                )}

                <button
                  className={`pagination-btn ${
                    blogs.currentPage === blogs.totalPages ? "active" : ""
                  }`}
                  onClick={() => handleGetBlogs(blogs.totalPages)}
                >
                  {blogs.totalPages}
                </button>
              </>
            ) : (
              // if total pages = 6 => show all
              Array.from({ length: blogs.totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-btn ${
                    blogs.currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handleGetBlogs(index + 1)}
                >
                  {index + 1}
                </button>
              ))
            )}
          </div>
          <button
            className={`flex items-center gap-2 ${
              blogs.currentPage === blogs.totalPages ? "next-prev-disabled" : ""
            }`}
            onClick={() => handleGetBlogs(blogs.currentPage + 1)}
          >
            Trang kế tiếp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.7806 13.4405L14.0306 20.1905C13.8899 20.3312 13.699 20.4103 13.5 20.4103C13.301 20.4103 13.1101 20.3312 12.9694 20.1905C12.8286 20.0497 12.7496 19.8589 12.7496 19.6598C12.7496 19.4608 12.8286 19.2699 12.9694 19.1292L18.4397 13.6598H3.75C3.55109 13.6598 3.36032 13.5808 3.21967 13.4402C3.07902 13.2995 3 13.1088 3 12.9098C3 12.7109 3.07902 12.5202 3.21967 12.3795C3.36032 12.2389 3.55109 12.1598 3.75 12.1598H18.4397L12.9694 6.69047C12.8286 6.54974 12.7496 6.35886 12.7496 6.15984C12.7496 5.96082 12.8286 5.76995 12.9694 5.62922C13.1101 5.48849 13.301 5.40942 13.5 5.40942C13.699 5.40942 13.8899 5.48849 14.0306 5.62922L20.7806 12.3792C20.8504 12.4489 20.9057 12.5316 20.9434 12.6226C20.9812 12.7137 21.0006 12.8113 21.0006 12.9098C21.0006 13.0084 20.9812 13.106 20.9434 13.197C20.9057 13.2881 20.8504 13.3708 20.7806 13.4405Z"
                fill="#4D5F6E"
              />
            </svg>
          </button>
        </div>
      )}
      {/* end of pagination */}
    </>
  );
};

export default BlogPage;
