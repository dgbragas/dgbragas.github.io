import React from 'react';

import GridContainer from '../GridContainer';

import { ReactComponent as DribbbleIcon } from '../../assets/icons/dribbble.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg';

import * as S from './styles';

const Footer: React.FC = () => (
  <S.Wrapper>
    <GridContainer>
      <S.Social>
        <S.Follow>
          <S.Title>Acompanhe o meu trabalho</S.Title>
          <S.Links>
            <S.Link>
              <DribbbleIcon />
              Dribbble
            </S.Link>

            <S.Link>
              <InstagramIcon />
              Instagram
            </S.Link>
          </S.Links>
        </S.Follow>

        <S.NextStop>
          <S.Title>Próxima parada</S.Title>
          <S.Links>
            <S.Link>
              <LinkedinIcon />
              LinkedIn
            </S.Link>

            <S.Link>
              <WhatsappIcon />
              WhatsApp
            </S.Link>

            <S.Link as="button" disabled>
              Portfólio
            </S.Link>

            <S.Link as="button" disabled>
              Sobre mim
            </S.Link>

            <S.Link as="button" disabled>
              Blog
            </S.Link>

            <S.Link as="button" disabled>
              Contato
            </S.Link>
          </S.Links>
        </S.NextStop>
      </S.Social>

      <S.Copyright>
        © 2020. Todos os direitos reservados a dgbragas
        <S.CopyrightBadge>Site beta test</S.CopyrightBadge>
      </S.Copyright>
    </GridContainer>
  </S.Wrapper>
);

export default Footer;
