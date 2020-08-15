import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const LoaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  width: 100px;
  z-index: 1000;
`;

export const LoaderLineWrap = styled.div`
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  height: 50px;
  overflow: hidden;
  position: absolute;
  transform-origin: 50% 100%;
  width: 100px;

  &:nth-child(1) {
    animation-delay: -50ms;

    > div {
      border-color: ${({ theme: { colors } }) => colors.secondary};
      height: 90px;
      width: 90px;
      top: 7px;
    }
  }

  &:nth-child(2) {
    animation-delay: -100ms;

    > div {
      border-color: ${({ theme: { colors } }) => colors.texts};
      height: 76px;
      width: 76px;
      top: 14px;
    }
  }

  &:nth-child(3) {
    animation-delay: -150ms;

    > div {
      border-color: ${({ theme: { colors } }) => colors.primary};
      height: 62px;
      width: 62px;
      top: 21px;
    }
  }

  &:nth-child(4) {
    animation-delay: -200ms;

    > div {
      border-color: ${({ theme: { colors } }) => colors.texts};
      height: 48px;
      width: 48px;
      top: 28px;
    }
  }

  &:nth-child(5) {
    animation-delay: -250ms;

    > div {
      border-color: ${({ theme: { colors } }) => colors.secondary};
      height: 34px;
      width: 34px;
      top: 35px;
    }
  }

  @keyframes spin {
    0%,
    15% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderLine = styled.div`
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
`;
