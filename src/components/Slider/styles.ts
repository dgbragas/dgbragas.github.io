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
`;

export const Slider = styled.div`
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  transform: ${({ offsetWidth }) => `translateX(-${offsetWidth}px)`};
  transition: all 0.5s linear;

  > div {
    min-height: 100%;
    min-width: 100%;
    pointer-events: none;
  }
`;

export const Dots = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Dot = styled.button`
  background-color: red;
  border: 0;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

export const ArrowRight = styled.button`
  ${arrowButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 0.4) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  right: 0;
`;
