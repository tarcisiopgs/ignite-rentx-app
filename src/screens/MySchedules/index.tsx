import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { format, parseISO } from 'date-fns';
import lodash from 'lodash';

import { CarCard, CustomLoading } from '../../components';
import { api } from '../../services';
import {
  SchedulePeriodArrow,
  SchedulePeriodDate,
  SchedulePeriodText,
  ListHeaderDetail,
  ListHeaderTitle,
  SchedulePeriod,
  BackButtonIcon,
  ScheduleList,
  CardWrapper,
  ListHeader,
  BackButton,
  Container,
  Subtitle,
  Content,
  Header,
  Title,
} from './styles';

const MySchedules: React.FC = () => {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleClosePage = useCallback(() => navigation.goBack(), [navigation]);

  const fetchSchedules = async () => {
    try {
      const response = await api.get('schedules_byuser', {
        params: { user_id: 1 },
      });

      setSchedules(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <Header topInset={insets?.top || 0}>
            <BackButton onPress={handleClosePage}>
              <BackButtonIcon />
            </BackButton>
            <Title>{'Seus agendamentos,\nestão aqui.'}</Title>
            <Subtitle>Conforto, segurança e praticidade.</Subtitle>
          </Header>
        )}
      </SafeAreaInsetsContext.Consumer>
      <Content>
        {loading ? (
          <CustomLoading />
        ) : (
          <>
            <ListHeader>
              <ListHeaderTitle>Agendamentos feitos</ListHeaderTitle>
              <ListHeaderDetail>
                {String(schedules.length).padStart(2, '0')}
              </ListHeaderDetail>
            </ListHeader>
            <ScheduleList
              data={schedules}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }: any) => (
                <CardWrapper>
                  <CarCard
                    withoutMarginBottom
                    enabled={false}
                    data={item.car}
                  />
                  <SchedulePeriod>
                    <SchedulePeriodText>Período</SchedulePeriodText>
                    <SchedulePeriodDate>
                      {format(
                        parseISO(lodash.first(item.dates)!),
                        'dd/MM/yyyy',
                      )}
                    </SchedulePeriodDate>
                    <SchedulePeriodArrow />
                    <SchedulePeriodDate>
                      {format(parseISO(lodash.last(item.dates)!), 'dd/MM/yyyy')}
                    </SchedulePeriodDate>
                  </SchedulePeriod>
                </CardWrapper>
              )}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default MySchedules;
