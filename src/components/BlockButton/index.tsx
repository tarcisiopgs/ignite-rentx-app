import { RectButtonProps } from 'react-native-gesture-handler';
import React from 'react';

import { Container, Title } from './styles';

interface BlockButtonProps extends RectButtonProps {
  type: 'attention' | 'success';
  title: string;
}

const BlockButton: React.FC<BlockButtonProps> = ({ type, title, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default BlockButton;
