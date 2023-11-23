import React, {JSX} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../../styles/colors';
import {TEXT} from '../../../styles/text';
import {HorizontalDividerProps} from './types';

export const HorizontalDivider = ({
  text,
  color = COLORS.gray30,
}: HorizontalDividerProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {backgroundColor: color}]}></View>
      <Text style={[TEXT.large, {color}]}>{text}</Text>
      <View style={[styles.line, {backgroundColor: color}]}></View>
    </View>
  );
};
