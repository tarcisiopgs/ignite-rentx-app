import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CarScheduleComplete,
  CarScheduleDetails,
  CarSchedule,
  CarDetails,
  Home,
} from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="CarScheduleComplete" component={CarScheduleComplete} />
      <Screen name="CarScheduleDetails" component={CarScheduleDetails} />
      <Screen name="CarSchedule" component={CarSchedule} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppRoutes;
