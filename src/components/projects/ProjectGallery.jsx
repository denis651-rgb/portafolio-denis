import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectGallery({ images = [], title }) {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState({ open: false, src: null });

  if (!images.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-3">{t("projects.screenshots")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            type="button"
            key={src}
            onClick={() => setLightbox({ open: true, src })}
            className="group block overflow-hidden rounded-lg border border-border bg-card"
          >
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="aspect-video w-full object-cover shadow-md group-hover:opacity-90 transition"
            />
          </button>
        ))}
      </div>

      {lightbox.open && (
        <button
          type="button"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox({ open: false, src: null })}
          aria-label={t("projects.previewAlt")}
        >
          <img
            src={lightbox.src}
            alt={t("projects.previewAlt")}
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
          />
        </button>
      )}
    </div>
  );
}
