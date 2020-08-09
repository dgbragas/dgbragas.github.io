import React, { useState, useRef } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';

import * as S from './styles';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
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
        {images.map((image, index) => (
          <div>
            <img src={image} alt={`${index}º imagem`} />
          </div>
        ))}
        {/* <S.Dots>
          <S.Dot />
        </S.Dots> */}
      </S.Content>
      <S.ArrowRight
        onClick={toggleNextSlide}
        disabled={currentSlide + 1 > images.length}
      >
        <ArrowRight />
      </S.ArrowRight>
    </S.Slider>
  );
};

export default Slider;
