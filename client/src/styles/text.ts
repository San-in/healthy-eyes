import {COLORS} from './colors';
import {ColorText} from '../types/styles/colorText';
import {StyleSheet} from 'react-native';

export const TEXT_COLOR: ColorText = {
  primary: COLORS.white20,
  secondary: COLORS.gray30,
  accent: COLORS.yellow20,
  black: COLORS.black10,
  red: COLORS.red50,
};

export const TITLE = StyleSheet.create({
  h1: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 30,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
  },
});
