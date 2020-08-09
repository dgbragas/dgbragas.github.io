import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../assets/icons/button-arrow.svg';

import DefaultLayout from '../../layouts/Default';
import Slider from '../../components/Slider';

import * as S from './styles';
import If from '../../components/If';

interface StateProps {
  full_description: string;
  images: string[];
  title: string;
  previewURL?: string;
}

const ViewProject: React.FC = () => {
  const { state } = useLocation<StateProps>();

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.ProjectSlide>
          <Slider images={state.images} />
        </S.ProjectSlide>

        <S.ProjectInfos>
          <S.Title>{state.title}</S.Title>
          <S.Description>{state.full_description}</S.Description>
          <If condition={!!state.previewURL}>
            <S.Preview href={state.previewURL}>
              <div>
                <ArrowIcon />
              </div>
              Protótipo navegável
            </S.Preview>
          </If>
        </S.ProjectInfos>
      </S.Wrapper>
    </DefaultLayout>
  );
};

export default ViewProject;
