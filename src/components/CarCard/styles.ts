import styled from 'styled-components/native';

import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.light};
  margin: 0 0 ${responsive.getFinalValue(16)}px;
  padding: ${responsive.getFinalValue(16)}px;
`;

export const GeneralInfo = styled.View.attrs({})``;

export const PriceInfo = styled.View.attrs({})``;

export const ElectricIcon = styled.Text.attrs({})``;

export const FuelIcon = styled.Text.attrs({})``;

export const PriceValue = styled.Text.attrs({})``;

export const PriceLabel = styled.Text.attrs({})``;

export const BrandName = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  line-height: ${responsive.getFinalValue(10.88)}px;
  color: ${({ theme }) => theme.colors.textDetails};
  font-size: ${responsive.getFinalValue(10)}px;
  text-transform: uppercase;
`;

export const ModelName = styled.Text.attrs({})``;
