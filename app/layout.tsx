import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Sort",
  description: "Organize your space to make it easier to find what you need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white min-h-screen flex flex-col justify-between  `}
      >
        <Navbar />
        <div className=" max-w-screen-lg  p-4 mx-auto">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
