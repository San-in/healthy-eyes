import React, {JSX, ReactNode, useState} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import {styles} from './styles';

export const IconContainer = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [iconHeight, setIconHeight] = useState(0);
  const onChangeLayout = (event: LayoutChangeEvent) => {
    setIconHeight(event.nativeEvent.layout.height);
  };
  return (
    <View
      style={[styles.icon, {transform: [{translateY: -iconHeight / 2}]}]}
      onLayout={onChangeLayout}>
      {children}
    </View>
  );
};
