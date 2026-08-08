import { Icon, UserRound } from "lucide-react";
import { card } from "./AboutCard";

export const About = () => {
    return (
        <section id="about" className="min-h-scree border-t border-zinc-600 py-20 mb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                
                
                <div className="flex flex-col gap-7 text-center lg:text-left">
                    <h1 className="text-4xl text-white/70 font-bold flex gap-5 items-center">
                        <UserRound 
                        size={50}
                        className="text-[#7652df]"
                        />Sobre mim</h1>

                    <p className="text-base lg:text-xl leading-relaxed text-grayu-300"> Sou desenvolvedor Front-End apaixonado por criar interfaces modernas, intuitivas e responsivas.Atualmente estudo React, TypeScript, Next.js e Tailwind CSS, sempre buscando escrever código limpo, reutilizável e seguindo boas práticas.Meu objetivo é conquistar minha primeira oportunidade na área, contribuindo para projetos reais enquanto continuo evoluindo como desenvolvedor.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {card.map((card) => {
                        const Icon = card.icon; 
                        return (
                            <div key={card.title} 
                            className="p-6 rounded-xl bg-zinc-900 border-zinc-800 flex items-center flex-col gap-3 "
                            > 
                                <Icon 
                                className="w-8 h-8 text-[#7652df]"
                                />
                                <h3
                                className="font-bold text-xl"
                                > {card.title}</h3>
                                <p
                                className="text-gray-400 text-center"
                                >{card.subtitle}</p>
                            </div>
                        )
                    })}
                </div>

                </div>
            </div>
        </section>
    )
};