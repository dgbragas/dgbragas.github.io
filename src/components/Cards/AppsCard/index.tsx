import React from 'react';

import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg';

import * as S from './styles';

interface AppsCardProps {
  redirectTo: string | undefined;
  title: string;
  description: string;
}

const AppsCard: React.FC<AppsCardProps> = ({
  redirectTo,
  title,
  description,
}) => (
  <S.Redirect href={redirectTo} target="_blank" rel="noopener">
    <S.Content>
      <GithubIcon />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Redirect>
);

export default AppsCard;
