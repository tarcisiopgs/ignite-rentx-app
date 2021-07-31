import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, LogoIcon, TotalVehiclesText } from './styles';

interface MainHeaderProps {
  totalVehiclesSelected: number;
  loading: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({
  totalVehiclesSelected,
  loading,
}) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <Container topInset={insets?.top || 0}>
            <LogoIcon />
            {!loading && (
              <TotalVehiclesText>
                Total de {totalVehiclesSelected}{' '}
                {totalVehiclesSelected === 1 ? 'carro' : 'carros'}
              </TotalVehiclesText>
            )}
          </Container>
        )}
      </SafeAreaInsetsContext.Consumer>
    </>
  );
};

export default MainHeader;
