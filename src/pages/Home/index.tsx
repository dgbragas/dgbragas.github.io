import React from 'react';

import DefaultLayout from '../../layouts/Default';
import Card from '../../components/Card';

import * as S from './styles';

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
          <Card />
          <Card />
          <Card />
        </S.PortfolioMosaic>
      </S.Portfolio>
    </DefaultLayout>
  );
};

export default Home;
