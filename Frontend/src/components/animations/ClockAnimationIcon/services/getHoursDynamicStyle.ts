import {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

export const getHoursDynamicStyle = (
  radius: number,
  mainColor: string,
  hourRotation: SharedValue<number>,
) => {
  const translateXStart = radius / -50;
  const translateYStart = radius * -0.3;
  const translateXEnd = radius / 50;
  const translateYEnd = radius * 0.3;
  const backgroundColor = mainColor;
  const width = radius / 18;
  const height = radius / 2;
  const borderRadius = radius / 36;
  const top = radius * 0.98;
  const left = radius * 0.92;

  return useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateXStart},
        {translateY: translateYStart},
        {rotate: `${hourRotation.value}deg`},
        {translateX: translateXEnd},
        {translateY: translateYEnd},
      ],
      backgroundColor,
      width,
      height,
      borderRadius,
      top,
      left,
    };
  });
};
