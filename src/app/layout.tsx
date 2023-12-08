import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const playpen = Playpen_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utilitariapp",
  description: "A useful collection of apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playpen.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
