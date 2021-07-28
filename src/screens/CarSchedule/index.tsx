import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { LocaleConfig } from 'react-native-calendars';
import React from 'react';

import { BlockButton } from '../../components';
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

const CarSchedule: React.FC = () => {
  return (
    <Container>
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <PeriodContent topInset={insets?.top || 0}>
            <BackContent>
              <BackButton onPress={() => console.log('oi 2')}>
                <BackIcon />
              </BackButton>
            </BackContent>
            <PeriodTitle>
              {'Escolha uma\ndata de início e\nfim do aluguel'}
            </PeriodTitle>
            <PeriodValues>
              <PeriodValueBlock selected>
                <PeriodValueLabel>De</PeriodValueLabel>
                <PeriodValueSelected>18/06/2021</PeriodValueSelected>
              </PeriodValueBlock>
              <PeriodValueArrowRight />
              <PeriodValueBlock selected={false}>
                <PeriodValueLabel>Até</PeriodValueLabel>
                <PeriodValueSelected>
                  {true ? '' : '18/06/2021'}
                </PeriodValueSelected>
              </PeriodValueBlock>
            </PeriodValues>
          </PeriodContent>
        )}
      </SafeAreaInsetsContext.Consumer>
      <CalendarContent>
        <PeriodCalendar
          renderArrow={direction =>
            direction === 'left' ? (
              <PeriodCalendarArrowLeft />
            ) : (
              <PeriodCalendarArrowRight />
            )
          }
        />
      </CalendarContent>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          return (
            <Footer bottomInset={insets?.bottom || 0}>
              <BlockButton
                title="Confirmar"
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

export default CarSchedule;
