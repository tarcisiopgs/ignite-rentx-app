import React from 'react';

import {
  ElectricIcon,
  GeneralInfo,
  PriceLabel,
  PriceValue,
  BrandName,
  Container,
  ModelName,
  PriceInfo,
  FuelIcon,
} from './styles';

const CarCard: React.FC = () => {
  return (
    <Container>
      <GeneralInfo>
        <BrandName>Audi</BrandName>
        <ModelName>A4</ModelName>
        <PriceInfo>
          <PriceLabel>Por dia</PriceLabel>
          <PriceValue>R$ 100,00</PriceValue>
        </PriceInfo>
      </GeneralInfo>
    </Container>
  );
};

export default CarCard;
