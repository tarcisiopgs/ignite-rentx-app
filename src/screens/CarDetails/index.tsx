import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';

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
} from './styles';

interface Params {
  car: CarDTO;
}

const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;

  console.log(car);

  const handleCarSchedule = useCallback(
    () => navigation.navigate('CarSchedule'),
    [navigation],
  );

  return (
    <Container>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <Header topInset={insets?.top || 0}>
            <CarSlider images={car.photos} />
          </Header>
        )}
      </SafeAreaInsetsContext.Consumer>
      <Content>
        <ContentHeader>
          <ContentHeaderBlock>
            <ContentHeaderLabel>{car.brand}</ContentHeaderLabel>
            <ContentHeaderValue>{car.name}</ContentHeaderValue>
          </ContentHeaderBlock>
          <ContentHeaderBlock>
            <ContentHeaderLabel>{car.rent.period}</ContentHeaderLabel>
            <ContentHeaderValue highlighted>
              {car.rent.price}
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
