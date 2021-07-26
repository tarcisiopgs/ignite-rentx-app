import React from 'react';
import { CarSlider } from '../../components';

import { Container, Header } from './styles';

const CarDetails: React.FC = () => {
  return (
    <Container>
      <Header>
        <CarSlider />
      </Header>
    </Container>
  );
};

export default CarDetails;
