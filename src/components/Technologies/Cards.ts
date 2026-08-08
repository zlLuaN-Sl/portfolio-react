import { FaHtml5,FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaReact  } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons";

export type Tecnologia ={
    name: string;
    description: string;
    icon: IconType
    color: string;
}


 export const tecnologias: Tecnologia[] =  [ 
    {
    name: "HTML5",
    description:"Linguagem de marcação para estrutura de páginas.",
    icon: FaHtml5,
    color: "#E34F26"

  },
  {
    name: "CSS3",
    description:"Estilização de páginas",
    icon: FaCss3Alt,
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    description:"Linguagem de programação",
    icon: FaJs,
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    description:"Superset do JavaScript com tipagem estática.",
    icon: SiTypescript,
    color: "#3178C6"
  },
  {
    name: "Git",
    description:"Controle de versão distribuído",
    icon: FaGitAlt,
    color: "#F05032"
  },
  {
    name: "GitHub",
    description:"Plataforma de código",
    icon: FaGithub,
    color: "#FFFFFF"
  },
  {
    name: "Tailwind CSS",
    description:"Framework CSS baseado em classes utilitárias.",
    icon: SiTailwindcss,
    color: "#06B6D4"
  },
  {
    name: "React",
    description:"Biblioteca JavaScript para criação de interfaces.",
    icon: FaReact,
    color: "#61DAFB"
  }
]