import { RFValue } from 'react-native-responsive-fontsize';

import constants from './constants';

const responsive = {
  getFinalValue: (value: number) => {
    return RFValue(value, constants.prototypeScreenSize.height);
  },
};

export default responsive;
