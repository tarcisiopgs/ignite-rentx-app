import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Container, BackIcon, BackButton } from './styles';

interface InnerHeaderProps {
  type: 'light' | 'dark';
  style: any;
}

const InnerHeader: React.FC<InnerHeaderProps> = ({ type, style }) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        style={type}
        backgroundColor={
          type === 'dark' ? theme.colors.light : theme.colors.dark
        }
      />
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <Container topInset={insets?.top || 0} style={style}>
            <BackButton onPress={() => console.log('oi')}>
              <BackIcon type={type} />
            </BackButton>
          </Container>
        )}
      </SafeAreaInsetsContext.Consumer>
    </>
  );
};

export default InnerHeader;
