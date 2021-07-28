import React from 'react';

import {
  AccelerationIcon,
  GasolineIcon,
  ExchangeIcon,
  EnergyIcon,
  AddonTitle,
  PeopleIcon,
  HybridIcon,
  Container,
  SpeedIcon,
  ForceIcon,
} from './styles';

interface CardAddonProps {
  type: string;
  title: string;
}

const CarAddon: React.FC<CardAddonProps> = ({ type, title }) => {
  return (
    <Container>
      {type === 'acceleration' && <AccelerationIcon />}
      {type === 'gasoline_motor' && <GasolineIcon />}
      {type === 'turning_diameter' && <ForceIcon />}
      {type === 'electric_motor' && <EnergyIcon />}
      {type === 'hybrid_motor' && <HybridIcon />}
      {type === 'exchange' && <ExchangeIcon />}
      {type === 'seats' && <PeopleIcon />}
      {type === 'speed' && <SpeedIcon />}
      <AddonTitle>{title}</AddonTitle>
    </Container>
  );
};

export default CarAddon;
