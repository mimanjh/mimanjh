const skillGroups: { label: string; items: string[] }[] = [
    {
        label: "Frontend",
        items: [
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "DaisyUI",
            "HTML / CSS",
        ],
    },
    {
        label: "Backend",
        items: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
        label: "Tools",
        items: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Jest"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <p className="opacity-70 mb-8">Tools I reach for most often.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillGroups.map((group) => (
                    <div key={group.label}>
                        <h3 className="font-semibold mb-3 opacity-90">
                            {group.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="badge badge-outline"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
