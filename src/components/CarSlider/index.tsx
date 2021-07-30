import React, { useCallback, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ViewToken } from 'react-native';

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

interface ChangeImageProps {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
}

const CarSlider: React.FC<CarSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const navigation = useNavigation();

  const handleClosePage = useCallback(() => navigation.goBack(), [navigation]);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const [aux] = info.viewableItems;

    setImageIndex(aux.index!);
  });

  return (
    <Container>
      <DotsWrapper>
        <BackButton onPress={handleClosePage}>
          <BackIcon />
        </BackButton>
        <Dots>
          {images.map((image, index) => (
            <Dot active={index === imageIndex} key={index} />
          ))}
        </Dots>
      </DotsWrapper>

      <FlatList
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} />
          </CarImageWrapper>
        )}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={indexChanged.current}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={images}
        horizontal
      />
    </Container>
  );
};

export default CarSlider;
