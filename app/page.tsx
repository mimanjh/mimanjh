import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div id="home" className="scroll-mt-20">
                <Hero />
            </div>
            <Reveal>
                <About />
            </Reveal>
            <Reveal>
                <Experience />
            </Reveal>
            <Reveal>
                <Skills />
            </Reveal>
            <Reveal>
                <Projects />
            </Reveal>
            <Reveal>
                <Contact />
            </Reveal>
        </div>
    );
}
