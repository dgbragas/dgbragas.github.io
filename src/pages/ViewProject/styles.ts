import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1.5fr 1fr;
  padding: 104px 0 128px;
`;

export const ProjectSlide = styled.div`
  height: 700px;
  width: 100%;
`;

export const ProjectInfos = styled.div`
  border: 1px solid rgba(252, 252, 252, 0.1);
  border-radius: 10px;
  height: fit-content;
  padding: 64px;
`;

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.secondary};
  background: linear-gradient(238.86deg, #fa9401 15.27%, #ef3f36 96.96%) 100%
    no-repeat;
  font-size: 32px;
  line-height: 133%;
  margin-bottom: 13px;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.texts};
  line-height: 180%;
  margin-bottom: 40px;
  opacity: 0.8;
`;

export const Preview = styled.a`
  cursor: pointer;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.texts};
  display: flex;
  font-weight: 600;

  div {
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.texts};
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-right: 16px;
    transition: background 0.3s ease;
    width: 40px;

    svg path {
      transition: fill 0.3s ease;
    }
  }

  &:hover {
    text-decoration: underline;

    div {
      background: linear-gradient(238.86deg, #fa9401 15.27%, #ef3f36 96.96%);
    }

    svg path {
      fill: ${({ theme: { colors } }) => colors.texts};
    }
  }
`;
