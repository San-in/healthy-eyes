import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL_BASIC} from '../../../styles/vars';

export const styles = StyleSheet.create({
  forgotPasswordButton: {
    marginTop: 11,
    marginBottom: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',

    transform: [{translateX: -15}], // delete after changing logo
  },
  contentContainer: {
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
  },
  title: {
    marginTop: 25,
  },
  form: {
    marginTop: 25,
  },
  formContent: {
    gap: 20,
  },
});
