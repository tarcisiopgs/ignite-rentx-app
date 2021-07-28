import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { BlockButton, CarAddon, CarSlider } from '../../components';
import {
  ScheduleDetailsSecondContent,
  ScheduleDetailsSeparate,
  ScheduleDetailsContent,
  ScheduleDetailsBlock,
  ScheduleDetailsLabel,
  ScheduleDetailsValue,
  ScheduleDetailsIcon,
  ContentHeaderBlock,
  ContentHeaderValue,
  ContentHeaderLabel,
  ContentHeader,
  ScheduleTotal,
  ContentBody,
  Container,
  CarAddons,
  Content,
  Header,
  Footer,
} from './styles';

const CarScheduleDetails: React.FC = () => {
  const navigation = useNavigation();

  const handleCarScheduleComplete = useCallback(
    () => navigation.navigate('CarScheduleComplete'),
    [navigation],
  );

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
          <ScheduleDetailsContent>
            <ScheduleDetailsIcon />
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>De</ScheduleDetailsLabel>
              <ScheduleDetailsValue>18/06/2021</ScheduleDetailsValue>
            </ScheduleDetailsBlock>
            <ScheduleDetailsSeparate />
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>Até</ScheduleDetailsLabel>
              <ScheduleDetailsValue>20/06/2021</ScheduleDetailsValue>
            </ScheduleDetailsBlock>
          </ScheduleDetailsContent>
          <ScheduleDetailsSecondContent>
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>Total</ScheduleDetailsLabel>
              <ScheduleDetailsValue>R$ 580 x3 diárias</ScheduleDetailsValue>
            </ScheduleDetailsBlock>
            <ScheduleTotal>R$ 2.900</ScheduleTotal>
          </ScheduleDetailsSecondContent>
        </ContentBody>
      </Content>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Footer bottomInset={insets?.bottom || 0}>
              <BlockButton
                onPress={handleCarScheduleComplete}
                title="Alugar agora"
                type="success"
              />
            </Footer>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    </Container>
  );
};

export default CarScheduleDetails;
