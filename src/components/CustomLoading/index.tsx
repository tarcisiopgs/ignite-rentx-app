import React from 'react';

import loadingJson from '../../assets/loading.json';
import { Container, Animation } from './styles';

const CustomLoading: React.FC = () => {
  return (
    <Container>
      <Animation source={loadingJson} />
    </Container>
  );
};

export default CustomLoading;
