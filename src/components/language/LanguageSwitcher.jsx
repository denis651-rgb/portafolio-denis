import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const nextLanguage = currentLanguage === "es" ? "en" : "es";

  return (
    <button
      type="button"
      aria-label={t("language.label")}
      title={t("language.label")}
      onClick={() => i18n.changeLanguage(nextLanguage)}
      className="px-3 py-2 rounded-md border border-border text-accent text-sm font-semibold hover:bg-muted transition"
    >
      {currentLanguage === "es" ? "EN" : "ES"}
    </button>
  );
}
