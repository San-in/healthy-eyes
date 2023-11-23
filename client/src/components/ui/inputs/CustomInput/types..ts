import {FieldErrors, FieldValues, RegisterOptions} from 'react-hook-form';
import {Control} from 'react-hook-form/dist/types/form';
import {JSX} from 'react';

export enum ErrorsType {
  pattern = 'pattern',
  required = 'required',
  minLength = 'minLength',
  maxLength = 'maxLength',
  min = 'min',
  max = 'max',
  validate = 'validate',
}
export interface InputProps {
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
  beforeIcon?: JSX.Element;
}
