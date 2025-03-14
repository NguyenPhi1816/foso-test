import type { Metadata } from "next";
import { Raleway, Lexend_Deca, Racing_Sans_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const racingSansOne = Racing_Sans_One({
  weight: "400",
  variable: "--font-racing-sans-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSO Test",
  description: "FOSO Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${lexendDeca.variable} ${racingSansOne.variable} antialiased bg-[--my-color] h-[100vh] overflow-y-scroll`}
      >
        <Header />
        <main className="py-[8rem]">{children}</main>
      </body>
    </html>
  );
}
