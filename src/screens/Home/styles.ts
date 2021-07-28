import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { responsive } from '../../utils';
import { CarDTO } from '../../dtos';

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const Content = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: { padding: responsive.getFinalValue(16) },
})`
  flex: 1;
`;
