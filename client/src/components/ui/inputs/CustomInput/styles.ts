import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../styles/colors';
import {TEXT_COLOR} from '../../../../styles/text';
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
    color: TEXT_COLOR.primary,
    fontSize: 18,
    backgroundColor: BACKGROUND_COLOR.secondaryLight,
    borderRadius: BORDER_RADIUS_BASIC,
    padding: PADDING_INPUT_BASIC,
  },
  input__invalid: {
    backgroundColor: BACKGROUND_COLOR.white,
    borderColor: COLORS.red50,
    color: TEXT_COLOR.black,
    borderWidth: 2,
  },
  inputWithIcon: {
    paddingLeft: 56,
  },

  textArea: {
    height: 70,
  },
});
