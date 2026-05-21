const About = () => {
    return (
        <section id="about" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">About</h2>
            <p className="opacity-70 mb-6">A bit about me.</p>
            <div className="space-y-4 max-w-3xl opacity-90">
                <p>
                    I&apos;m a software engineer based in Austin, TX. Most
                    recently I spent four years at General Motors building
                    internal platforms used by hundreds of people across the
                    company; re-architecting a content optimization platform
                    from .NET MVC to Spring Boot + Angular and shipping an
                    AI-driven internal chatbot on FastAPI, React, Azure, and
                    Databricks.
                </p>
                <p>
                    Before GM I built full-stack web applications for BYU&apos;s
                    Life Sciences IT team and interned at Smart Learning Korea
                    in Seoul, where I shipped two Flutter apps to the Play Store
                    and App Store. I have a B.S. in Statistics - Data Science
                    from BYU with a minor in Business Management.
                </p>
                <p>
                    Lately I&apos;ve been deep in the Gen AI space; tracking
                    where the field is heading, implementing LLMs in
                    application, experimenting with prompt engineering, RAG, and
                    LangChain, and learning what it actually takes to build
                    production-grade AI systems. I&apos;m currently looking for
                    AI Engineering roles where I can spend more of my time at
                    that intersection of software engineering and applied AI.
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
