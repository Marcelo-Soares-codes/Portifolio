export const CardEducation = () => {
  return (
    <a
      href="https://www.instagram.com/cetepipira/"
      target="_blank"
      className="relative bg-zinc-900 flex flex-col w-4/5 sm:w-3/5 md:w-2/5 max-w-96 rounded-2xl py-7 px-5 cursor-pointer shadow-lg hover:shadow-2xl shadow-zinc-950 duration-300 hover:scale-105"
      rel="noreferrer"
    >
      <img
        src="./certificate.svg"
        alt=""
        className="w-20 absolute -left-6 -top-4 z-20"
      />
      <img
        src="./cetep-logo.png"
        alt="logo-Cetep-ipira"
        className="w-2/3 mx-auto"
      />
      <div className="mx-auto my-5 rotating-border">
        {' '}
        {/* Adicione a classe rotating-border aqui */}
        <h2 className="text-3xl">CETEP</h2>
        <div className="w-4/5 border-b-2 border-solid border-primary-600"></div>
      </div>
      <p className="text-sm text-zinc-300">
        Iniciei minha jornada na tecnologia ao concluir o ensino médio e o curso
        técnico em Informática em 2022, pelo Centro Territorial de Educação
        Profissional da Bacia do Jacuípe <b>CETEP</b>. Nesse período, desenvolvi
        experiência prática em programação, desenvolvimento de sistemas, banco
        de dados e gestão de projetos, além de fortalecer minha base em
        Tecnologia da Informação <b>TI</b>, com foco em resolver problemas reais
        e atuar em equipe.
      </p>
    </a>
  );
};
