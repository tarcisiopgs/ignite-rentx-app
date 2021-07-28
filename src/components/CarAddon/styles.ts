import styled from 'styled-components/native';

import AccelerationSvg from '../../assets/acceleration.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import EnergySvg from '../../assets/energy.svg';
import HybridSvg from '../../assets/hybrid.svg';
import SpeedSvg from '../../assets/speed.svg';
import ForceSvg from '../../assets/force.svg';
import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  padding: ${responsive.getFinalValue(18)}px 0 ${responsive.getFinalValue(16)}px;
  border-bottom-color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom-width: ${responsive.getFinalValue(1)}px;
  margin: ${responsive.getFinalValue(4)}px;
  justify-content: center;
  align-items: center;
  flex: 1 30%;
`;

export const AccelerationIcon = styled(AccelerationSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const SpeedIcon = styled(SpeedSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const ForceIcon = styled(ForceSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const GasolineIcon = styled(GasolineSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const EnergyIcon = styled(EnergySvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const PeopleIcon = styled(PeopleSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const ExchangeIcon = styled(ExchangeSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const HybridIcon = styled(HybridSvg).attrs({
  height: responsive.getFinalValue(28),
  width: responsive.getFinalValue(28),
})``;

export const AddonTitle = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  line-height: ${responsive.getFinalValue(15.73)}px;
  margin: ${responsive.getFinalValue(14)}px 0 0;
  font-size: ${responsive.getFinalValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`;
