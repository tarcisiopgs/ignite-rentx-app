import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CarCard, Loading, MainHeader } from '../../components';
import { api } from '../../services';
import { CarDTO } from '../../dtos';
import {
  MySchedulesButtonIcon,
  MySchedulesButton,
  Container,
  Content,
  CarList,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <Container>
      <MainHeader totalVehiclesSelected={cars.length} />
      <Content>
        {loading ? (
          <Loading />
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
      <MySchedulesButton onPress={handleMySchedules}>
        <MySchedulesButtonIcon />
      </MySchedulesButton>
    </Container>
  );
};

export default Home;
