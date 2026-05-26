import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiFlutter, SiMysql, SiPostgresql, SiSpringboot } from "react-icons/si";

export const skills = [
  { name: "HTML", icon: <FaHtml5 size={32} />, colorClass: "text-orange-500", image: "/img/logos/html.png" },
  { name: "CSS", icon: <FaCss3Alt size={32} />, colorClass: "text-blue-500", image: "/img/logos/css.png" },
  { name: "JavaScript", icon: <FaJs size={32} />, colorClass: "text-yellow-400", image: "/img/logos/js.png" },
  { name: "React", icon: <FaReact size={32} />, colorClass: "text-cyan-400", image: "/img/logos/react.png" },
  { name: "Java", icon: <FaJava size={32} />, colorClass: "text-red-500", image: "/img/logos/java.png" },
  { name: "Python", icon: <FaPython size={32} />, colorClass: "text-blue-400", image: "/img/logos/python.png" },
  { name: "Flutter", icon: <SiFlutter size={32} />, colorClass: "text-sky-400", image: "/img/logos/flutter.png" },
  { name: "Spring Boot", icon: <SiSpringboot size={32} />, colorClass: "text-green-500", image: "/img/logos/springboot.png" },
  { name: "Bootstrap", icon: <FaBootstrap size={32} />, colorClass: "text-purple-500", image: "/img/logos/bootstrap.png" },
  { name: "GitHub", icon: <FaGithub size={32} />, colorClass: "text-gray-200", image: "/img/logos/github.png" },
  { name: "Git", icon: <FaGitAlt size={32} />, colorClass: "text-orange-600", image: "/img/logos/git.png" },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} />, colorClass: "text-blue-400", image: "/img/logos/postgresql.png" },
  { name: "MySQL", icon: <SiMysql size={32} />, colorClass: "text-blue-300", image: "/img/logos/mysql.png" },
  { name: "Node.js", icon: <FaNodeJs size={32} />, colorClass: "text-green-500" },
];
