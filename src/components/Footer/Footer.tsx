import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        
        <div>
          <img
            src="/assets/img/footer.png"
            alt="Luan Silva"
            className="h-10 w-auto rounded-full"
          />
        </div>

        
        <p className="text-sm text-gray-400">
          @Desenvolvido por:{" "}
          <span className="text-white/90">Luan Silva</span>
        </p>

        
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/zlLuaN-Sl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-colors hover:text-[#7652df]"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/luansilvadevelop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-colors hover:text-[#7652df]"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="#top"
            aria-label="Voltar ao topo"
            className="text-gray-400 transition-colors hover:text-[#7652df]"
          >
            <ArrowUp className="bg-[#111820] p-1 rounded-full  text-white hover:text-[#7652df]" size={30} />
          </a>

        </div>

      </div>
    </footer>
  );
};