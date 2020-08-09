import styled, { css } from 'styled-components';

interface ArrowButtonProps {
  sliderWidth: number;
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
  position: relative;
  width: 100%;
`;

export const ArrowLeft = styled.button<ArrowButtonProps>`
  ${arrowButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 0.4) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  overflow: hidden;

  > div {
    min-height: 100%;
    min-width: 100%;
  }
`;

export const Dots = styled.div``;

export const Dot = styled.button``;

export const ArrowRight = styled.button<ArrowButtonProps>`
  ${arrowButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 0.4) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  right: 0;
`;
