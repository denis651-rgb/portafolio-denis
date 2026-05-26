import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const [resolvedTheme, setResolvedTheme] = useState(() => (theme === "system" ? getSystemTheme() : theme));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const nextResolvedTheme = theme === "system" ? getSystemTheme() : theme;

    setResolvedTheme(nextResolvedTheme);
    document.documentElement.classList.toggle("dark", nextResolvedTheme === "dark");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    const handleSystemChange = () => {
      if (theme !== "system") {
        return;
      }

      const updatedTheme = getSystemTheme();
      setResolvedTheme(updatedTheme);
      document.documentElement.classList.toggle("dark", updatedTheme === "dark");
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const value = useMemo(
    () => ({
      resolvedTheme,
      setTheme,
      theme,
      toggleTheme: () =>
        setTheme((current) => {
          if (current === "system") return "light";
          if (current === "light") return "dark";
          return "system";
        }),
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
