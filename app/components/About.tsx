const About = () => {
    return (
        <section id="about" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">About</h2>
            <p className="opacity-70 mb-6">A bit about me.</p>
            <div className="space-y-4 max-w-3xl opacity-90">
                <p>
                    I&apos;m a full stack developer who enjoys turning complex
                    problems into clean, well-tested products. I&apos;ve worked
                    across the stack on everything from web apps and APIs to
                    data pipelines and tooling.
                </p>
                <p>
                    Outside of work I tinker with side projects (a few are
                    below), play a lot of World of Warcraft, and grind LeetCode
                    problems to keep my fundamentals sharp. I&apos;m happiest
                    shipping things that other people actually use.
                </p>
            </div>
        </section>
    );
};

export default About;
