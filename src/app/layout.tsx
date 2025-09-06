import "./globals.css";
import { ReactNode } from "react";
import Footer from "./components/common/Footer";

export const metadata = {
  title: "Akeenah Group | Home",
  description: "Africa's Leading Industrial Procurement and Supply Company",
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

