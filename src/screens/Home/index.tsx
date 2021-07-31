import { PanGestureHandler } from 'react-native-gesture-handler';
import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { CarCard, CustomLoading, MainHeader } from '../../components';
import { api } from '../../services';
import { CarDTO } from '../../dtos';
import {
  MySchedulesButtonIcon,
  MySchedulesButton,
  AnimatedView,
  Container,
  Content,
  CarList,
} from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<CarDTO[]>([]);
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const navigation = useNavigation();

  const myScheduleButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: event => {
      positionX.value = event.translationX;
      positionY.value = event.translationY;
    },
    onEnd: () => {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const handleCarDetails = useCallback(
    (car: CarDTO) => navigation.navigate('CarDetails', { car }),
    [navigation],
  );

  const handleMySchedules = useCallback(
    () => navigation.navigate('MySchedules'),
    [navigation],
  );

  const fetchCars = async () => {
    try {
      const response = await api.get('cars');

      setCars(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <Container>
      <MainHeader loading={loading} totalVehiclesSelected={cars.length} />
      <Content>
        {loading ? (
          <CustomLoading />
        ) : (
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }: any) => (
              <CarCard onPress={() => handleCarDetails(item)} data={item} />
            )}
          />
        )}
      </Content>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedView style={myScheduleButtonStyle}>
          <MySchedulesButton onPress={handleMySchedules}>
            <MySchedulesButtonIcon />
          </MySchedulesButton>
        </AnimatedView>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
