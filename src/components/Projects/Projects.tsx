import { FolderOpen } from "lucide-react"
import { projetos } from "./Cards"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <section id="projects" className="px-6 py-20 border-t border-zinc-600 "> 
        <div className="max-w-7xl mx-auto py-6"> 

            <div>
                <h2 className="mb-10 text-3xl font-bold text-white flex gap-5">
                     <FolderOpen className="text-[#7652df]" size={45} />Projetos
                </h2>
            
            </div>

        
            <div className="mx-auto grid gap-8  md:grid-cols-2 lg:grid-cols-3">
                {projetos.map((item) => (
                    <ProjectCard 
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        technologies={item.technologies}
                        github={item.github}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
            
        </section>
    )
}