import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import CopyEmailToClipboard from "./CopyEmailToClipboard";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/mimanjh",
        Icon: FiGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jacobjhunsaker/",
        Icon: FiLinkedin,
    },
    {
        label: "Email",
        href: "mailto:jacobjhunsaker@gmail.com",
        Icon: FiMail,
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 scroll-mt-20 text-center border-t border-base-300"
        >
            <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
            <p className="opacity-70 mb-8 max-w-lg mx-auto">
                Always happy to chat about engineering, side projects, or
                anything in between.
            </p>
            <a
                href="/resume.pdf"
                download="Jacob_Hunsaker_Resume.pdf"
                className="btn btn-primary mb-8"
            >
                <FiDownload size={18} />
                Download Resume
            </a>
            <div className="flex justify-center gap-3 flex-wrap items-center">
                {socials.map(({ label, href, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        aria-label={label}
                        title={label}
                        className="btn btn-ghost btn-circle"
                    >
                        <Icon size={22} />
                    </a>
                ))}
                <CopyEmailToClipboard />
            </div>
            <p className="text-xs opacity-50 mt-10">
                © {new Date().getFullYear()} Jacob Hunsaker
            </p>
        </section>
    );
};

export default Contact;
