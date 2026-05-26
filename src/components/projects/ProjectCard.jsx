import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import Card from "../common/Card";
import ProjectBadges from "./ProjectBadges";

export default function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform duration-300">
      {project.cover ? (
        <img src={project.cover} alt={project.title} className="w-full h-48 object-cover" />
      ) : (
        <div className="flex h-48 items-center justify-center bg-muted px-6 text-center">
          <span className="text-lg font-semibold text-accent">{project.category}</span>
        </div>
      )}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-accent">
            {t("projects.caseStudy")}
          </span>
        </div>
        <p className="mb-2 text-sm font-semibold text-accent">{project.category}</p>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <dl className="mb-4 grid gap-2 text-sm">
          <div>
            <dt className="font-semibold text-foreground">{t("projects.status")}</dt>
            <dd className="text-muted-foreground">{project.status}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">{t("projects.availability")}</dt>
            <dd className="text-muted-foreground">{project.availability}</dd>
          </div>
        </dl>
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold text-foreground">{t("projects.technologies")}</p>
          <ProjectBadges stack={project.stack} limit={4} />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to={project.detailPath}>{t("projects.viewDetails")}</Button>
          {project.codeUrl && !project.isCodePrivate && (
            <Button
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {t("projects.code")}
            </Button>
          )}
          {project.isCodePrivate && (
            <span className="inline-flex items-center rounded-md bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground">
              {t("projects.privateCode")}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
