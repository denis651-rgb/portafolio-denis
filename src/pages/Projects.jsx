import { useTranslation } from "react-i18next";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import { getLocalizedProject, projects } from "../data/projects";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const localizedProjects = projects.map((project) => getLocalizedProject(project, i18n.language));

  return (
    <section className="min-h-screen px-6 py-12 bg-background text-foreground transition-colors duration-300">
      <SectionTitle className="mb-8">{t("projects.title")}</SectionTitle>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {localizedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
