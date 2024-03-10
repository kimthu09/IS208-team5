import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IS208 - Nhóm 5",
  description: "Trang web nhóm 5",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="fixed z-[-1] top-[-25vw] left-[-25vw] green__gradient w-[50vw] h-[50vw] blur-[24vw]"></div>
          <div className="absolute z-[-1] top-[-24vw] left-[50vw] pink__gradient w-[32vw] h-[32vw] blur-[20vw]"></div>
          <div className="fixed z-[-1] top-[25vh] right-[-28vh] green__gradient w-[50vh] h-[50vh] blur-[25vh]"></div>
          <div className="fixed z-[-1] top-[10vh] left-[25vw] white__gradient w-[50vw] h-[50vw] blur-[28vw]"></div>
          <div className="flex flex-col w-full pb-20">
            <Header />

            <section className="pt-40 px-[10vw]">{children}</section>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
