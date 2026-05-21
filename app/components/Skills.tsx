const skillGroups: { label: string; items: string[] }[] = [
    {
        label: "Frontend",
        items: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Angular",
            "Vue.js",
            "Tailwind CSS",
            "Material UI",
            "antd",
            "Zustand",
        ],
    },
    {
        label: "Backend",
        items: [
            "Java",
            "Spring Boot",
            ".NET Entity Core",
            "Node.js",
            "FastAPI",
            "Kotlin",
            "Flutter",
            "Go",
            "REST",
            "OAuth 2.0",
        ],
    },
    {
        label: "Cloud & DevOps",
        items: [
            "AWS",
            "Azure DevOps",
            "GitHub Actions",
            "ArgoCD",
            "Docker",
            "Kubernetes",
            "JFrog Artifactory",
            "nginx",
        ],
    },
    {
        label: "Data & AI",
        items: [
            "PostgreSQL",
            "SQL Server",
            "MySQL",
            "Redis",
            "Databricks",
            "S3",
            "Claude Code",
            "LangChain",
            "RAG",
            "Prompt Engineering",
        ],
    },
    {
        label: "Testing & Observability",
        items: [
            "Mockito",
            "Zest",
            "Selenium",
            "SonarQube",
            "Datadog",
            "Dynatrace",
            "Grafana",
            "Contentsquare",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <p className="opacity-70 mb-8">Tools I reach for most often.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
