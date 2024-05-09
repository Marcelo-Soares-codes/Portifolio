type ProjectType = {
  name: string;
  src: string;
  description: string;
  github: string;
  deploy?: string;
};

export const DataProjects: ProjectType[] = [
  {
    name: 'Meu Momento',
    src: './meu-momento-photo.png',
    description:
      'Meu Momento é um aplicativo desenvolvido para gravar replays em quadra durante atividades esportivas, permitindo aos jogadores revisitar momentos específicos do jogo posteriormente.',
    github: 'https://github.com/Marcelo-Soares-codes/Meu-Momento',
    deploy: 'https://meu-momento.vercel.app/',
  },
  {
    name: 'Spelet',
    src: './spelet-photo.png',
    description:
      'Spelet é um jogo da memória com o tema de programação, desenvolvido com o objetivo de divertir e reforçar o conhecimento adquirido em minha trilha de aprendizagem do React e Tailwind.',
    github: 'https://github.com/Marcelo-Soares-codes/Spelet',
    deploy: 'https://spelet.vercel.app/',
  },
  {
    name: 'CineQuiz',
    src: './cinequiz-photo.png',
    description:
      'CineQuiz é uma emocionante aplicação de perguntas e respostas que mergulha você no fascinante universo do cinema e das séries. Desafie seus conhecimentos e mergulhe em um mar de perguntas inteligentes sobre seus filmes e séries favoritos.',
    github: 'https://github.com/Marcelo-Soares-codes/CineQui',
    deploy: 'https://cinequiz.netlify.app/',
  },
  {
    name: 'T.R.F.S.E',
    src: './trfse-photo.png',
    description:
      'O sistema reconhece os rostos dos alunos e funcionários registrados na escola. Ao chegar à portaria, o sistema identifica a pessoa e libera a entrada apenas para aqueles autorizados, garantindo um ambiente seguro',
    github: 'https://github.com/Marcelo-Soares-codes/Reconhecimento-facial',
    deploy: 'https://github.com/Marcelo-Soares-codes/Reconhecimento-facial',
  },
  {
    name: 'Tesla News',
    src: './tesla-news-photo.png',
    description:
      'O Tesla News é um aplicativo web que fornece notícias atualizadas sobre a empresa Tesla. Ele utiliza a API de notícias para recuperar os últimos artigos relacionados à Tesla e os exibe de forma organizada para os usuários.',
    github: 'https://github.com/Marcelo-Soares-codes/tesla-news',
    deploy: 'https://tesla-news-app.netlify.app/',
  },
];
