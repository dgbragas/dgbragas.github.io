import {
  Post01_Image01,
  Post01_Image02,
  Post01_Image03,
  Post02_Image01,
  Post02_Image02,
  Post02_Image03,
  Post02_Image04,
  Post02_Image05,
  Post03_Image01,
  Post03_Image02,
  Post04_Image01,
  Post05_Image01,
  Post05_Image02,
  Post05_Image03,
  Post05_Image04,
  Post06_Image01,
  Post06_Image02,
  Post06_Image03,
  Post07_Image01,
  Post07_Image02,
  Post07_Image03,
  Post08_Image01,
  Post08_Image02,
  Post08_Image03,
  Post09_Image01,
  Post09_Image02,
  Post09_Image03,
  Post10_Image01,
  Post10_Image02,
  Post10_Image03,
  Post11_Image01,
  Post11_Image02,
  Post12_Image01,
  Post12_Image02,
  Post12_Image03,
  Post12_Image04,
  Post13_Image01,
  Post13_Image02,
  Post13_Image03,
  Post13_Image04,
  Post13_Image05,
  Post14_Image01,
  Post14_Image02,
  Post14_Image03,
} from './images.js';

const posts = [
  {
    id: 1,
    title: 'Platform Redesign',
    name: 'Semantix Sagitário',
    description:
      'O Semantix Sagitário é um produto interno da @semantixbr para o qual fui contratado com o objetivo de: Desenvolver uma nova estrutura visual; Inserir novas funcionalidades; Mapear os próximos fluxos; e Iniciar o Style Guide do sistema.',
    type: 'design',
    images: [Post01_Image01, Post01_Image02, Post01_Image03],
  },
  {
    id: 2,
    title: 'Redesign Concept',
    name: 'Portal Aberje',
    description:
      'A Associação Brasileira de Comunicação Empresarial, ou Aberje, é uma empresa focada em fortalecer o papel da comunicação nas empresas e instituições através de: Estudos estratégicos; Oferecimento de cursos; Reconhecimento de melhores práticas entre outros.',
    type: 'design',
    images: [
      Post02_Image01,
      Post02_Image02,
      Post02_Image03,
      Post02_Image03,
      Post02_Image04,
      Post02_Image05,
    ],
  },
  {
    id: 3,
    title: 'Portfólio',
    name: 'Dashboard Design',
    description:
      'Alguns meses após a finalização do 2º semestre da faculdade de Análise e Desenvolvimento de Sistemas, e com maiores conhecimentos de design, decidi fazer o redesign de algumas telas do nosso projeto entregue: Uma dashboard para monitoria de hardware do computador.',
    type: 'design',
    images: [Post03_Image01, Post03_Image02],
  },
  {
    id: 4,
    title: 'Logo Design',
    name: 'Identidade Visual',
    description:
      'Projetos de Identidade Visual certamente estão bem distantes de estar em minhas hard skills. Entretanto, no 4º semestre da faculdade, foi-me passado um desafio para desenvolver uma identidade e um design à um app de turismos; nesse processo surgiu o Straway.',
    type: 'design',
    images: [Post04_Image01],
  },
  {
    id: 5,
    title: 'Website Creation',
    name: 'devs.nation',
    description:
      'A devs.nation foi uma proposta de startup realizada pelo @danilodonato onde fui responsável de desenvolver do total zero uma landing page e a estrutura inicial do branding de marca da companhia.',
    previewURL:
      'https://www.figma.com/proto/E4M9qWLPmC20gb8MPYlvbe/devs.nation?node-id=10%3A114&scaling=min-zoom',
    type: 'design',
    images: [Post05_Image01, Post05_Image02, Post05_Image03, Post05_Image04],
  },
  {
    id: 6,
    title: 'Portfólio',
    name: 'Developer Website',
    description:
      'No decorrer da minha carreira encontrei vários desenvolvedores que diziam "ter dificuldades com design" e, por este motivo, acavam não possuindo um portfólio. A partir disso pensei como seria um possível "template default" para desenvolvedores e criei uma landing page relativamente curta abordando seções básicas.',
    type: 'design',
    previewURL:
      'https://www.figma.com/proto/861RVvPnPX8agdimDNFI0s/Developer-Landing?node-id=36%3A6&scaling=min-zoom',
    images: [Post06_Image01, Post06_Image02, Post06_Image03],
  },
  {
    id: 7,
    title: 'Redesign Concept',
    name: 'Grupo Zap',
    description:
      'Neste estudo a minha proposta foi desenvolver a primeira dobra da landing page da companhia, buscando apresentar os principais call to actions ao usuário.',
    type: 'design',
    images: [Post07_Image01, Post07_Image02, Post07_Image03],
  },
  {
    id: 8,
    title: 'Portfólio',
    name: 'Rocketseat + GitHub',
    description:
      'Um projeto com requisitos mais técnicos, onde a proposta foi juntar a API da Rocketseat (disponível publicamente no curso Starter) e a API pública do GitHub para construir uma dashboard de gerenciamento de repositórios.',
    previewURL:
      'https://www.figma.com/proto/V3FyNCQU3B6gwxLqXbPlZK/React-Projects?node-id=43%3A49&scaling=min-zoom',
    type: 'design',
    images: [Post08_Image01, Post08_Image02, Post08_Image03],
  },
  {
    id: 9,
    title: 'Challenge Redesign',
    name: 'Portfólio - @semantixbr',
    description:
      'O teste para ingressar como Desenvolvedor Front-end na @semantixbr consistia em consumir uma Mocked API para apresentar gráficos de três maneiras diferentes (Pizza, Barras e Linhas) de acordo com os dados obtidos. Entretanto ao mesmo tempo em que estava elaborando o desafio também pensei que ele poderia ser um pouco diferente, visando principalmente uma maneira mais fácil de validar o nível de conhecimento dos desenvolvedores.',
    previewURL:
      'https://www.figma.com/proto/iCBQzbicigWsEsNBrbsowE/Semantix-Front-end-Test---Redesign?node-id=955%3A0&scaling=min-zoom',
    type: 'design',
    images: [Post09_Image01, Post09_Image02, Post09_Image03],
  },
  {
    id: 10,
    title: 'Portfólio Redesign',
    name: 'Danilo Donato',
    description:
      'Durante o último mês do ano passado (Dez. de 2.019) um dos meus amigos comentou que estava com planos para publicar um portfólio online mostrando os seus projetos desenvolvidos e também uma autoapresentação ao mercado.',
    previewURL:
      'https://www.figma.com/proto/4ZDftsi7oTFz0nAmUEhrtm/Danilo-Donato?node-id=10%3A38&scaling=min-zoom',
    type: 'design',
    images: [Post10_Image01, Post10_Image02, Post10_Image03],
  },
  {
    id: 11,
    title: 'Website Creation',
    name: 'Peeh Personal',
    description:
      'Uma landing page relativamente enxuta mostrando um pouco das principais skills de um Personal Trainer em conjunto com uma página de contato (onde busquei inserir boas práticas de design e acessibilidade em formulários) para possíveis agendamentos.',
    previewURL:
      'https://www.figma.com/proto/iR5brZGsnkNGhlZIWkvj4V/Pedro-Henrique?node-id=23%3A11&scaling=min-zoom',
    type: 'design',
    images: [Post11_Image01, Post11_Image02],
  },
  {
    id: 12,
    title: 'Redesign Concept',
    name: 'Zup Innovation',
    description:
      'Neste estudo busquei inspirações que me auxiliassem no desenvolvimento de uma interface clean que mostrasse as principais informações da companhia (como produtos, depoimentos, entre outros) em poucos scrolls do usuário. Para isso segui meu fluxo padrão de construção de interfaces: Coleta de Referências; Rabiscroframe; Branding Book; Wireframe; e Protótipo de Alta Fidelidade (o dito "design" em si).',
    previewURL:
      'https://www.figma.com/proto/lDHfxNI2VwrRcGXvBZ4OOw/Redesign%3A-Zup-Innovation?node-id=35%3A82&scaling=min-zoom',
    type: 'design',
    images: [Post12_Image01, Post12_Image02, Post12_Image03, Post12_Image04],
  },
  {
    id: 13,
    title: 'Redesign Concept',
    name: 'Vulpi App',
    description:
      'Navegando pelas postagens do LinkedIn encontrei vários profissionais divulgando seus perfis através da aplicação da Vulpi (uma empresa que oferece um serviço de recrutamento e indicação de profissionais de TI à outras companhias) e, através disto, vi uma boa oportunidade de colocar em prática alguns dos conhecimentos adquiridos no treinamento de design uiBoost.',
    previewURL:
      'https://www.figma.com/proto/smAb0iz8gEovBBDL0ydDdU/Redesign---Vulpi-App?node-id=25%3A31&scaling=min-zoom',
    type: 'design',
    images: [
      Post13_Image01,
      Post13_Image02,
      Post13_Image03,
      Post13_Image04,
      Post13_Image05,
    ],
  },
  {
    id: 14,
    title: 'Website Creation',
    name: 'Carlos Eduardo',
    description:
      'Em Janeiro de 2.020 o @carlospandolf comentou sobre estar querendo desenvolver um portfólio para mostrar alguns dos seus projetos. A partir disso segui o meu processo padrão para estruturação de layouts (coleta de referências, wireframing, ...) em conjunto de um alinhamento de expectativas e desejos para construir uma landing page que fosse aderente às necessidades.',
    previewURL:
      'https://www.figma.com/proto/hHi5eDCRjsbDIsiX365uTH/Cadu-Ferreira?node-id=19%3A124&scaling=min-zoom',
    type: 'design',
    images: [Post14_Image01, Post14_Image02, Post14_Image03],
  },
];

export default posts;
