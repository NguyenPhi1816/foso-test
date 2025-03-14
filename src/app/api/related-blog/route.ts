const BLOG = Array.from({ length: 3 }, (_, index) => ({
  image: "/blog-thumbnail.png",
  category: "Quản lý sản xuất",
  name: `Bài viết ${index + 1}: Tầm quan trọng của BOM trong sản xuất`,
  date: "17/11/2022",
  long: "10 phút đọc",
  href: "/blog/quy-trinh-5s-la-gi",
}));

export async function GET() {
  return Response.json(BLOG, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
}
