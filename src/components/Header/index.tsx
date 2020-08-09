import React from 'react';

import logoIcon from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.png';

import GridContainer from '../GridContainer';

import * as S from './styles';

const Header: React.FC = () => (
  <S.Header>
    <GridContainer>
      <S.Nav>
        <S.ReturnHome to="/">
          <S.Logo src={logoIcon} alt="Voltar para home" />
        </S.ReturnHome>
        <S.Avatar src={avatarImg} alt="Avatar - Diego Braga" />
      </S.Nav>
    </GridContainer>
  </S.Header>
);

export default Header;
