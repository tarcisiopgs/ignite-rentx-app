import React from 'react';

import { Container, Dots, Dot, CarImageWrapper, CarImage } from './styles';

const CarSlider: React.FC = () => {
  return (
    <Container>
      <Dots>
        <Dot active />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <CarImageWrapper>
        <CarImage
          source={{
            uri: 'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
          }}
        />
      </CarImageWrapper>
    </Container>
  );
};

export default CarSlider;
