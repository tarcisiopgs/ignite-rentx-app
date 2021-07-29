import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';

import GasolineSvg from '../../assets/gasoline_light.svg';
import EnergySvg from '../../assets/energy_light.svg';
import HybridSvg from '../../assets/hybrid_light.svg';
import { responsive } from '../../utils';

interface ValueTextProps extends TextProps {
  highlighted?: boolean;
}

interface ContainerProps extends RectButtonProps {
  withoutMarginBottom?: boolean;
}

export const Container = styled(RectButton).attrs({})<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.light};
  margin: 0 0
    ${({ withoutMarginBottom }) =>
      withoutMarginBottom ? 0 : responsive.getFinalValue(16)}px;
  padding: ${responsive.getFinalValue(24)}px;
  flex-direction: row;
`;

export const GeneralInfo = styled.View.attrs({})``;

export const PriceInfo = styled.View.attrs({})`
  margin: ${responsive.getFinalValue(16)}px 0 0;
`;

export const LabelText = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  line-height: ${responsive.getFinalValue(10.88)}px;
  color: ${({ theme }) => theme.colors.textDetails};
  font-size: ${responsive.getFinalValue(10)}px;
  margin: 0 0 ${responsive.getFinalValue(4)}px;
  text-transform: uppercase;
`;

export const ValueText = styled.Text.attrs({})<ValueTextProps>`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme, highlighted }) =>
    highlighted ? theme.colors.primary : theme.colors.title};
  line-height: ${responsive.getFinalValue(16.32)}px;
  font-size: ${responsive.getFinalValue(15)}px;
`;

export const ThumbnailInfo = styled.View.attrs({})`
  flex: 1.55;
`;

export const ModelName = styled.Text.attrs({})``;

export const EnergyIcon = styled(EnergySvg).attrs({
  height: responsive.getFinalValue(26),
  width: responsive.getFinalValue(26),
})`
  margin: 0 0 0 ${responsive.getFinalValue(24)}px;
`;

export const AddonsInfo = styled.View.attrs({})`
  align-items: flex-end;
  flex-direction: row;
`;

export const ThumbnailImage = styled.Image.attrs({ resizeMode: 'contain' })`
  flex: 1;
`;

export const DividerContainer = styled.View.attrs({})`
  flex: 1;
`;

export const GasolineIcon = styled(GasolineSvg).attrs({
  height: responsive.getFinalValue(26),
  width: responsive.getFinalValue(26),
})`
  margin: 0 0 0 ${responsive.getFinalValue(24)}px;
`;

export const HybridIcon = styled(HybridSvg).attrs({
  height: responsive.getFinalValue(26),
  width: responsive.getFinalValue(26),
})`
  margin: 0 0 0 ${responsive.getFinalValue(24)}px;
`;
