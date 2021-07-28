import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import React from 'react';

import { BlockButton, CarAddon, CarSlider } from '../../components';
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

const CarDetails: React.FC = () => {
  return (
    <Container>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <Header topInset={insets?.top || 0}>
            <CarSlider />
          </Header>
        )}
      </SafeAreaInsetsContext.Consumer>
      <Content>
        <ContentHeader>
          <ContentHeaderBlock>
            <ContentHeaderLabel>Lamborghini</ContentHeaderLabel>
            <ContentHeaderValue>Huracan</ContentHeaderValue>
          </ContentHeaderBlock>
          <ContentHeaderBlock>
            <ContentHeaderLabel>Ao dia</ContentHeaderLabel>
            <ContentHeaderValue highlighted>R$ 580</ContentHeaderValue>
          </ContentHeaderBlock>
        </ContentHeader>
        <ContentBody>
          <CarAddons>
            <CarAddon type="speed" title="380km/h" />
            <CarAddon type="acceleration" title="3.2s" />
            <CarAddon type="force" title="800 HP" />
            <CarAddon type="gasoline" title="Gasolina" />
            <CarAddon type="exchange" title="Auto" />
            <CarAddon type="people" title="2 Pessoas" />
          </CarAddons>
          <CarDescription>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </CarDescription>
        </ContentBody>
      </Content>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Footer bottomInset={insets?.bottom || 0}>
              <BlockButton
                title="Escolher período do aluguel"
                onPress={() => console.log('oi')}
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
