import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import Svg, {Path, SvgProps} from 'react-native-svg';

interface MailProps {
  trajectory: 'circle' | 'quarter' | 'triangle';
  x?: number;
  y?: number;
}

const Envelope = (props: SvgProps) => (
  <Svg width={34} height={28} fill="none" {...props}>
    <Path
      fill="#FED36A"
      d="M27.604.252.457 8.942l5.858 18.3 27.146-8.69-5.857-18.3Z"
    />
    <Path
      fill="#263238"
      d="M27.765.43c-.05.114-.11.225-.18.329-.135.229-.314.53-.543.901l-2.04 3.307-6.834 10.87-.057.086h-.1l-.236-.093-12.166-4.666-3.671-1.431-.995-.401A2.104 2.104 0 0 1 .6 9.174c.122.025.242.06.358.108l1.016.358 3.7 1.366 12.165 4.602.243.086-.157.057L24.83 4.916c.88-1.36 1.595-2.468 2.11-3.256l.58-.88c.07-.124.152-.241.244-.35Z"
    />
    <Path
      fill="#263238"
      d="M6.454 27.423c-.065 0 1.173-3.192 2.762-7.063 1.589-3.872 2.941-6.992 3.005-6.963.065.028-1.166 3.191-2.762 7.063-1.596 3.871-2.92 6.991-3.005 6.963ZM21.195 10.276c.043-.057 2.863 1.79 6.283 4.122 3.421 2.333 6.183 4.294 6.14 4.294-.043 0-2.862-1.782-6.283-4.115-3.42-2.333-6.183-4.236-6.14-4.3Z"
    />
  </Svg>
);

const Mail = ({trajectory, x = 100, y = 100}: MailProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 5000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  const animatedStyleCircle = useAnimatedStyle(() => {
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

  const animatedStyleTriangle = useAnimatedStyle(() => {
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

  const animatedStyleQuarter = useAnimatedStyle(() => {
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

  let selectedAnimatedStyle = {};

  if (trajectory === 'triangle') {
    selectedAnimatedStyle = animatedStyleTriangle;
  } else if (trajectory === 'quarter') {
    selectedAnimatedStyle = animatedStyleQuarter;
  } else if (trajectory === 'circle') {
    selectedAnimatedStyle = animatedStyleCircle;
  } else {
    console.error('Unknown animation type');
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, selectedAnimatedStyle]}>
        <Envelope />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    position: 'absolute',
  },
});

export default Mail;
