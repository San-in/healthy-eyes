import {TEXT_COLOR} from '../../../../styles/text';
import {ButtonProps} from '../types';

const getButtonTextDynamicColor = (type: ButtonProps['type']) => {
  if (type === 'primary') {
    return TEXT_COLOR.black;
  }
  if (type === 'link' || type === 'secondary') {
    return TEXT_COLOR.white;
  }
};
const getButtonTextDynamicSize = (size: ButtonProps['size']) => {
  if (size === 'M') {
    return {
      fontSize: 18,
      fontWeight: '500' as const,
    };
  }
  if (size === 'L') {
    return {
      fontSize: 24,
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
