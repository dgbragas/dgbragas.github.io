import React from 'react';

import GridContainer from '../GridContainer';

import * as S from './styles';

const NotificationBadge: React.FC = () => (
  <S.Wrapper>
    <GridContainer>
      <S.Notification>
        Este site é um
        <span>beta test</span> open-source do meu website. Encontrou algum erro
        e quer me ajudar a corrigir?
        <a
          href="https://github.com/dgbragas/dgbragas.netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me envie um pull-request
        </a>
        💛
      </S.Notification>
    </GridContainer>
  </S.Wrapper>
);

export default NotificationBadge;
