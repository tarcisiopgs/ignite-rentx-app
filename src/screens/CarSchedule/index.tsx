import { addDays, eachDayOfInterval, format, parseISO } from 'date-fns';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LocaleConfig } from 'react-native-calendars';
import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import lodash from 'lodash';

import { BlockButton } from '../../components';
import { CarDTO } from '../../dtos';
import {
  PeriodCalendarArrowRight,
  PeriodCalendarArrowLeft,
  PeriodValueArrowRight,
  PeriodValueSelected,
  PeriodValueBlock,
  PeriodValueLabel,
  CalendarContent,
  PeriodCalendar,
  PeriodContent,
  PeriodValues,
  BackContent,
  PeriodTitle,
  BackButton,
  Container,
  BackIcon,
  Footer,
} from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    disableTouchEvent?: boolean;
    disabled?: boolean;
    textColor: string;
    color: string;
  };
}

interface DayProps {
  dateString: string;
  timestamp: number;
  month: number;
  year: number;
  day: number;
}

interface Params {
  car: CarDTO;
}

const CarSchedule: React.FC = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const { car } = route.params as Params;

  const handleCarScheduleDetails = useCallback(() => {
    if (lodash.keys(markedDates).length > 0) {
      navigation.navigate('CarScheduleDetails', {
        dates: lodash.keys(markedDates),
        car,
      });
    }
  }, [navigation, markedDates, car]);

  const handleClosePage = useCallback(() => navigation.goBack(), [navigation]);

  const handleChangeDate = useCallback(
    (date: DayProps) => {
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
      let interval: MarkedDateProps = {};
      let end = date;

      if (start.timestamp > end.timestamp) {
        start = end;
        end = start;
      }

      setLastSelectedDate(end);

      eachDayOfInterval({
        start: new Date(start.timestamp),
        end: new Date(end.timestamp),
      }).forEach(item => {
        const date = format(addDays(item, 1), 'yyyy-MM-dd');

        interval = {
          ...interval,
          [date]: {
            color:
              start.dateString === date || end.dateString === date
                ? theme.colors.primary
                : theme.colors.primaryLight,
            textColor:
              start.dateString === date || end.dateString === date
                ? theme.colors.primaryLight
                : theme.colors.primary,
          },
        };
      });

      setMarkedDates(interval);
    },
    [lastSelectedDate],
  );

  return (
    <Container>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <PeriodContent topInset={insets?.top || 0}>
            <BackContent>
              <BackButton onPress={handleClosePage}>
                <BackIcon />
              </BackButton>
            </BackContent>
            <PeriodTitle>
              {'Escolha uma\ndata de início e\nfim do aluguel'}
            </PeriodTitle>
            <PeriodValues>
              <PeriodValueBlock
                selected={!!lodash.first(lodash.keys(markedDates))}
              >
                <PeriodValueLabel>De</PeriodValueLabel>
                <PeriodValueSelected>
                  {!!lodash.first(lodash.keys(markedDates))
                    ? format(
                        parseISO(lodash.first(lodash.keys(markedDates))!),
                        'dd/MM/yyyy',
                      )
                    : null}
                </PeriodValueSelected>
              </PeriodValueBlock>
              <PeriodValueArrowRight />
              <PeriodValueBlock
                selected={!!lodash.last(lodash.keys(markedDates))}
              >
                <PeriodValueLabel>Até</PeriodValueLabel>
                <PeriodValueSelected>
                  {!!lodash.last(lodash.keys(markedDates))
                    ? format(
                        parseISO(lodash.last(lodash.keys(markedDates))!),
                        'dd/MM/yyyy',
                      )
                    : null}
                </PeriodValueSelected>
              </PeriodValueBlock>
            </PeriodValues>
          </PeriodContent>
        )}
      </SafeAreaInsetsContext.Consumer>
      <CalendarContent>
        <PeriodCalendar
          markedDates={markedDates}
          renderArrow={direction =>
            direction === 'left' ? (
              <PeriodCalendarArrowLeft />
            ) : (
              <PeriodCalendarArrowRight />
            )
          }
          onDayPress={handleChangeDate}
        />
      </CalendarContent>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Footer bottomInset={insets?.bottom || 0}>
              <BlockButton
                enabled={lodash.keys(markedDates).length > 0}
                onPress={handleCarScheduleDetails}
                title="Confirmar"
                type="attention"
              />
            </Footer>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    </Container>
  );
};

export default CarSchedule;
