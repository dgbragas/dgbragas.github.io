import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  tablet: '900px',
});

export const Wrapper = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.darkFooter};
  padding: 80px 0 40px;
  position: relative;

  &::before {
    content: '';
    background: linear-gradient(72.89deg, #141414 24.56%, #ef3f36 78.31%);
    height: 1px;
    right: 0;
    top: 0;
    position: absolute;
    width: 60%;
  }
`;

export const Social = styled.div`
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  padding-bottom: 80px;

  ${media.lessThan('medium')`
    align-items: flex-start;
    flex-direction: column;
  `}
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => colors.texts};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;

  ${media.lessThan('medium')`
    margin-bottom: 32px;
  `}
`;

export const Links = styled.div`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.texts};
  display: flex;

  ${media.lessThan('medium')`
    align-items: flex-start;
    flex-direction: column;
  `}
`;

export const Link = styled.a`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.texts};
  display: flex;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:not(:disabled):hover {
    color: ${({ theme: { colors } }) => colors.secondary};
    transform: scale(1.05);

    svg path {
      fill: ${({ theme: { colors } }) => colors.secondary};
    }
  }

  svg {
    margin-right: 12px;

    path {
      transition: all 0.3s ease;
    }
  }

  ${media.lessThan('medium')`
    & + a, & + button {
      margin-top: 24px;
    }
  `}
`;

export const NextStop = styled.div`
  ${customMedia.lessThan('tablet')`
    margin-top: 40px;
  `}

  ${media.lessThan('medium')`
    margin-top: 64px;
  `}
`;

export const Copyright = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 12px;
  padding-top: 40px;
  position: relative;

  ::before {
    content: '';
    background-color: rgba(255, 255, 255, 0.1);
    left: 0;
    height: 1px;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const CopyrightBadge = styled.small`
  display: inline-block;
  font-size: 13px;
  font-style: italic;
  margin-left: 46px;
  position: relative;

  &::before {
    content: '';
    background: rgba(255, 255, 255, 0.6);
    height: 1px;
    left: -36px;
    position: absolute;
    top: 6px;
    width: 30px;
  }
`;
