import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
  interpolate,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import { BrandIcon, LogoIcon, Container, AnimatedView } from './styles';

const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();
  const theme = useTheme();

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 100], [1, 0]),
    transform: [
      { translateX: interpolate(splashAnimation.value, [0, 100], [0, -50]) },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAnimation.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 100],
          [-50, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const startApp = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    splashAnimation.value = withTiming(100, { duration: 1000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <AnimatedView style={brandStyle}>
        <BrandIcon />
      </AnimatedView>
      <AnimatedView style={logoStyle}>
        <LogoIcon />
      </AnimatedView>
    </Container>
  );
};

export default Splash;
