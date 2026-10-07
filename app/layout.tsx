import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

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
        <html lang="en" className={`${hindSiliguri.className} h-full antialiased bg-base-200`}>
            <body className="">
                <Nav />
                {children}
            </body>
        </html>
    );
}
