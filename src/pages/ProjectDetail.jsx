import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import ProjectBadges from "../components/projects/ProjectBadges";
import ProjectGallery from "../components/projects/ProjectGallery";
import { getLocalizedProject, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const project = useMemo(() => {
    const foundProject = projects.find((item) => item.slug === slug);
    return foundProject ? getLocalizedProject(foundProject, i18n.language) : null;
  }, [i18n.language, slug]);

  if (!project) {
    return (
      <section className="min-h-screen px-6 py-10 bg-background text-foreground">
        <Link to="/proyectos" className="text-accent hover:underline">
          ← {t("projects.back")}
        </Link>
        <h1 className="text-2xl font-bold mt-6">{t("projects.notFound")}</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Link to="/proyectos" className="text-accent hover:underline">
          ← {t("projects.back")}
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-accent">
          {t("projects.caseStudy")} · {project.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{project.title}</h1>
        <p className="text-muted-foreground mt-3 max-w-4xl">{project.description}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t("projects.status")}
            </h2>
            <p className="mt-2 text-muted-foreground">{project.status}</p>
          </Card>
          <Card className="p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t("projects.availability")}
            </h2>
            <p className="mt-2 font-medium">{project.availability}</p>
          </Card>
        </div>

        {!project.isDeployed && (
          <Card className="mt-6 p-5 border-accent/40">
            <p className="font-semibold text-accent">{project.availability}</p>
            <p className="mt-2 text-muted-foreground">{t("projects.notDeployedNotice")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{project.reviewMode}</p>
          </Card>
        )}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h2 className="text-xl font-semibold text-accent">{t("projects.problem")}</h2>
            <p className="mt-3 text-muted-foreground">{project.problem}</p>
          </Card>
          <Card className="p-5">
            <h2 className="text-xl font-semibold text-accent">{t("projects.solution")}</h2>
            <p className="mt-3 text-muted-foreground">{project.solution}</p>
          </Card>
          <Card className="p-5">
            <h2 className="text-xl font-semibold text-accent">{t("projects.myRole")}</h2>
            <p className="mt-3 text-muted-foreground">{project.role}</p>
          </Card>
        </div>

        {project.features?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">{t("projects.includes")}</h2>
            <ul className="grid gap-2 pl-0 text-muted-foreground sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-md border border-border bg-card px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">{t("projects.technologies")}</h2>
          <ProjectBadges stack={project.stack} />
        </div>

        {project.videoUrl && (
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">{t("projects.viewVideo")}</h2>
              <Button href={project.videoUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                {t("projects.viewVideo")}
              </Button>
            </div>
            <div className="aspect-video max-w-5xl mx-auto">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <ProjectGallery images={project.images} title={project.title} />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">{t("projects.sourceCode")}</h2>
          {project.codeUrl && !project.isCodePrivate ? (
            <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
              {t("projects.viewCode")}
            </Button>
          ) : (
            <Card className="p-5">
              <p className="font-semibold text-accent">{t("projects.privateCode")}</p>
              <p className="mt-2 text-muted-foreground">{project.reviewMode}</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
