import React, {JSX} from 'react';
import {Text, View} from 'react-native';
import {CustomInput} from '../CustomInput';
import {styles} from './styles';
import {InputPropsWithLabel} from './types';
export const CustomInputWithLabel = ({
  control,
  errors,
  rules,
  placeholder,
  name,
  secureTextEntry,
  autoCapitalize,
  defaultValue,
  textArea,
  label,
  beforeIcon,
}: InputPropsWithLabel): JSX.Element => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.inputLabel}>{label}</Text>
      <CustomInput
        name={name}
        placeholder={placeholder}
        control={control}
        errors={errors}
        rules={rules}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        defaultValue={defaultValue}
        textArea={textArea}
        beforeIcon={beforeIcon}
      />
    </View>
  );
};
