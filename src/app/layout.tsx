import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const raleway = Raleway({
  variable: "--font-raleway",
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
        className={`${raleway.variable} antialiased bg-[--my-color] h-[100vh] overflow-y-scroll`}
      >
        <Header />
        <main className="mt-[8rem]">{children}</main>
      </body>
    </html>
  );
}
