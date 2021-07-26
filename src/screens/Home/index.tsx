import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { CarCard } from '../../components';
import {
  TotalVehiclesText,
  Container,
  LogoIcon,
  Content,
  Header,
} from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <Header>
        <LogoIcon />
        <TotalVehiclesText>Total de 12 carros</TotalVehiclesText>
      </Header>
      <Content>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Content>
    </Container>
  );
};

export default Home;
