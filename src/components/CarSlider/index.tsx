import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useCallback } from 'react';

import {
  CarImageWrapper,
  DotsWrapper,
  BackButton,
  Container,
  BackIcon,
  CarImage,
  Dots,
  Dot,
} from './styles';

interface CarSliderProps {
  images: string[];
}

const CarSlider: React.FC<CarSliderProps> = ({ images }) => {
  const navigation = useNavigation();

  const handleClosePage = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <Container>
      <DotsWrapper>
        <BackButton onPress={handleClosePage}>
          <BackIcon />
        </BackButton>
        <Dots>
          {images.map((image, index) => (
            <Dot active={index === 0} key={index} />
          ))}
        </Dots>
      </DotsWrapper>
      <CarImageWrapper>
        <CarImage source={{ uri: [...images].shift() }} />
      </CarImageWrapper>
    </Container>
  );
};

export default CarSlider;
