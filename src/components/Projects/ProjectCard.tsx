type Props = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  url:string
};

export const ProjectCard = ({title, description, image, technologies, github, url }: Props) => {

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-[#7652df]/50">
      
      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`Imagem do projeto ${title}`}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      
      <div className="p-6">

        
        <h3 className="mb-3 text-xl font-bold text-white">
          {title}
        </h3>

        
        <p className="mb-5 text-sm leading-6 text-gray-400">
          {description}
        </p>

        
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#7652df]/10 px-3 py-1 text-xs font-medium text-[#9b7df5]"
            >
              {tech}
            </span>
          ))}
        </div> 

        <div className=" flex gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#7652df] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6441c7]"
          >
              Ver no GitHub
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#7652df] px-4 py-2 text-sm font-medium text-[#9b7df5] transition-colors hover:bg-[#7652df] hover:text-white"
          >
            Ver projeto
          </a>
          </div>

      </div>
    </article>
  );
};