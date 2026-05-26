import { FaEnvelope, FaUser, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { profile } from "../data/profile";
import { skills } from "../data/skills";

export default function Home() {
  const { t } = useTranslation();
  const carouselSkills = skills.filter((skill) => skill.image);
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t("home.whatsappMessage"))}`;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground overflow-hidden pt-10 transition-colors duration-300">
      <div className="px-6 pt-16 pb-0 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-6" data-aos="fade-up">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-64 h-64 rounded-full object-cover animate-float"
            style={{ boxShadow: "0 0 10px rgba(0, 217, 192, 0.3)" }}
          />

          <div className="flex flex-row md:flex-col gap-4">
            {profile.stats.map((stat, index) => (
              <Card
                key={stat.labelKey}
                className="p-6 text-center hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <p className="text-2xl font-bold text-green-400">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{t(stat.labelKey)}</p>
              </Card>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">{t("home.greeting")}</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            {t("home.intro", { name: "Denis" })}
          </h2>
          <p className="text-muted-foreground text-lg mb-4">{t("home.description")}</p>
          <p className="text-muted-foreground text-lg">{t("home.currentWork")}</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-foreground">{t("home.contactMe")}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            {t("home.whatsapp")}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="500">
          <Button to="/sobre-mi" variant="outline" className="rounded-full transform hover:-translate-y-2" icon={<FaUser />}>
            {t("home.aboutButton")}
          </Button>
          <Button to="/contacto" variant="outline" className="rounded-full transform hover:-translate-y-2" icon={<FaEnvelope />}>
            {t("home.contactButton")}
          </Button>
        </div>
      </div>

      <div className="scroll-logos-wrapper py-10 bg-transparent w-full" data-aos="fade-up" data-aos-delay="600">
        <div className="scroll-logos px-10">
          {carouselSkills.concat(carouselSkills).map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full p-2 flex items-center justify-center shadow-md bg-card border border-border transform transition-transform duration-300 hover:-translate-y-2">
                <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-muted-foreground mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
