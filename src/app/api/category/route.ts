const CATEGORIES = [
  {
    name: "Tất cả",
    amount: 108,
    href: "/",
  },
  {
    name: "Thiết Kế Website",
    amount: 36,
    href: "/",
  },
  {
    name: "Thiết Kế App Mobile",
    amount: 13,
    href: "/",
  },
  {
    name: "Quản Lý Sản Xuất",
    amount: 25,
    href: "/",
  },
  {
    name: "Quản Lý Bán Hàng",
    amount: 22,
    href: "/",
  },
  {
    name: "Báo Chí Nói Về FOSO",
    amount: 7,
    href: "/",
  },
  {
    name: "Tin Tức FOSO",
    amount: 5,
    href: "/",
  },
];

export async function GET() {
  return Response.json(CATEGORIES);
}
