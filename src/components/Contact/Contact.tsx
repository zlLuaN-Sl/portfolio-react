'use client'
import { Mail, MailPlus, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!name.trim() || !message.trim()) {
            alert("Preencha seu nome e sua mensagem.");
            return; 
        }
        
        const text = `Olá, Luan! Meu nome é ${name}. 
        ${message}`

        const whatsappUrl = `https://wa.me/5511964261935?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");
    };


  return (
    <section id="contact" className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

        
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white flex gap-4 items-center">
                <Mail className="text-[#9b7df5]" size={33} /> Contato
          </h2>

          <h3 className="mb-3 text-xl font-semibold text-[#9b7df5]">
                  Vamos conversar?
          </h3>

          <p className="mb-8 max-w-md leading-7 text-gray-400">
            Estou sempre aberto a novas oportunidades, projetos
            interessantes e conexões profissionais.
          </p>

          <a
            href="mailto:luan0319silva@gmail.com"
            className="text-gray-300 transition-colors hover:text-[#9b7df5] flex gap-4 mb-4"
          >
            <MailPlus className="text-[#9b7df5]" /> luan0319silva@gmail.com
          </a>

          <a
            href="https://wa.me/5511964261935" target="_blank"
            className="text-gray-300 transition-colors hover:text-[#9b7df5] flex gap-4"
          >
               <Phone className="text-[#9b7df5]" /> (11) 964261935
          </a>

        </div>

        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Nome"
            className="rounded-lg border border-white/10 bg-[#111820] px-4 py-3 text-sm text-white outline-none transition focus:border-[#7652df]"
          value={name}
          onChange={e => setName(e.target.value)}
          />

          <textarea
            placeholder="Mensagem"
            rows={6}
            className="resize-none rounded-lg border border-white/10 bg-[#111820] px-4 py-3 text-sm text-white outline-none transition focus:border-[#7652df]"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="rounded-lg bg-[#7652df] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#6441c7] flex gap-4 items-center justify-center cursor-pointer"
          >
            Enviar mensagem <Send size={17} />
          </button>

        </form>

      </div>
    </section>
  );
};