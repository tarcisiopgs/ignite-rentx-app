import styled from 'styled-components/native';

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.primary,
  size: 'large',
}))`
  flex: 1;
`;
