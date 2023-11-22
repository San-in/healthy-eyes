import {FieldValues, RegisterOptions} from 'react-hook-form';

export enum ErrorsType {
  pattern = 'pattern',
  required = 'required',
  minLength = 'minLength',
  maxLength = 'maxLength',
  min = 'min',
  max = 'max',
  validate = 'validate',
}
export const generateErrorText = (
  error: ErrorsType,
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined,
): string => {
  console.log(rules);
  if (error === ErrorsType.pattern) {
    return `Invalid format`;
  }
  if (error === ErrorsType.required) {
    return 'Field is required';
  }
  if (error === ErrorsType.minLength) {
    if (rules?.minLength) {
      return `Minimum length is ${rules.minLength} characters`;
    }
    return 'Input length is too short';
  }
  if (error === ErrorsType.maxLength) {
    if (rules?.maxLength) {
      return `Maximum length is ${rules.maxLength} characters`;
    }
    return 'Input length is too long';
  }
  if (error === ErrorsType.max) {
    if (rules?.max) {
      return `Maximum value is ${rules.max} numbers`;
    }
    return 'Input value is too big';
  }
  if (error === ErrorsType.min) {
    if (rules?.min) {
      return `Minimum value is ${rules.min} numbers`;
    }
    return 'Input value is too small';
  }
  if (error === ErrorsType.validate) {
    return 'Password is not match';
  }
  return 'Field invalid';
};
