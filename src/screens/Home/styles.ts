import styled from 'styled-components/native';

import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const Content = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const CarList = styled.FlatList.attrs({
  contentContainerStyle: { padding: responsive.getFinalValue(16) },
})`
  flex: 1;
`;
