export const projetos = [
  {
    id: 1,
    titulo: "Nomad Explorer",
    texto: `Nomad Explorer é uma aplicação feita para ajudar a planejar e organizar viagens, seja a trabalho ou lazer. A combinação do back-end em Java e Spring Boot com o front-end em React oferece uma experiência fluida e moderna, com funcionalidades como envio de e-mails e uma interface responsiva. A ideia é tornar a organização de viagens mais prática e sem complicação.`,
    tecnologias: ["Java", "Spring Boot e Spring Boot Starter Mail", "React", "TypeScript", "TailwindCSS", "React Router", "Axios"],
    links: [
      { label: "Repositório do projeto Back-end", url: "https://github.com/LeonardoSardagna/java_nomad_explorer" },
      { label: "Repositório do projeto Front-end", url: "https://github.com/LeonardoSardagna/react_nomad_explorer" },
      { label: "Publicação no meu LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7224156819919667201/" }
    ]
  },
  {
    id: 2,
    titulo: "Voll-Med",
    texto: `Voll-Med é uma API RESTful construída com Java e Spring Boot, focada em gerenciar registros de médicos, pacientes e consultas. A segurança é garantida com Spring Security e JWT, proporcionando um sistema de autenticação robusto. Esse projeto me ajudou a aprofundar meus conhecimentos em back-end e a entender como gerenciar dados sensíveis de forma eficiente.`,
    tecnologias: ["Java", "MySQL", "Spring Boot e Spring Security", "JWT"],
    links: [
      { label: "Repositório do Projeto Back-end", url: "https://github.com/LeonardoSardagna/vollmed" }
    ]
  },
  {
    id: 3,
    titulo: "Movie Films",
    texto: `Movie Films é uma aplicação que fornece detalhes sobre séries de TV, com informações sobre episódios, temporadas e muito mais. Criada com Java, Spring Boot, React e TypeScript. Desenvolvi essa aplicação para colocar em prática meus conhecimentos em java.`,
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
    links: [
      { label: "Repositório do projeto Front-end", url: "https://github.com/LeonardoSardagna/reactFilms" },
      { label: "Repositório do projeto Back-end", url: "https://github.com/LeonardoSardagna/javaFilms" },
      { label: "Publicação no meu LinkedIn", url: "https://www.linkedin.com/feed/update/urn:li:activity:7204497261597237248/" }
    ]
  },
  {
    id: 4,
    titulo: "Organograma",
    texto: `Inspirada na série "Rick e Morty", essa aplicação web permite que os usuários criem times com personagens dos diferentes universos da série. Desenvolvi essa aplicação para colocar em prática meus conhecimentos em React.`,
    tecnologias: ["React", "HTML5", "CSS3"],
    links: [
      { label: "Repositório do projeto Front-end", url: "https://github.com/LeonardoSardagna/organograma.git" },
      { label: "Versel", url: "https://organograma-sigma-one.vercel.app/" }
    ]
  },
  {
    "id": 5,
    "titulo": "Encurtador de Links",
    "texto": "Este projeto implementa um sistema simples e funcional de encurtamento de URLs utilizando a infraestrutura da AWS. Ele permite criar links curtos que redirecionam para URLs originais e têm um prazo de expiração configurável. O sistema é totalmente gerenciado de forma serverless, utilizando funções AWS Lambda para processar as requisições de geração e redirecionamento das URLs. As URLs encurtadas e seus metadados são armazenados de forma segura no Amazon S3. O projeto foi dividido em dois repositórios para melhor organização e modularidade. O primeiro repositório, URLShortenerCreator, é responsável pela geração das URLs curtas e pelo armazenamento dos dados no S3. O segundo repositório, ShortURLRedirect, contém a lógica de redirecionamento, validando o código da URL curta e realizando o encaminhamento para o destino original, verificando também o prazo de expiração.",
    "tecnologias": [
      "Java 17",
      "AWS Lambda",
      "Amazon S3",
      "AWS API Gateway",
      "Serverless Architecture"
    ],
    "links": [
      { 
        "label": "Repositório do primeiro projeto no GitHub", 
        "url": "https://github.com/LeonardoSardagna/URLShortenerCreator" 
      },
      { 
        "label": "Repositório do segundo projeto no GitHub", 
        "url": "https://github.com/LeonardoSardagna/ShortURLRedirect" 
      }
    ]
  },  
];