import Image, { StaticImageData } from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export interface Project {
    title: string;
    description: string;
    thumbnail: StaticImageData;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="card bg-base-200 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
            <figure className="aspect-video overflow-hidden bg-base-300">
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </figure>
            <div className="card-body p-5">
                <h3 className="card-title text-lg">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((t) => (
                        <span key={t} className="badge badge-outline badge-sm">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="card-actions justify-end mt-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm"
                            aria-label={`${project.title} on GitHub`}
                        >
                            <FiGithub size={16} />
                            Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                            aria-label={`${project.title} live demo`}
                        >
                            <FiExternalLink size={16} />
                            Live
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
