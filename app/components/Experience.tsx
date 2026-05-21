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
            "Re-architected a content optimization platform that predicts future vehicle trims and prices — generated roughly $3M/month in revenue impact.",
            "Designed and shipped an AI-powered internal assistant, delivered ahead of schedule and now used by hundreds of employees across departments.",
            "Led an effort to modernize how the team releases software, helping projects ship updates faster and with fewer incidents.",
        ],
    },
    {
        company: "Brigham Young University — Life Sciences IT",
        title: "Full-Stack Developer",
        location: "Provo, UT",
        dates: "Sep 2020 – Apr 2022",
        bullets: [
            "Built a scholarship application platform that streamlined the financial aid process for 200+ Life Sciences students each semester.",
            "Delivered and maintained internal web applications used by faculty and staff across the Life Sciences department.",
        ],
    },
    {
        company: "Smart Learning Korea",
        title: "Software Application Developer Intern",
        location: "Seoul, South Korea",
        dates: "May 2021 – Aug 2021",
        bullets: [
            "Shipped two new mobile apps for teachers to the Google Play Store and Apple App Store, expanding the company's product lineup.",
            "Rebuilt an outdated company app from the ground up, giving users a faster, more modern experience.",
            "Wrote an internal onboarding guide in Korean to help future developers ramp up faster.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="opacity-70 mb-8">
                Where I&apos;ve worked. Refer to my resume for more technical
                details.
            </p>
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
