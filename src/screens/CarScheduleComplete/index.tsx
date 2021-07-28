import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

import {
  LogoBackgroundGrayIcon,
  CloseButtonText,
  CloseButton,
  Container,
  DoneIcon,
  Subtitle,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const CarScheduleComplete: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleHome = useCallback(
    () => navigation.navigate('Home'),
    [navigation],
  );

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <LogoBackgroundGrayIcon />
      <DoneIcon />
      <Title>Carro alugado!</Title>
      <Subtitle>
        {
          'Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.'
        }
      </Subtitle>
      <CloseButton onPress={handleHome}>
        <CloseButtonText>Ok</CloseButtonText>
      </CloseButton>
    </Container>
  );
};

export default CarScheduleComplete;
