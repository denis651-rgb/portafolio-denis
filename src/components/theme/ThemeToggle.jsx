import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTheme } from "./themeContext";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { resolvedTheme, theme, toggleTheme } = useTheme();
  const icons = {
    dark: FaMoon,
    light: FaSun,
    system: FaDesktop,
  };
  const Icon = icons[theme];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("theme.toggle", { mode: t(`theme.${theme}`) })}
      title={t("theme.toggle", { mode: t(`theme.${theme}`) })}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-accent hover:bg-muted transition"
    >
      <Icon className="w-5 h-5" />
      <span className="hidden lg:inline text-sm font-semibold">
        {t(`theme.${theme}`)}
        {theme === "system" ? `/${t(`theme.${resolvedTheme}`)}` : ""}
      </span>
    </button>
  );
}
