import {getAnimatedStyleTriangle} from './getAnimatedStyleTriangle';
import {getAnimatedStyleQuarter} from './getAnimatedStyleQuarter';
import {getAnimatedStyleCircle} from './getAnimatedStyleCircle';
import {getSelectedAnimatedProps} from '../props';

export const getSelectedAnimatedStyle = (props: getSelectedAnimatedProps) => {
  const {x, y, progress, trajectory} = props;

  if (trajectory === 'triangle') {
    return getAnimatedStyleTriangle(x, y, progress);
  } else if (trajectory === 'quarter') {
    return getAnimatedStyleQuarter(x, y, progress);
  } else if (trajectory === 'circle') {
    return getAnimatedStyleCircle(x, y, progress);
  } else {
    console.error('Unknown animation type');
    return {};
  }
};
