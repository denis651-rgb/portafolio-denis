import { FaBullseye, FaRegIdBadge, FaUserAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Card from "../components/common/Card";
import SectionTitle from "../components/common/SectionTitle";
import { skills } from "../data/skills";

export default function About() {
  const { t } = useTranslation();

  const cards = [
    { id: "who", icon: <FaUserAlt size={22} /> },
    { id: "goal", icon: <FaBullseye size={22} /> },
    { id: "profile", icon: <FaRegIdBadge size={22} /> },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-16 transition-colors duration-300">
      <SectionTitle className="mb-16">{t("about.title")}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {cards.map((card, index) => (
          <Card key={card.id} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex items-center gap-2 mb-4 text-accent">
              {card.icon}
              <h3 className="text-xl font-semibold">{t(`about.cards.${card.id}.title`)}</h3>
            </div>
            <p>{t(`about.cards.${card.id}.body`)}</p>
          </Card>
        ))}
      </div>

      <div className="text-center" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-accent">{t("about.skillsTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-8 px-4" data-aos="zoom-in" data-aos-delay="100">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className={`mb-1 ${skill.colorClass}`}>{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
