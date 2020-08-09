import styled, { css } from 'styled-components';

interface ButtonProps {
  isCurrent: boolean;
}

export const Introduction = styled.section`
  margin: 136px 0 96px;
  max-width: 600px;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 32px;
  line-height: 133%;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 20px;
  line-height: 150%;
  margin-top: 16px;
  opacity: 0.8;
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
  margin-top: 32px;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.texts};
  font-weight: 700;
  position: relative;
  transition: all 0.3s ease;

  & + a {
    margin-left: 32px;
  }

  &::after {
    content: '';
    background-color: ${({ theme: { colors } }) => colors.texts};
    bottom: -4px;
    left: 0;
    height: 2px;
    opacity: 0.2;
    position: absolute;
    width: 100%;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};

    &::after {
      background-color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const CVLink = styled.a`
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.texts};
  font-weight: 700;
  margin-left: 102px !important;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }

  &::before {
    content: '';
    background-color: ${({ theme: { colors } }) => colors.texts};
    height: 2px;
    opacity: 0.4;
    left: -80px;
    position: absolute;
    top: 8px;
    width: 60px;
  }
`;

export const Portfolio = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 96px 0;
`;

export const PortfolioNav = styled.aside`
  max-width: 176px;
  margin-right: 90px;
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;

  button {
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  opacity: 0.4;

  & + button {
    margin-top: 24px;
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      opacity: 1;

      &::before {
        content: '> ';
        margin-right: 8px;
      }
    `}
`;

export const PortfolioMosaic = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;
