const BLOG = Array.from({ length: 60 }, (_, index) => ({
  image: "/blog-thumbnail.png",
  category: "Quản lý sản xuất",
  name: `Bài viết ${index + 1}: Tầm quan trọng của BOM trong sản xuất`,
  date: "17/11/2022",
  long: "10 phút đọc",
  href: "/blog/quy-trinh-5s-la-gi",
}));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = BLOG.slice(startIndex, endIndex);
  return Response.json({
    data: paginatedData,
    currentPage: page,
    totalPages: Math.ceil(BLOG.length / limit),
    totalItems: BLOG.length,
  });
}
