import ProjectCard, { Project } from "./ProjectCard";
import leetCodeThumbnail from "../../public/thumbnail-leetcode.png";
import wowGuildMonitorThumbnail from "../../public/thumbnail-wowguildmonitor.png";
import uxInsightGeneratorThumbnail from "../../public/thumbnail-uxinsightgenerator.png";
import wowLogAnalyzerThumbnail from "../../public/thumbnail-wowloganalyzer.png";

const projects: Project[] = [
    {
        title: "LeetCode Solutions",
        description:
            "A growing collection of LeetCode solutions in JavaScript and Python, organized by problem and difficulty.",
        thumbnail: leetCodeThumbnail,
        tech: ["Next.js", "TypeScript", "Vercel"],
        liveUrl: "https://mimanjh-leetcode.vercel.app/",
        githubUrl: "https://github.com/mimanjh/mimanjh-leetcode",
    },
    {
        title: "WoW Guild Monitor",
        description:
            "Tracks World of Warcraft guild activity using the Blizzard API — raid attendance, gear progression, and roster changes.",
        thumbnail: wowGuildMonitorThumbnail,
        tech: ["Node.js", "Blizzard API", "React"],
        githubUrl: "https://github.com/mimanjh/wow-guild-monitor",
    },
    {
        title: "UX Insight Generator",
        description:
            "Turns raw user research notes into structured UX insights, with patterns and themes surfaced automatically.",
        thumbnail: uxInsightGeneratorThumbnail,
        tech: ["TypeScript", "OpenAI", "Node.js"],
        githubUrl: "https://github.com/mimanjh/ux-insight-generator",
    },
    {
        title: "WoW Log Analyzer",
        description:
            "Parses World of Warcraft combat logs to surface performance metrics and improvement opportunities for raiders.",
        thumbnail: wowLogAnalyzerThumbnail,
        tech: ["Python", "Data Analysis"],
        githubUrl: "https://github.com/mimanjh/wow-log-analyzer",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="opacity-70 mb-8">
                A few things I&apos;ve built recently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
