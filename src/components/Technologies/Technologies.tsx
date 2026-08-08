
import { CodeXml } from "lucide-react"
import { TechnologyCard } from "./TechnologyCard"
import { tecnologias } from "./Cards"


export const Technologies = () => {
    return (
        <section id="technologies" className=" border-t border-zinc-600 py-20"> 
            <div className="max-w-7xl mx-auto mt-10 py-20">
                <h1 className="flex gap-5 items-center text-3xl lg:text-4xl mb-10"> 
                <CodeXml className=" text-[#7652df]" size={50}/>
                Tecnologias
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 p-6 gap-4">      
                {tecnologias.map((item) => (
                    <TechnologyCard 
                        key={item.name}
                        cardList={item}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}