import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";

const socialIcons = {
  email: FaEnvelope,
  facebook: FaFacebook,
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
};

export default function Contact() {
  const form = useRef();
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(profile.emailjs.serviceId, profile.emailjs.templateId, form.current, {
        publicKey: profile.emailjs.publicKey,
      })
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground flex items-center justify-center transition-colors duration-300">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Card className="p-8 rounded-xl" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-accent mb-6 text-center">{t("contact.title")}</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              aria-label={t("contact.name")}
              placeholder={t("contact.name")}
              className="bg-input border border-border p-3 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />
            <input
              type="email"
              name="email"
              aria-label={t("contact.email")}
              placeholder={t("contact.email")}
              className="bg-input border border-border p-3 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />
            <textarea
              name="message"
              aria-label={t("contact.message")}
              placeholder={t("contact.message")}
              rows="5"
              className="bg-input border border-border p-3 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              required
            />
            <Button type="submit" disabled={status === "sending"}>
              {t("contact.submit")}
            </Button>
            {status === "sent" && <p className="text-green-400 text-center mt-2">{t("contact.success")}</p>}
            {status === "error" && <p className="text-red-400 text-center mt-2">{t("contact.error")}</p>}
          </form>
        </Card>

        <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-2xl font-bold text-accent text-center md:text-left">
            {t("contact.workTogether")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("contact.description")}</p>
          <h2 className="text-2xl font-bold text-accent text-center md:text-left">{t("contact.findMe")}</h2>

          <div className="flex flex-wrap gap-6 mt-6 text-3xl">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id];
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={t(`social.${link.id}`)}
                  className={`p-3 rounded-full text-white transform transition-transform duration-300 hover:scale-110 ${link.colorClass}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
