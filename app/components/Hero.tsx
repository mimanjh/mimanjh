import Link from "next/link";
import {
    FiFileText,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
} from "react-icons/fi";
import ProfileImage from "./ProfileImage";
import RotatingGreeting from "./RotatingGreeting";

const Hero = () => {
    return (
        <section className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-widest opacity-60 mb-3">
                    Software Engineer
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="block">
                        <RotatingGreeting />,
                    </span>
                    I&apos;m Jacob Hunsaker.
                </h1>
                <p className="py-5 text-lg opacity-80 max-w-xl">
                    Software engineer who re-architects enterprise platforms and
                    ships AI-driven tooling. Most recently at General Motors;
                    now looking for my next role at the intersection of software
                    and applied AI.
                </p>
                <div className="flex items-center gap-2 justify-center md:justify-start text-sm opacity-70 mb-5">
                    <FiMapPin size={14} />
                    <span>Austin, TX</span>
                </div>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center mt-2">
                    <Link href="#projects" className="btn btn-primary">
                        View work
                    </Link>
                    <Link href="#contact" className="btn btn-outline">
                        Get in touch
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <FiFileText size={16} />
                        Resume
                    </a>
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
                <ProfileImage />
            </div>
        </section>
    );
};

export default Hero;
