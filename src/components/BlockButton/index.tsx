import { RectButtonProps } from 'react-native-gesture-handler';
import React from 'react';

import { Container, Title, Spinner } from './styles';

interface BlockButtonProps extends RectButtonProps {
  type: 'attention' | 'success';
  enabled?: boolean;
  loading?: boolean;
  title: string;
}

const BlockButton: React.FC<BlockButtonProps> = ({
  loading = false,
  enabled = true,
  title,
  type,
  ...rest
}) => {
  return (
    <Container enabled={enabled} type={type} {...rest}>
      {!loading ? <Title>{title}</Title> : <Spinner />}
    </Container>
  );
};

export default BlockButton;
