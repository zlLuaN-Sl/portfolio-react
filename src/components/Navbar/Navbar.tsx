'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"



export const Navbar = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const links = [ 
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Tecnologias", href: "#technologies" },
        { name: "Projetos", href: "#projects" },
        
        { name: "Contato", href: "#contact" },
    ]

    const navLink = "text-white text-md font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-110"

    return (
        <header className="bg-[#040509]" >
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 " >
                <div>
                    <img src="/assets/img/logo.png" alt="Logo"
                    className="w-40 md:-48 lg:w-56 h-auto rounded-md" />
                </div>

                <button 
                className=" cursor-pointer  lg:hidden transition-transform duration-300 hover:scale-110"
                onClick={toggleMenu} aria-label="Abrir menu"> 
                         <Menu size={35} />
                </button>

                    <ul className={`fixed lg:static top-0 right-0 w-full h-screen lg:w-auto lg:h-auto bg-[#040509] flex flex-col lg:flex-row justify-center items-center gap-8 text-white text-xl transition-transform duration-500 z-99
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                        lg:translate-x-0
                    `}>
                        <button 
                        className="absolute top-10 right-8 transition-transform duration-300 hover:scale-110 lg:hidden"
                        aria-label="Fechar menu"
                        onClick={toggleMenu}
                        >
                            <X size={35}/>
                        </button>

                        {links.map((link) => (
                            <li key={link.href} className={navLink} >
                                <a href={link.href} onClick={toggleMenu}>
                                    {link.name}
                                </a>
                            </li>
                        ) ) }
                        <li>
                            <a 
                            className="border border-cyan-400 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                           
                            href="/curriculo.pdf" target="_blank"
                            >Currículo</a>
                        </li>
                    </ul>
                
            </nav>
        </header>
    )
}