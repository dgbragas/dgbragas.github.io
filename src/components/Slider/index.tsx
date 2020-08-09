import React, { useState, useRef } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';

import * as S from './styles';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  function toggleNextSlide() {
    setCurrentSlide(currentSlide + 1);

    if (sliderRef.current) {
      setCurrentOffset(currentOffset + sliderRef.current?.offsetWidth);
    }
  }

  function togglePreviousSlide() {
    setCurrentSlide(currentSlide - 1);

    if (sliderRef.current) {
      setCurrentOffset(currentOffset - sliderRef.current?.offsetWidth);
    }
  }

  return (
    <S.Slider ref={sliderRef}>
      <S.ArrowLeft onClick={togglePreviousSlide} disabled={currentSlide === 0}>
        <ArrowLeft />
      </S.ArrowLeft>
      <S.Content offsetWidth={currentOffset}>
        <div>
          <h1 style={{ color: 'white' }}>Hello 1</h1>
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Hello 2</h1>
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Hello 3</h1>
        </div>
        <div>
          <h1 style={{ color: 'white' }}>Hello 4</h1>
        </div>
        {/* <S.Dots>
          <S.Dot />
        </S.Dots> */}
      </S.Content>
      <S.ArrowRight onClick={toggleNextSlide} disabled={false}>
        <ArrowRight />
      </S.ArrowRight>
    </S.Slider>
  );
};

export default Slider;
