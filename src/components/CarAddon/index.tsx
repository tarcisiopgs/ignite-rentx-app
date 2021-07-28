import React from 'react';

import {
  AccelerationIcon,
  GasolineIcon,
  ExchangeIcon,
  EnergyIcon,
  AddonTitle,
  PeopleIcon,
  Container,
  SpeedIcon,
  ForceIcon,
} from './styles';

interface CardAddonProps {
  type:
    | 'acceleration'
    | 'gasoline'
    | 'exchange'
    | 'people'
    | 'energy'
    | 'speed'
    | 'force';
  title: string;
}

const CarAddon: React.FC<CardAddonProps> = ({ type, title }) => {
  return (
    <Container>
      {type === 'acceleration' && <AccelerationIcon />}
      {type === 'gasoline' && <GasolineIcon />}
      {type === 'exchange' && <ExchangeIcon />}
      {type === 'people' && <PeopleIcon />}
      {type === 'energy' && <EnergyIcon />}
      {type === 'speed' && <SpeedIcon />}
      {type === 'force' && <ForceIcon />}
      <AddonTitle>{title}</AddonTitle>
    </Container>
  );
};

export default CarAddon;
