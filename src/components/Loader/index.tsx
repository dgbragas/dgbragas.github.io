import React from 'react';

import * as S from './styles';

const Loader: React.FC = () => (
  <S.Wrapper>
    <S.LoaderInner>
      <S.LoaderLineWrap>
        <S.LoaderLine />
      </S.LoaderLineWrap>

      <S.LoaderLineWrap>
        <S.LoaderLine />
      </S.LoaderLineWrap>

      <S.LoaderLineWrap>
        <S.LoaderLine />
      </S.LoaderLineWrap>

      <S.LoaderLineWrap>
        <S.LoaderLine />
      </S.LoaderLineWrap>

      <S.LoaderLineWrap>
        <S.LoaderLine />
      </S.LoaderLineWrap>
    </S.LoaderInner>
  </S.Wrapper>
);

export default Loader;
