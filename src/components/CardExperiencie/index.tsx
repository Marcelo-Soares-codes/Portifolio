export const CardExperiencie = () => {
  return (
    <a
      href="https://www.linkedin.com/company/codelabsusa/"
      target="_blank"
      className="relative bg-zinc-900 flex flex-col w-4/5 sm:w-3/5 md:w-2/5 max-w-96 rounded-2xl py-7 px-5 cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 duration-300 hover:scale-105"
      rel="noreferrer"
    >
      <img
        src="./codelabsusa_logo.png"
        alt="logo-Cetep-ipira"
        className="w-2/3 mx-auto"
      />
      <div className="mx-auto my-5 rotating-border">
        {' '}
        {/* Adicione a classe rotating-border aqui */}
        <h2 className="text-3xl">CodeLabs USA</h2>
        <div className="w-4/5 border-b-2 border-solid border-primary-600"></div>
      </div>
      <p className="text-sm text-zinc-300">
        Na <b>CodeLabs USA</b>, empresa americana com sede na Flórida e foco em
        soluções ágeis para brasileiros nos EUA, atuo como{' '}
        <b>Desenvolvedor Front-end</b> desde maio de 2024. Esse é meu primeiro
        emprego fixo na área de desenvolvimento. Crio interfaces modernas,
        acessíveis e responsivas, usando tecnologias como React, NextUI e
        Express. Cresço profissionalmente junto com a empresa.
      </p>
    </a>
  );
};
