import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Control} from 'react-hook-form/dist/types/form';
import {ErrorContainer} from '../CustomInput/errorContainer';
import {COLORS} from '../../../../styles/colors';
interface CheckBoxInputProps {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: keyof FieldValues;
  children: ReactNode;
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

export const CustomCheckBox: React.FC<CheckBoxInputProps> = ({
  control,
  name,
  rules,
  errors,
  children,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <BouncyCheckbox
              iconImageStyle={{tintColor: COLORS.gray70}}
              iconStyle={{borderRadius: 4, width: 20, height: 20}}
              innerIconStyle={{
                borderRadius: 4,
                width: 20,
                height: 20,
              }}
              onPress={onChange}
            />
            {children}
          </View>
          {errors[name]?.type && (
            <ErrorContainer>This field is required</ErrorContainer>
          )}
        </>
      )}
    />
  );
};
