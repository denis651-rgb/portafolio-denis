import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-card text-center text-sm py-4 mt-8 text-muted-foreground border-t border-border">
      © {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
    </footer>
  );
}
