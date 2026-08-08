export type Projeto = {
    title: string;
    description: string,
    image: string;
    technologies: string[];
    github: string;
    url: string;
    
}

export const projetos: Projeto[] = [
    {
    title: "Pizzaria Prime",
    description: "Site de pizzaria totalmente responsivo e intuitivo. Possui uma seção dedicada para pedidos online. Desenvolvido com foco em uma boa experiência do usuário.",
    image: "/assets/img/Project01.png",
    technologies: ["Html e CSS", "javascript"],
    github: "https://github.com/zlLuaN-Sl/Project-Pizza",
    url: 'https://project-pizza-nu.vercel.app/'
    }, 
    {
    title: "Controle de Finanças Pessoais",
    description: "Aplicação para controle de entradas e saídas financeiras. Permite adicionar, editar e remover registros. Interface simples, intuitiva e totalmente responsiva.",
    image: "/assets/img/project02.png",
    technologies: ["Html e CSS", "javascript" , "Typescript"],
    github: "https://github.com/zlLuaN-Sl/controle-financeiro-pessoal",
    url: 'https://controle-financeiro-pessoal-lime.vercel.app/'
    },
    {
    title: "Calculadora de Gorjeta",
    description: "Calculadora de gorjetas com porcentagens personalizáveis. Permite calcular o valor da gorjeta de forma dinâmica. com opção de reset para facilitar o uso.",
    image: "/assets/img/Project03.png",
    technologies: ["Html e CSS", "Tailwind CSS", "javascript"],
    github: "https://github.com/zlLuaN-Sl/Tip-Calculator",
    url: 'https://tip-calculator-six-rho.vercel.app/'
    },

] 