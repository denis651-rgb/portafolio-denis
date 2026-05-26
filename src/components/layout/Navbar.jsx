import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaCog, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language/LanguageSwitcher";
import ThemeToggle from "../theme/ThemeToggle";
import { profile } from "../../data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/sobre-mi", label: t("nav.about") },
    { to: "/proyectos", label: t("nav.projects") },
    { to: "/contacto", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-accent">
          <FaCog className="text-2xl animate-spin" />
          {profile.brand}
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-[#00d9c0]"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={profile.cv}
            download
            className="bg-card text-accent border border-border px-4 py-2 rounded-md font-semibold shadow-sm hover:shadow-md transition"
          >
            {t("nav.downloadCv")}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            className="p-2"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-accent" />
            ) : (
              <FaBars className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md border-b border-border transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-foreground hover:text-accent font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.cv}
            download
            className="block text-foreground hover:text-accent font-medium py-2"
          >
            {t("nav.downloadCv")}
          </a>
        </div>
      </div>
    </nav>
  );
}
