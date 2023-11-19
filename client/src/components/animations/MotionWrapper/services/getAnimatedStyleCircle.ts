import {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

export const getAnimatedStyleCircle = (
  x: number,
  y: number,
  progress: SharedValue<number>,
) => {
  return useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x * Math.cos(2 * Math.PI * progress.value),
        },
        {
          translateY: y * Math.sin(2 * Math.PI * progress.value),
        },
      ],
    };
  });
};
