"use client";
/**
 * Navigation formatting from Lee Robinson: https://github.com/leerob/leerob.io
 */
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
    "/": {
        name: "home",
        external: false,
    },
    "https://mimanjh-leetcode.vercel.app/": {
        name: "leetcode",
        external: true,
    },
    "https://mimanjh.github.io/robofriends/": {
        name: "robofriends",
        external: true,
    },
    "https://github.com/mimanjh/wow-guild-monitor": {
        name: "wow-guild-monitor",
        external: true,
    },
};

export default function TopNav() {
    let pathname = usePathname() || "/";
    return (
        <aside className="ml-14 mb-5 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <LayoutGroup>
                    <nav
                        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                        id="nav"
                    >
                        <div className="flex flex-row space-x-0 pr-10">
                            {Object.entries(navItems).map(
                                ([path, { name, external }]) => {
                                    if (external) {
                                        return (
                                            <a
                                                key={path}
                                                href={path}
                                                className={clsx(
                                                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="relative py-1 px-2">
                                                    {name}
                                                </span>
                                            </a>
                                        );
                                    }
                                    const isActive = path === pathname;
                                    return (
                                        <Link
                                            key={path}
                                            href={path}
                                            className={clsx(
                                                "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                                                {
                                                    "text-neutral-500":
                                                        !isActive,
                                                }
                                            )}
                                        >
                                            <span className="relative py-1 px-2">
                                                {name}
                                                {path === pathname ? (
                                                    <motion.div
                                                        className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                                                        layoutId="sidebar"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 350,
                                                            damping: 30,
                                                        }}
                                                    />
                                                ) : null}
                                            </span>
                                        </Link>
                                    );
                                }
                            )}
                        </div>
                    </nav>
                </LayoutGroup>
            </div>
        </aside>
    );
}
