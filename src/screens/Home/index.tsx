import React from 'react';

import { CarCard, CarData, MainHeader } from '../../components';
import { Container, Content, CarList } from './styles';

const cars: CarData[] = [
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'energy',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
  {
    price: { period: 'day', value: 'R$ 120' },
    model: 'RS 5 Coupé',
    fuel: 'gasoline',
    brand: 'Audi',
    image:
      'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <MainHeader totalVehiclesSelected={12} />
      <Content>
        <CarList
          data={cars}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: any) => <CarCard data={item} />}
        />
      </Content>
    </Container>
  );
};

export default Home;
