import {ButtonProps} from '../types';
import {BACKGROUND_COLOR} from '../../../../styles/backgrounds';
import {COLORS} from '../../../../styles/colors';
import {DimensionValue} from 'react-native';

const getButtonDynamicBackground = (type: ButtonProps['type']) => {
  if (type === 'primary') {
    return {
      backgroundColor: BACKGROUND_COLOR.accent,
    };
  }
  if (type === 'secondary') {
    return {
      backgroundColor: BACKGROUND_COLOR.secondaryDark,
    };
  }
  if (type === 'link') {
    return {
      borderWidth: 2,
      borderColor: COLORS.white10,
    };
  }
};
const getButtonDynamicSize = (size: ButtonProps['size']) => {
  if (size === 'M') {
    return {
      padding: 10,
      maxWidth: '50%' as DimensionValue,
    };
  }
  if (size === 'L') {
    return {
      padding: 15,
      maxWidth: '100%' as DimensionValue,
    };
  }
};

export const getButtonDynamicStyle = (
  type: ButtonProps['type'],
  size: ButtonProps['size'],
) => {
  return {
    ...getButtonDynamicBackground(type),
    ...getButtonDynamicSize(size),
  };
};
