import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "AKEENAH Group | Home",
  description: "The One Stop Solution and Service Provider for all your Industrial needs. We are a Pan-African company that supplies the top quality globally sourced products to meet all your needs and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        {children}
        <div className="fixed bottom-5 right-5 z-50">
          <Link
            href="https://wa.me/254704904500"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-full p-3 shadow-sm"
          >
            <Image
              src="/assets/whatsapp.png"
              alt="WhatsApp"
              className="w-12 h-12"
              height={100}
              width={100}
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
