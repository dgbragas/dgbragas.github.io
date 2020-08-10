import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  border-radius: 5px;
  display: block;
  min-height: 320px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: transform 0.3s ease;
  min-width: 320px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 32px;
  width: 100%;
  z-index: 1;
`;

export const CardInfos = styled.div``;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const Client = styled.h2`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 20px;
  line-height: 150%;
`;

export const BgImage = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Shadow = styled.div`
  background: linear-gradient(
    149.81deg,
    rgba(20, 20, 20, 0.9) 3.91%,
    rgba(20, 20, 20, 0) 60.5%
  );
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
