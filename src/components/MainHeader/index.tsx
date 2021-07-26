import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, LogoIcon, TotalVehiclesText } from './styles';

interface MainHeaderProps {
  totalVehiclesSelected: number;
}

const MainHeader: React.FC<MainHeaderProps> = ({ totalVehiclesSelected }) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <Container>
        <LogoIcon />
        <TotalVehiclesText>
          Total de {totalVehiclesSelected}{' '}
          {totalVehiclesSelected === 1 ? 'carro' : 'carros'}
        </TotalVehiclesText>
      </Container>
    </>
  );
};

export default MainHeader;
