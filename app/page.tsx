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
                        style={{
                            maxWidth: "50%",
                            height: "auto",
                        }}
                        alt="Picture of the author"
                        className="rounded-lg shadow-2x1 py-10"
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
