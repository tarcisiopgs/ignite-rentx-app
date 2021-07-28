import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import LogoBackgroundGraySvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { responsive } from '../../utils';
import { RectButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LogoBackgroundGrayIcon = styled(LogoBackgroundGraySvg).attrs({
  width,
})``;

export const DoneIcon = styled(DoneSvg).attrs({
  height: responsive.getFinalValue(80),
  width: responsive.getFinalValue(80),
})``;

export const Title = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold};
  line-height: ${responsive.getFinalValue(32.64)}px;
  margin: ${responsive.getFinalValue(46)}px 0 0;
  font-size: ${responsive.getFinalValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

export const Subtitle = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.textDetails};
  line-height: ${responsive.getFinalValue(25)}px;
  margin: ${responsive.getFinalValue(16)}px 0 0;
  font-size: ${responsive.getFinalValue(15)}px;
  text-align: center;
`;

export const CloseButton = styled(RectButton).attrs({})`
  padding: ${responsive.getFinalValue(19)}px ${responsive.getFinalValue(25)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: ${responsive.getFinalValue(80)}px 0 0;
`;

export const CloseButtonText = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  line-height: ${responsive.getFinalValue(18.15)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;
