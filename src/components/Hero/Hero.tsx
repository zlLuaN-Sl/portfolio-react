import { MoveRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Hero = () => {


const iconStyle = 'text-3xl text-white hover:text-[#7652df] transition-all duration-300'

    return (
        <section id="home" className="min-h-screen scroll-mt-28  bg-[#040509]">
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row mt-25  justify-between px-6 ">

            

           <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
                <span className="text-white/85 text-lg font-medium lg:text-2xl">Olá, eu sou</span>
                <h1 className="text-5xl font-bold text-white lg:text-[5.2rem]">Luan <span className="text-[#7652df]">Silva</span></h1>
                <h2 className="text-2xl font-semibold text-white/90 lg:text-3xl">Desenvolvedor <span className="text-[#7652df]">Front-end</span></h2>
                <p className="text-gray-400 max-w-md leading-relaxed lg:text-1xl"> Desenvolvedor Front-end focado em criar aplicações modernas, responsivas e intuitivas utilizando React, TypeScript e Tailwind CSS.</p>

                <div className="flex justify-between gap-6">
                    <a 
                    className="bg-[#7652df] px-3 py-2 rounded-md shadow-lg font-bold hover:bg-[#134d90] transition-all duration-300"
                    href="#projects">
                        <p className="flex gap-3 lg:text-[1.2rem]">Ver Projetos <MoveRight /> </p>
                    </a>
                    <a 
                    className="border border-blue-900 px-3 py-2 rounded-md shadow-blue-700 font-bold hover:bg-[#7652df] transition-all duration-300  lg:text-[1.2rem]"
                    href="#contact">
                        <p>Entre em contato</p>
                    </a>
                       
                </div>

                <div className="flex gap-6 p-3">
                    <a href="https://github.com/zlLuaN-Sl" target="_blank">
                        <FaGithub className={iconStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/luansilvadevelop/" target="_blank">
                        <FaLinkedin className={iconStyle} />
                    </a>
                    <a href="#contact">
                        <FaEnvelope className={iconStyle} />
                    </a>
                    
                    
                </div>
           </div>

           <div className="flex-1 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="absolute w-72 h-72 lg:w-[460px] lg:h-[460px] rounded-full bg-linear-to-br from-[#7652df] via-[#7652df]/40 to-transparent blur-[90px] opacity-30"></div>
            <img 
            className="relative w-64 h-64 object-cover rounded-full border-4 border-[#7652df] lg:w-96 lg:h-96 animate-float"
            src="/assets/img/photoluan.jpeg" 
            alt="Foto de Luan Silva, Desenvolvedor Front-end" />
           </div>
        </div>
        </section>
    )
};