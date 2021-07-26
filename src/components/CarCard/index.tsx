import React from 'react';

import {
  DividerContainer,
  ThumbnailImage,
  ThumbnailInfo,
  GasolineIcon,
  GeneralInfo,
  AddonsInfo,
  EnergyIcon,
  Container,
  PriceInfo,
  LabelText,
  ValueText,
} from './styles';

interface PriceData {
  period: 'day';
  value: string;
}

export interface CarData {
  fuel: 'energy' | 'gasoline';
  price: PriceData;
  brand: string;
  model: string;
  image: string;
}

interface CarCardProps {
  data: CarData;
}

const CarCard: React.FC<CarCardProps> = ({ data }) => {
  return (
    <Container>
      <GeneralInfo>
        <LabelText>{data.brand}</LabelText>
        <ValueText>{data.model}</ValueText>
        <AddonsInfo>
          <PriceInfo>
            <LabelText>{data.price.period === 'day' && 'Ao dia'}</LabelText>
            <ValueText highlighted>{data.price.value}</ValueText>
          </PriceInfo>
          {data.fuel === 'gasoline' ? <GasolineIcon /> : <EnergyIcon />}
        </AddonsInfo>
      </GeneralInfo>
      <DividerContainer />
      <ThumbnailInfo>
        <ThumbnailImage source={{ uri: data.image }} />
      </ThumbnailInfo>
    </Container>
  );
};

export default CarCard;
