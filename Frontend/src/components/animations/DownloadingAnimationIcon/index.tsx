import React, {JSX, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withDelay,
  SharedValue,
} from 'react-native-reanimated';
import {COLORS} from '../../../styles/colors';
import {DownloadingAnimationIconProps} from './props';
import {styles} from './styles';
import {getContainerDynamicStyles} from './services/getContainerDynamicStyles';
import {getItemDynamicStyles} from './services/getItemDynamicStyles';
import {getFirstItemDynamicStyles} from './services/getFirstItemDynamicStyles';
import {getLastItemDynamicStyles} from './services/getLastItemDynamicStyles';

export const DownloadingAnimationIcon = (
  props: DownloadingAnimationIconProps,
): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    quantityOfSections,
    itemWidth,
    itemHeight,
    stepSpeed = 500,
    itemColor = 'red',
    backgroundColor = 'white',
  } = props;
  const containerDynamicStyles = getContainerDynamicStyles(
    quantityOfSections,
    itemWidth,
    itemHeight,
    backgroundColor,
  );
  const itemDynamicStyles = getItemDynamicStyles(
    itemWidth,
    itemHeight,
    itemColor,
  );
  const firstItemDynamicStyles = getFirstItemDynamicStyles(
    quantityOfSections,
    itemWidth,
  );
  const lastItemDynamicStyles = getLastItemDynamicStyles(
    quantityOfSections,
    itemWidth,
  );

  useEffect(() => {
    if (!isVisible) {
      animateItems();
    } else {
      animateItemsReverse();
    }
    const animationInterval: NodeJS.Timeout = setInterval(() => {
      setIsVisible(prevValue => !prevValue);
    }, quantityOfSections * stepSpeed);

    return () => {
      clearInterval(animationInterval);
    };
  }, [isVisible, setIsVisible]);

  const itemOpacities = Array(quantityOfSections)
    .fill(0)
    .map(() => useSharedValue(0));

  const animateItems = () => {
    itemOpacities.forEach((itemOpacity, index) => {
      itemOpacity.value = withSequence(
        withDelay(index * stepSpeed, withSpring(1)),
      );
    });
  };
  const animateItemsReverse = () => {
    itemOpacities
      .reverse()
      .forEach((itemOpacity: SharedValue<number>, index: number) => {
        itemOpacity.value = withSequence(
          withDelay(index * stepSpeed, withSpring(0)),
        );
      });
  };

  return (
    <View style={[styles.container, containerDynamicStyles]}>
      {itemOpacities.map((itemOpacity: SharedValue<number>, index: number) => (
        <Animated.View
          key={index}
          style={[
            styles.item,
            itemDynamicStyles,
            index === 0 && firstItemDynamicStyles,
            index === quantityOfSections - 1 && lastItemDynamicStyles,
            useAnimatedStyle(() => ({
              opacity: itemOpacity.value,
            })),
          ]}
        />
      ))}
    </View>
  );
};
