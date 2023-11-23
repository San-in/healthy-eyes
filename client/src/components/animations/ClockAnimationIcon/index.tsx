import React, {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {ClockAnimationIconProps} from './props';
import {styles} from './styles';
import {getHoursDynamicStyle} from './services/getHoursDynamicStyle';
import {getMinuteDynamicStyle} from './services/getMinuteDynamicStyle';
import {getContainerDynamicStyle} from './services/getContainerDynamicStyle';
import {getContainerDynamicDashedStyle} from './services/getContainerDynamicDashedStyle';
import {sharedStyles} from '../../../styles/shared';

export const ClockAnimationIcon = (props: ClockAnimationIconProps) => {
  useEffect(() => {
    animateHourHand();
    animateMinuteHand();
  }, []);

  const {
    speed = 2,
    radius,
    mainColor = '#000000',
    accentColor = '#FF0000',
  } = props;
  const hourRotation = useSharedValue(0);
  const minuteRotation = useSharedValue(0);
  const hourDynamicStyle = getHoursDynamicStyle(
    radius,
    mainColor,
    hourRotation,
  );
  const minuteDynamicStyle = getMinuteDynamicStyle(
    radius,
    minuteRotation,
    mainColor,
    accentColor,
  );
  const containerDynamicStyle = getContainerDynamicStyle(mainColor, radius);
  const containerDynamicDashedStyle = getContainerDynamicDashedStyle(
    accentColor,
    radius,
  );
  const animateHourHand = () => {
    hourRotation.value = withRepeat(
      withTiming(360, {
        duration: 43200 / speed,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  };
  const animateMinuteHand = () => {
    minuteRotation.value = withRepeat(
      withTiming(360, {
        duration: 3600 / speed,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  };

  return (
    <View style={[sharedStyles.flexCenter, containerDynamicStyle]}>
      <View
        style={[
          sharedStyles.flexCenter,
          styles.containerDashed,
          containerDynamicDashedStyle,
        ]}>
        <Animated.View style={[styles.hand, hourDynamicStyle]} />
        <Animated.View style={[styles.hand, minuteDynamicStyle]} />
      </View>
    </View>
  );
};
