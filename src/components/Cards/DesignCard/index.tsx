import React from 'react';

import * as S from './styles';

interface AppsCardProps {
  linkTo: {
    pathname: string;
    state?: {
      images: string[];
      title: string | undefined;
      full_description: string;
      previewURL: string | undefined;
    };
  };
  title: string | undefined;
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
