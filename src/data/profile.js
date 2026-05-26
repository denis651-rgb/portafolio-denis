import { projects } from "./projects";

export const profile = {
  name: "Denis Martinez",
  brand: "Dev Martinez",
  role: "Software Developer",
  photo: "/img/perfil.jpg",
  cv: "/cv/denis-cv.pdf",
  email: "denis.gm2000@gmail.com",
  whatsapp: "59163516136",
  stats: [
    {
      value: "1+",
      labelKey: "home.stats.experience",
    },
    {
      value: `${projects.length}`,
      labelKey: "home.stats.projects",
    },
  ],
  emailjs: {
    serviceId: "service_syl3yy2",
    templateId: "template_cuap7ku",
    publicKey: "LxprxsTXKmlHmt0Ex",
  },
};
