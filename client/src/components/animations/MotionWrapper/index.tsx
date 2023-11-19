import React, {useEffect} from 'react';
import {View} from 'react-native';

import {motionWrapperProps} from './props';
import {styles} from './stytles';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
import {getSelectedAnimatedStyle} from './services/getSelectedAnimatedStyle';

export const MotionWrapper = ({
  trajectory,
  x = 100,
  y = 100,
  duration = 5000,
  children,
}: motionWrapperProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: duration,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  let selectedAnimatedStyle = getSelectedAnimatedStyle({
    x,
    y,
    progress,
    trajectory,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, selectedAnimatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};
