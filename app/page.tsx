import Image from "next/image";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import profile from "../public/about-me-main.jpg";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero">
                <div className="hero-content text-center pt-0 flex flex-col items-center">
                    <Image
                        src={profile}
                        alt="Picture of the author"
                        sizes="(max-width: 768px) 75vw, 50vw"
                        className="w-1/2 h-auto rounded-lg shadow-2xl py-10"
                        priority
                    />
                    <h1 className="text-5xl font-bold">Hello there!</h1>
                    <p className="py-6">
                        Hello! My name is Jacob Hunsaker and I am a Full Stack
                        Developer.
                    </p>
                    <Projects />
                </div>
            </div>
            <Contact />
        </div>
    );
}
