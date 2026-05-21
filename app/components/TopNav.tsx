"use client";
/**
 * Navigation formatting from Lee Robinson: https://github.com/leerob/leerob.io
 */
import clsx from "clsx";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
];

export default function TopNav() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <aside className="mb-5 tracking-tight sticky top-0 z-30 bg-base-100/80 backdrop-blur supports-[backdrop-filter]:bg-base-100/60">
            <LayoutGroup>
                <nav
                    className="flex flex-row items-center justify-between px-4 py-3 max-w-7xl mx-auto"
                    id="nav"
                >
                    <Link
                        href="#home"
                        className="font-semibold tracking-tight"
                    >
                        jacob hunsaker
                    </Link>
                    <div className="flex flex-row gap-1">
                        {sections
                            .filter((s) => s.id !== "home")
                            .map(({ id, label }) => {
                                const isActive = id === active;
                                return (
                                    <Link
                                        key={id}
                                        href={`#${id}`}
                                        className={clsx(
                                            "transition-all hover:text-base-content flex align-middle text-sm",
                                            {
                                                "text-base-content/60":
                                                    !isActive,
                                            }
                                        )}
                                    >
                                        <span className="relative py-1 px-2">
                                            {label}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute h-[2px] -bottom-0.5 inset-x-2 bg-primary"
                                                    layoutId="nav-active"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </span>
                                    </Link>
                                );
                            })}
                    </div>
                </nav>
            </LayoutGroup>
        </aside>
    );
}
