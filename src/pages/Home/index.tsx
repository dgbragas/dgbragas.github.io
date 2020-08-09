import React from 'react';

import DefaultLayout from '../../layouts/Default';

import * as S from './styles';
import AppsCard from '../../components/Cards/AppsCard';
import DesignCard from '../../components/Cards/DesignCard';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <S.Introduction>
        <S.Title>
          Designer de Interfaces & Desenvolvedor Front-end da região do Grande
          ABC, São Paulo
        </S.Title>
        <S.Description>
          Entregando as melhores soluções às companhias através de uma stack
          focada em tecnologia e design.
        </S.Description>

        <S.Social>
          <S.SocialLink>Instagram</S.SocialLink>
          <S.SocialLink>LinkedIn</S.SocialLink>
          <S.CVLink>Currículo profissional</S.CVLink>
        </S.Social>
      </S.Introduction>

      <S.Portfolio>
        <S.PortfolioNav>
          <S.NavButtons>
            <S.Button isCurrent>Todos trabalhos</S.Button>
            <S.Button isCurrent={false}>UI Design</S.Button>
            <S.Button isCurrent={false}>Apps</S.Button>
          </S.NavButtons>
        </S.PortfolioNav>

        <S.PortfolioMosaic>
          <AppsCard
            title="challenge__cosmobots"
            description="Challenge passed by CosmoBots to compete for the Front-end Developer vacancy"
            redirectTo="https://github.com/dgbragas"
          />
          <DesignCard
            title="Website creation"
            client="Danilo Donato"
            imageURL="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          />
          <DesignCard
            title="Website creation"
            client="Danilo Donato"
            imageURL="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          />
          <AppsCard
            title="challenge__cosmobots"
            description="Challenge passed by CosmoBots to compete for the Front-end Developer vacancy"
            redirectTo="https://github.com/dgbragas"
          />
          <DesignCard
            title="Website creation"
            client="Danilo Donato"
            imageURL="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          />
          <AppsCard
            title="challenge__cosmobots"
            description="Challenge passed by CosmoBots to compete for the Front-end Developer vacancy"
            redirectTo="https://github.com/dgbragas"
          />
          <DesignCard
            title="Website creation"
            client="Danilo Donato"
            imageURL="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          />
          <AppsCard
            title="challenge__cosmobots"
            description="Challenge passed by CosmoBots to compete for the Front-end Developer vacancy"
            redirectTo="https://github.com/dgbragas"
          />
        </S.PortfolioMosaic>
      </S.Portfolio>
    </DefaultLayout>
  );
};

export default Home;
