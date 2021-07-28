import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Archivo_600SemiBold,
  Archivo_400Regular,
  Archivo_500Medium,
} from '@expo-google-fonts/archivo';
import React from 'react';

import { Home, CarDetails, CarSchedule } from './src/screens';
import { theme } from './src/styles';

const App = () => {
  const [fontsLoaded] = useFonts({
    Archivo_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {/* <Home /> */}
          {/* <CarDetails /> */}
          <CarSchedule />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
