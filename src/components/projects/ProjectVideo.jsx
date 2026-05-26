import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import Card from "../common/Card";
import { getVideoEmbedUrl, getVideoThumbnailUrl, getVideoWatchUrl } from "../../utils/video";

export default function ProjectVideo({ title, url }) {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  if (!url) {
    return null;
  }

  const embedUrl = getVideoEmbedUrl(url);
  const watchUrl = getVideoWatchUrl(url);
  const thumbnailUrl = getVideoThumbnailUrl(url);

  return (
    <div className="mt-8">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">{t("projects.viewVideo")}</h2>
        <Button href={watchUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
          {t("projects.openVideo")}
        </Button>
      </div>

      <div className="aspect-video max-w-5xl mx-auto overflow-hidden rounded-lg border border-border bg-card shadow-lg">
        {isLoaded ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            aria-label={t("projects.playVideo")}
            className="relative flex h-full w-full items-center justify-center bg-muted text-center"
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
            )}
            <span className="relative rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg">
              {t("projects.playVideo")}
            </span>
          </button>
        )}
      </div>

      <Card className="mt-3 p-4">
        <p className="text-sm text-muted-foreground">{t("projects.videoFallback")}</p>
      </Card>
    </div>
  );
}
