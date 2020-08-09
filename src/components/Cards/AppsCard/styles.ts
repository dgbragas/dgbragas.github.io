import styled from 'styled-components';

export const Redirect = styled.a`
  background-color: #242428;
  border-radius: 5px;
  display: block;
  padding: 32px 40px;
  text-decoration: none;
  transition: transform 0.3s ease;

  svg {
    margin-bottom: 24px;

    g,
    g path,
    rect {
      transition: all 0.3s ease;
    }
  }

  &:hover {
    transform: scale(1.05);

    svg {
      rect {
        stroke: ${({ theme: { colors } }) => colors.secondary};
        opacity: 1;
      }

      g {
        opacity: 1;

        path {
          fill: ${({ theme: { colors } }) => colors.secondary};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 4px;
  text-transform: uppercase;
  word-wrap: break-word;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  font-size: 14px;
  line-height: 160%;
  opacity: 8;
`;
