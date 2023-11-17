import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: { default: "Mimanjh", template: "%s | Mimanjh" },
    description: "Full Stack Developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="business">
            <body className="antialiased max-w-7xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <TopNav />
                    {children}
                </main>
            </body>
        </html>
    );
}
