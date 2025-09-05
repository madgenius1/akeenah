import { ReactNode } from "react";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

export default function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { country: string; lang: string };
}) {
    return (
        <html lang={params.lang}>
            <body>
                <Header country={params.country} lang={params.lang} />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
