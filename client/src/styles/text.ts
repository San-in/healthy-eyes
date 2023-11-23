import {COLORS} from './colors';
import {ColorText} from '../types/styles/colorText';
import {StyleSheet} from 'react-native';

export const TEXT_COLOR = {
  primary: {
    color: COLORS.white20,
  },
  secondary: {
    color: COLORS.gray30,
  },
  accent: {
    color: COLORS.yellow20,
  },
  black: {
    color: COLORS.black10,
  },
  white: {
    color: COLORS.white10,
  },
  red: {
    color: COLORS.red50,
  },
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

export const TEXT = StyleSheet.create({
  small: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  normal: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
  },
  large: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
  },
});
