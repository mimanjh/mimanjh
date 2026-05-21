interface Role {
    company: string;
    title: string;
    location: string;
    dates: string;
    bullets: string[];
}

const roles: Role[] = [
    {
        company: "General Motors",
        title: "Software Engineer",
        location: "Austin, TX",
        dates: "Jun 2022 – May 2026",
        bullets: [
            "Re-architected a content optimization platform from .NET MVC to Spring Boot + Angular, delivering ~$3M/month in revenue impact and significant gains in performance and scalability.",
            "Built and shipped an AI-driven internal chatbot (TypeScript-React, FastAPI, Azure, Databricks) ahead of schedule; now serves hundreds of internal users across departments.",
            "Led the rollout of GitHub Actions and ArgoCD CI/CD pipelines with Helm-based GitOps deployments, reducing failed deploys via automated rollbacks and health checks.",
            "Improved backend performance via Redis caching, Zustand-based state management, and SQL views/stored procedures in SSMS — accelerating query times and cutting compute costs.",
            "Embedded Mockito, Zest, and SonarQube into the CI/CD pipeline, measurably reducing production bugs and code smells.",
        ],
    },
    {
        company: "Brigham Young University — Life Sciences IT",
        title: "Full-Stack Developer",
        location: "Provo, UT",
        dates: "Sep 2020 – Apr 2022",
        bullets: [
            "Built and maintained multiple high-impact web applications on .NET Entity Core + Vue.js to support Life Sciences operations.",
            "Led three concurrent development projects with a flawless deployment record — zero major incidents through rigorous testing and performance tuning.",
            "Built a scholarship application platform that streamlined the financial aid process for 200+ students each semester.",
            "Worked directly with executive stakeholders to translate strategic goals into production web applications.",
        ],
    },
    {
        company: "Smart Learning Korea",
        title: "Software Application Developer Intern",
        location: "Seoul, South Korea",
        dates: "May 2021 – Aug 2021",
        bullets: [
            "Independently shipped two new Flutter apps for teachers to the Google Play Store and Apple App Store, expanding the company's portfolio.",
            "Migrated an outdated PHP application to Flutter, delivering a more modern, performant user experience.",
            'Wrote an internal "How-to-Flutter" guide in Korean to help onboard future developers.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="opacity-70 mb-8">Where I&apos;ve worked.</p>
            <ol className="relative border-l border-base-300 ml-2 space-y-10">
                {roles.map((role) => (
                    <li key={role.company} className="pl-6">
                        <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-primary" />
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-lg font-semibold">
                                {role.title}{" "}
                                <span className="opacity-70 font-normal">
                                    &middot; {role.company}
                                </span>
                            </h3>
                            <span className="text-sm opacity-60">
                                {role.dates}
                            </span>
                        </div>
                        <p className="text-sm opacity-60 mb-3">
                            {role.location}
                        </p>
                        <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm opacity-90">
                            {role.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Experience;
