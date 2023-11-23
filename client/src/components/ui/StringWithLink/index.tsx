import React, {JSX} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {TEXT, TEXT_COLOR} from '../../../styles/text';
import {StringWithLinkProps} from './types';

export const StringWithLink = ({
  text,
  link,
  onHandler,
}: StringWithLinkProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={[TEXT_COLOR.secondary, TEXT.large]}>{text}</Text>
      <TouchableOpacity onPress={onHandler}>
        <Text style={[TEXT_COLOR.accent, TEXT.large]}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};
