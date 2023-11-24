import React, {JSX} from 'react';
import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from 'react-native';
import {styles} from './styles';
import {TEXT, TEXT_COLOR} from '../../../styles/text';
import {StringWithLinkProps} from './types';
import {sharedStyles} from '../../../styles/shared';

export const StringWithLink = ({
  text,
  link,
  onHandler,
  align = 'flex-start',
  textSize = 'normal',
}: StringWithLinkProps): JSX.Element => {
  const wordText = text.split(' ');
  const linkText = link.split(' ');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: align,
        flexWrap: 'wrap',
      }}>
      {wordText.map((word, index) => (
        <Text
          key={'text' + index}
          style={[TEXT_COLOR.secondary, TEXT[textSize]]}>
          {word}{' '}
        </Text>
      ))}
      {linkText.map((link, index) => (
        <Pressable key={'link' + index} onPress={onHandler}>
          <Text style={[TEXT_COLOR.accent, TEXT[textSize]]}>{link} </Text>
        </Pressable>
      ))}
    </View>
  );
};
