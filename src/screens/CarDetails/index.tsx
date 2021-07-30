import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';

import { BlockButton, CarAddon, CarSlider } from '../../components';
import { CarDTO } from '../../dtos';
import {
  ContentHeaderBlock,
  ContentHeaderValue,
  ContentHeaderLabel,
  CarDescription,
  ContentHeader,
  ContentBody,
  Container,
  CarAddons,
  Content,
  Header,
  Footer,
  AnimatedView,
} from './styles';

interface Params {
  car: CarDTO;
}

const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const route = useRoute();
  const theme = useTheme();
  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
  }));
  const carSliderAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 100], [1, 0]),
  }));

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const { car } = route.params as Params;

  const handleCarSchedule = useCallback(
    () => navigation.navigate('CarSchedule', { car }),
    [navigation, car],
  );

  return (
    <Container>
      <StatusBar style="auto" backgroundColor={theme.colors.light} />
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <AnimatedView style={headerStyleAnimation}>
            <Header topInset={insets?.top || 0}>
              <AnimatedView style={carSliderAnimation}>
                <CarSlider images={car.photos} />
              </AnimatedView>
            </Header>
          </AnimatedView>
        )}
      </SafeAreaInsetsContext.Consumer>
      <Content onScroll={scrollHandler} scrollEventThrottle={16}>
        <ContentHeader>
          <ContentHeaderBlock>
            <ContentHeaderLabel>{car.brand}</ContentHeaderLabel>
            <ContentHeaderValue>{car.name}</ContentHeaderValue>
          </ContentHeaderBlock>
          <ContentHeaderBlock>
            <ContentHeaderLabel>{car.rent.period}</ContentHeaderLabel>
            <ContentHeaderValue highlighted>
              R$ {car.rent.price}
            </ContentHeaderValue>
          </ContentHeaderBlock>
        </ContentHeader>
        <ContentBody>
          <CarAddons>
            {car.accessories.map((item, index) => (
              <CarAddon key={index} type={item.type} title={item.name} />
            ))}
          </CarAddons>
          <CarDescription>{car.about}</CarDescription>
        </ContentBody>
      </Content>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Footer bottomInset={insets?.bottom || 0}>
              <BlockButton
                title="Escolher período do aluguel"
                onPress={handleCarSchedule}
                type="attention"
              />
            </Footer>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    </Container>
  );
};

export default CarDetails;
