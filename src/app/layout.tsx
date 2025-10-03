import type { Metadata } from "next";
import { cookies } from "next/headers";

import "@/styles/globals.css";
import { koho } from "@/styles/fonts";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "Project showcase",
};

async function Theme() {
    const cookieStore = await cookies();
    return cookieStore.get("theme")?.value;
}

type LayoutProps = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
    const theme = (await Theme()) || "luxury";
    return (
        <html data-theme={theme} lang="en">
            <body className={`${koho.className}`}>
                <NavBar />
                <div className="flex flex-col min-h-screen justify-center items-center">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
