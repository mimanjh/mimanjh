import Image from "next/image";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="hero-content text-center pt-0">
                    <div className="max-w-lg">
                        <Image
                            src="/about-me-main.jpg"
                            alt="Picture of the author"
                            className="rounded-lg shadow-2x1 py-10"
                        />
                        <h1 className="text-5xl font-bold">Hello there!</h1>
                        <p className="py-6">
                            Hello! My name is Jacob Hunsaker and I am a Full
                            Stack Developer.
                        </p>
                        <Projects />
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}
