import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';
import lodash from 'lodash';

import { BlockButton, CarAddon, CarSlider } from '../../components';
import { api } from '../../services';
import { CarDTO } from '../../dtos';
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

interface Params {
  dates: string[];
  car: CarDTO;
}

const CarScheduleDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { car, dates } = route.params as Params;

  const handleCarScheduleComplete = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get(`schedules_bycars/${car.id}`);

      await api.post(`schedules_byuser`, { car, user_id: 1, dates });

      await api.put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: [...response.data.unavailable_dates, ...dates],
      });

      navigation.navigate('CarScheduleComplete');
    } catch (e) {
      console.log(e.response);

      Alert.alert('Não foi possível realizar o seu agendamento.');
    } finally {
      setLoading(false);
    }
  }, [navigation]);

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
          <ScheduleDetailsContent>
            <ScheduleDetailsIcon />
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>De</ScheduleDetailsLabel>
              <ScheduleDetailsValue>
                {format(parseISO(lodash.first(dates)!), 'dd/MM/yyyy')}
              </ScheduleDetailsValue>
            </ScheduleDetailsBlock>
            <ScheduleDetailsSeparate />
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>Até</ScheduleDetailsLabel>
              <ScheduleDetailsValue>
                {format(parseISO(lodash.last(dates)!), 'dd/MM/yyyy')}
              </ScheduleDetailsValue>
            </ScheduleDetailsBlock>
          </ScheduleDetailsContent>
          <ScheduleDetailsSecondContent>
            <ScheduleDetailsBlock>
              <ScheduleDetailsLabel>Total</ScheduleDetailsLabel>
              <ScheduleDetailsValue>
                R$ {car.rent.price} x{dates.length} diárias
              </ScheduleDetailsValue>
            </ScheduleDetailsBlock>
            <ScheduleTotal>R$ {car.rent.price * dates.length}</ScheduleTotal>
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
                enabled={!loading}
                loading={loading}
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
