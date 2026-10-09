import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Toast } from "@heroui/react";

const hindSiliguri = Hind_Siliguri({
    weight: ["400", "500", "600", "700"],
    subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
    title: "Bazar Dor",
    description: "Keep track of all grocery items across all the bazars in Bangladesh",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${hindSiliguri.className} antialiased bg-base-200`}>
            <body className="text-base-content min-h-screen flex flex-col">
                <Toast.Provider placement="top end" />
                    <Nav />
                    <Marquee />
                    <main className="flex-1 space-y-10 my-10">
                        {children}
                    </main>
                    <Footer />
            </body>
        </html>
    )
}
