import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const shadows = StyleSheet.create({
  TextTitle: {
    textShadowColor: COLORS.black025,
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
});
