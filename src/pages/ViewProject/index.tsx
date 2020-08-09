import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../assets/icons/button-arrow.svg';

import DefaultLayout from '../../layouts/Default';
import Slider from '../../components/Slider';
import * as S from './styles';

const ViewProject: React.FC = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <DefaultLayout>
      <S.Wrapper>
        <S.ProjectSlide>
          <Slider />
        </S.ProjectSlide>

        <S.ProjectInfos>
          <S.Title>Danilo Donato</S.Title>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent.
          </S.Description>
          <S.Preview>
            <div>
              <ArrowIcon />
            </div>
            Protótipo navegável
          </S.Preview>
        </S.ProjectInfos>
      </S.Wrapper>
    </DefaultLayout>
  );
};

export default ViewProject;
