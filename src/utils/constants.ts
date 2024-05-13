import { Dimensions, Platform, useWindowDimensions } from 'react-native';

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',

  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
