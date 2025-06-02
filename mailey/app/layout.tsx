import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Maggie Whitten Photography",
  description: "Photography Studio!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
