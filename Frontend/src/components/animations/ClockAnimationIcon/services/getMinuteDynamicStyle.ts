import {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

export const getMinuteDynamicStyle = (
  radius: number,
  minuteRotation: SharedValue<number>,
  mainColor: string,
  accentColor: string,
) => {
  const translateXStart = radius / -50;
  const translateYStart = radius * -0.45;
  const translateXEnd = radius / 50;
  const translateYEnd = radius * 0.45;
  const backgroundColor = mainColor;
  const width = radius / 25;
  const height = radius * 0.8;
  const borderRadius = radius / 50;
  const borderBottomWidth = radius / 25;
  const borderBottomColor = accentColor;
  const top = radius * 0.98;
  const left = radius * 0.93;

  return useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateXStart},
        {translateY: translateYStart},
        {rotate: `${minuteRotation.value}deg`},
        {translateX: translateXEnd},
        {translateY: translateYEnd},
      ],
      backgroundColor,
      width,
      height,
      borderRadius,
      borderBottomWidth,
      borderBottomColor,
      top,
      left,
    };
  });
};
