import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 pt-10 md:pt-0 grid grid-cols-2 md:grid-cols-3 justify-around text-white font-montserrat">
      <nav className="flex justify-center items-center order-2 md:order-1">
        <ul className="flex flex-col gap-2 text-center">
          <a href="#home">
            <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
              Home
            </li>
          </a>
          <a href="#projetos">
            <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
              Portfolio
            </li>
          </a>
          <a href="#contato">
            <li className="mx-2 text-sm sm:text-base transition duration-200 ease-in-out transform hover:scale-110 hover:text-primary-100 cursor-pointer">
              Contato
            </li>
          </a>
        </ul>
      </nav>
      <a
        href="#home"
        className="order-1 md:order-2 col-span-2 md:col-span-1 mx-auto my-auto"
      >
        <img
          src="./logo.png"
          alt="Marcelo Soares"
          className="w-40  object-contain"
        />
      </a>
      <div className="flex flex-col justify-center items-center order-3 text-center mb-3 mt-5 mr-10 md:mr-0">
        <h2 className="text-xl mb-5">Contato</h2>
        <div className="flex flex-col gap-3 ">
          <a
            href="mailto:marcelo.soares1070@gmail.com"
            target="_blank"
            className="flex text-xs md:text-sm cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 w-5 h-5" />
            <span>marcelo1070@gmail.com</span>
          </a>
          <a
            href="tel:+5571999867597"
            target="_blank"
            className="flex text-xs md:text-sm cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 w-5 h-5" />
            <span>+55 71 9 9986-7597</span>
          </a>
          <a
            href="https://github.com/Marcelo-Soares-codes"
            target="_blank"
            className="flex text-xs md:text-sm cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2 w-5 h-5" />
            <span>@Marcelo-Soares-codes</span>
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-soares-codes/"
            target="_blank"
            className="flex text-xs md:text-sm cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            <span>@Marcelo-soares-codes</span>
          </a>
          <a
            href="https://www.instagram.com/s.soares_marcelo/"
            target="_blank"
            className="flex text-xs md:text-sm cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <Instagram className="mr-2 w-5 h-5" />
            <span>@S.soares_marcelo</span>
          </a>
        </div>
      </div>
      <span className="order-4 col-span-2 md:col-span-3 text-xs mx-auto flex justify-end items-end mb-3">
        Marcelo Soares - Todos os direitos reservados &copy;
      </span>
    </footer>
  );
};
