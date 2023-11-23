import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../styles/colors';
import {BACKGROUND_COLOR} from '../../../../styles/backgrounds';
import {
  BORDER_RADIUS_BASIC,
  PADDING_INPUT_BASIC,
} from '../../../../styles/vars';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    fontSize: 18,
    backgroundColor: BACKGROUND_COLOR.secondaryLight,
    borderRadius: BORDER_RADIUS_BASIC,
    padding: PADDING_INPUT_BASIC,
  },
  input__invalid: {
    backgroundColor: BACKGROUND_COLOR.primary,
    borderColor: COLORS.red50,
    borderWidth: 2,
  },
  inputWithIcon: {
    paddingLeft: 56,
  },

  textArea: {
    height: 70,
  },
});
