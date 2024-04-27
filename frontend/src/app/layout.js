import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LinkLite | QR Code Generator",
  description:
    "Discover the best products and services for all your needs on our feature-rich website. Explore our offerings today!  Simplify sharing and accessing content with our powerful URL shortening and QR code generation tool.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
