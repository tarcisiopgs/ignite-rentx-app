import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  CarScheduleComplete,
  CarScheduleDetails,
  CarSchedule,
  MySchedules,
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
      <Screen name="MySchedules" component={MySchedules} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppRoutes;
