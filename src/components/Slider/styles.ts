import styled, { css } from 'styled-components';

interface ContentProps {
  offsetWidth: number;
}

const arrowButtonStyles = css`
  border: 0;
  height: 100%;
  padding: 16px;
  position: absolute;
  top: 0;
  z-index: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.1;
  }
`;

export const Slider = styled.div`
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const ArrowLeft = styled.button`
  ${arrowButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 0.4) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  left: 0;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  position: relative;
  transform: ${({ offsetWidth }) => `translateX(-${offsetWidth}px)`};
  transition: all 0.5s linear;

  > div {
    min-height: 100%;
    min-width: 100%;
    pointer-events: none;

    > * {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ArrowRight = styled.button`
  ${arrowButtonStyles};
  background: linear-gradient(
    270deg,
    rgba(16, 16, 16, 0.4) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  right: 0;
`;
