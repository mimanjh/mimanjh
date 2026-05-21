"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import aiImg from "../../public/profile-img-AI-ver.png";
import ogImg from "../../public/profile-img-og.jpeg";

const variants = [
    { src: aiImg, label: "AI" },
    { src: ogImg, label: "Real" },
] as const;

const ProfileImage = () => {
    const [index, setIndex] = useState(0);
    const current = variants[index];
    const next = variants[(index + 1) % variants.length];

    return (
        <div
            className="tooltip tooltip-left"
            data-tip={`Click to see the ${next.label} version`}
        >
            <button
                type="button"
                onClick={() =>
                    setIndex((i) => (i + 1) % variants.length)
                }
                aria-label={`Profile photo, currently ${current.label} version. Click to switch to ${next.label} version.`}
                className="relative group w-40 md:w-60 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-base-300 transition-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
                <AnimatePresence initial={false}>
                    <motion.div
                        key={current.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={current.src}
                            alt="Jacob Hunsaker"
                            sizes="(max-width: 768px) 50vw, 240px"
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <span className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-base-100/80 backdrop-blur text-xs font-medium ring-1 ring-base-300">
                    <FiRefreshCw
                        size={12}
                        className="group-hover:rotate-180 transition-transform duration-500"
                    />
                    <span>{current.label}</span>
                </span>
            </button>
        </div>
    );
};

export default ProfileImage;
