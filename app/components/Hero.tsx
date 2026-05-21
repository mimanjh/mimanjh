import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profile from "../../public/about-me-main.jpg";

const Hero = () => {
    return (
        <section className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-widest opacity-60 mb-3">
                    Full Stack Developer
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Hi, I&apos;m Jacob Hunsaker.
                </h1>
                <p className="py-5 text-lg opacity-80 max-w-xl">
                    I build clean, well-tested products across the stack — from
                    React and TypeScript on the frontend to Node and databases
                    on the backend. I care about thoughtful UX, fast
                    performance, and code that&apos;s easy to change.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center mt-2">
                    <Link href="#projects" className="btn btn-primary">
                        View work
                    </Link>
                    <Link href="#contact" className="btn btn-outline">
                        Get in touch
                    </Link>
                    <div className="flex gap-1 ml-1">
                        <a
                            href="https://github.com/mimanjh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="btn btn-ghost btn-circle btn-sm"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jacobjhunsaker/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="btn btn-ghost btn-circle btn-sm"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:jacobjhunsaker@gmail.com"
                            aria-label="Email"
                            className="btn btn-ghost btn-circle btn-sm"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">
                <Image
                    src={profile}
                    alt="Jacob Hunsaker"
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="w-40 md:w-60 h-auto rounded-2xl shadow-xl"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
