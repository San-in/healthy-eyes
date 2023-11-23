import React, {JSX, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {ErrorContainer} from './errorContainer';
import {CrossedEyeButton} from './crossedEyeButton';
import {IconContainer} from './iconContainer';
import {generateErrorText} from './services/generateErrorText';
import {COLORS} from '../../../../styles/colors';
import {styles} from './styles';
import {ErrorsType, InputProps} from './types.';
import {TEXT_COLOR} from '../../../../styles/text';

export const CustomInput = ({
  control,
  errors,
  rules,
  placeholder,
  name,
  secureTextEntry,
  autoCapitalize,
  defaultValue,
  textArea,
  beforeIcon,
}: InputProps): JSX.Element => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(!!secureTextEntry);
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder={placeholder}
                  style={[
                    styles.input,
                    TEXT_COLOR.primary,
                    textArea && styles.textArea,
                    errors[name] && styles.input__invalid,
                    beforeIcon && styles.inputWithIcon,
                  ]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={isPasswordHidden}
                  placeholderTextColor={
                    errors[name] ? COLORS.red50 : COLORS.gray30
                  }
                  autoCapitalize={autoCapitalize ? 'words' : 'none'}
                  multiline={textArea}
                />
                {beforeIcon && <IconContainer>{beforeIcon}</IconContainer>}
                {secureTextEntry && (
                  <CrossedEyeButton
                    stroke={errors[name] && COLORS.red50}
                    setIsPasswordHidden={setIsPasswordHidden}
                  />
                )}
              </View>
              {rules?.maxLength && rules?.maxLength < value?.length && (
                <ErrorContainer>Your message is too long...</ErrorContainer>
              )}
            </>
          );
        }}
      />
      {errors[name] && (
        <ErrorContainer>
          {generateErrorText(errors[name]?.type as ErrorsType, rules)}
        </ErrorContainer>
      )}
    </View>
  );
};
