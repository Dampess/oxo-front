import "./globals.scss";
import Header from "./components/Header";
import ScrollToTop from "./components/ui/scrolltotop";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Oxo - See, Smell, Protect",
  description:
    "Oxo helps individuals and professionals secure their digital world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-oxo-white text-gray-800 font-sans">
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
