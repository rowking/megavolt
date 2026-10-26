import type { Project } from "../data/siteData";
import { CardArt } from "./Artwork";
import { projectIcon } from "./icons";

/** Real site photo when the project has one, otherwise the drawn card artwork. */
export default function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt || project.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return <CardArt seed={project.slug} icon={projectIcon(project.category)} />;
}
