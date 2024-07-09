import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

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
        className={`${inter.className} bg-white min-h-screen flex flex-col justify-between   `}
      >
        <Header />
        {/* <Header title={""} /> */}
        <div className=" max-w-screen-lg w-full flex-grow p-4 mx-auto">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
