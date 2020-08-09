import React from 'react';

import * as S from './styles';

interface AppsCardProps {
  linkTo: {
    pathname: string;
    state?: {
      images: string[];
      title: string;
      full_description: string;
    };
  };
  title: string;
  client: string;
  imageURL: string;
}

const DesignCard: React.FC<AppsCardProps> = ({
  linkTo,
  title,
  client,
  imageURL,
}) => (
  <S.Link to={linkTo}>
    <S.Content>
      <S.CardInfos>
        <S.Title>{title}</S.Title>
        <S.Client>{client}</S.Client>
      </S.CardInfos>
    </S.Content>
    <S.BgImage>
      <S.Shadow />
      <S.Image src={imageURL} />
    </S.BgImage>
  </S.Link>
);

export default DesignCard;
