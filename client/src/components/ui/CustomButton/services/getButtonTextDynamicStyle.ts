import {TEXT_COLOR} from '../../../../styles/text';
import {COLORS} from '../../../../styles/colors';
import {ButtonProps} from '../types';

const getButtonTextDynamicColor = (type: ButtonProps['type']) => {
  if (type === 'primary') {
    return {
      color: TEXT_COLOR.black,
    };
  }
  if (type === 'link' || type === 'secondary') {
    return {
      color: COLORS.white10,
    };
  }
};
const getButtonTextDynamicSize = (size: ButtonProps['size']) => {
  if (size === 'M') {
    return {
      fontSize: 18,
      lineHeight: 36,
      fontWeight: '500' as const,
    };
  }
  if (size === 'L') {
    return {
      fontSize: 24,
      lineHeight: 48,
      fontWeight: '600' as const,
    };
  }
};
export const getButtonTextDynamicStyle = (
  type: ButtonProps['type'],
  size: ButtonProps['size'],
) => {
  return {
    ...getButtonTextDynamicColor(type),
    ...getButtonTextDynamicSize(size),
  };
};
