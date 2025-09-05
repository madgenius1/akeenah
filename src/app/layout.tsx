import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Akeenah Group | Home",
  description: "Africa's Leading Industrial Procurement and Supply Company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
