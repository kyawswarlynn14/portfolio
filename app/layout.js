"use client";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Ubuntu",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${ubuntu.variable} main-scrollbar select-none min-h-screen bg-no-repeat bg-gradient-to-r from-[#DAD299] to-[#B0DAB9] dark:from-[#0b131c] dark:to-[#1b283d] duration-100 dark:text-white text-slate-900`}
      >
        <Toaster position='top-center' reverseOrder={false} />
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <div className="w-[95%] md:w-[80%] mx-auto mb-8">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
