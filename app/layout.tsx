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
            <body className={inter.className}>
                <TopNav />
                {children}
            </body>
        </html>
    );
}
