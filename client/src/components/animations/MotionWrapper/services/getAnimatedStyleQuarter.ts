import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const getAnimatedStyleQuarter = (
  x: number,
  y: number,
  progress: SharedValue<number>,
) => {
  return useAnimatedStyle(() => {
    const xOffset = interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [x, x, -x, -x, x],
    );

    const yOffset = interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [y, -y, -y, y, y],
    );

    return {
      transform: [
        {
          translateX: xOffset,
        },
        {
          translateY: yOffset,
        },
      ],
    };
  });
};
