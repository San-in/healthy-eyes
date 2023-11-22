import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Control} from 'react-hook-form/dist/types/form';
import {
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {COLORS} from '../../../styles/colors';
import WarningIcon from '../../../assets/icons/WarningIcon';
import {ErrorsType, generateErrorText} from './services/generateErrorText';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  autoCapitalize?: boolean;
  name: keyof FieldValues;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  defaultValue?: string;
  textArea?: boolean;
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

function CustomInput({
  control,
  errors,
  rules,
  placeholder,
  name,
  secureTextEntry,
  autoCapitalize,
  defaultValue,
  textArea,
}: InputProps) {
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
              <TextInput
                placeholder={placeholder}
                style={[
                  styles.input,
                  textArea && styles.textArea,
                  value && styles.input_valid,
                  errors[name] && styles.input_invalid,
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={errors[name] && COLORS.red50}
                autoCapitalize={autoCapitalize ? 'words' : 'none'}
                multiline={textArea}
              />
              {rules?.maxLength && rules?.maxLength < value?.length && (
                <View style={styles.errorContainer}>
                  <WarningIcon stroke={COLORS.red70} />
                  <Text style={styles.errorText}>
                    Your message is too long...
                  </Text>
                </View>
              )}
            </>
          );
        }}
      />

      {errors[name] && (
        <View style={styles.errorContainer}>
          <WarningIcon stroke={COLORS.red70} />
          <Text style={styles.errorText}>
            {generateErrorText(errors[name]?.type as ErrorsType, rules)}
          </Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 20,
  },
  errorText: {
    color: COLORS.red50,
    fontWeight: '600',
  },
  input: {
    borderColor: COLORS.gray70,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: '100%',
  },
  input_invalid: {
    borderColor: COLORS.red50,
    borderWidth: 1.5,
  },
  input_valid: {
    borderColor: COLORS.green50,
    borderWidth: 1.5,
  },
  textArea: {
    height: 70,
  },
});
export default React.memo(CustomInput);
