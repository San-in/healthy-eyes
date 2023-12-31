import React, {JSX} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ButtonProps} from './types';
import {getButtonTextDynamicStyle} from './services/getButtonTextDynamicStyle';
import {getButtonDynamicStyle} from './services/getButtonDynamicStyle';
import {sharedStyles} from '../../../styles/shared';

export const CustomButton = (props: ButtonProps): JSX.Element => {
  const {
    text,
    onClick,
    type = 'primary',
    size = 'L',
    beforeIcon,
    afterIcon,
    disabled,
  } = props;
  const buttonDynamicStyle = getButtonDynamicStyle(type, size);
  const buttonTextDynamicStyle = getButtonTextDynamicStyle(type, size);

  return (
    <TouchableOpacity onPress={onClick} disabled={disabled}>
      <View
        style={[sharedStyles.flexCenter, styles.button, buttonDynamicStyle]}>
        {beforeIcon && beforeIcon}
        <Text style={buttonTextDynamicStyle}>{text}</Text>
        {afterIcon && afterIcon}
      </View>
    </TouchableOpacity>
  );
};
