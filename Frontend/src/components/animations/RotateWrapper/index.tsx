import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import {styles} from './stytles';

export const RotateWrapper = ({children, clockwiseDirection}: any) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(rotateValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    Animated.loop(animation).start();
  }, [rotateValue]);
  const rotateDirection = clockwiseDirection ? 1 : -1;

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${rotateDirection * 360}deg`],
  });

  const animatedStyle = {
    transform: [{rotate}],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};
