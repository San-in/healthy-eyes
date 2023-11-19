import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const getAnimatedStyleTriangle = (
  x: number,
  y: number,
  progress: SharedValue<number>,
) => {
  return useAnimatedStyle(() => {
    const xOffset = interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [x, x / 4, -x / 4, -x, x],
    );

    const yOffset = interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [y, y / 4, -y / 4, y, y],
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
