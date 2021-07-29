import { RectButtonProps } from 'react-native-gesture-handler';
import React from 'react';

import { CarDTO } from '../../dtos';
import {
  DividerContainer,
  ThumbnailImage,
  ThumbnailInfo,
  GasolineIcon,
  GeneralInfo,
  AddonsInfo,
  EnergyIcon,
  HybridIcon,
  Container,
  PriceInfo,
  LabelText,
  ValueText,
} from './styles';

interface CarCardProps extends RectButtonProps {
  withoutMarginBottom?: boolean;
  data: CarDTO;
}

const CarCard: React.FC<CarCardProps> = ({
  withoutMarginBottom,
  data,
  ...rest
}) => {
  return (
    <Container withoutMarginBottom={withoutMarginBottom} {...rest}>
      <GeneralInfo>
        <LabelText>{data.brand}</LabelText>
        <ValueText>{data.name}</ValueText>
        <AddonsInfo>
          <PriceInfo>
            <LabelText>{data.rent.period}</LabelText>
            <ValueText highlighted>R$ {data.rent.price}</ValueText>
          </PriceInfo>
          {data.fuel_type === 'gasoline_motor' ? (
            <GasolineIcon />
          ) : data.fuel_type === 'hybrid_motor' ? (
            <HybridIcon />
          ) : (
            <EnergyIcon />
          )}
        </AddonsInfo>
      </GeneralInfo>
      <DividerContainer />
      <ThumbnailInfo>
        <ThumbnailImage source={{ uri: data.thumbnail }} />
      </ThumbnailInfo>
    </Container>
  );
};

export default CarCard;
