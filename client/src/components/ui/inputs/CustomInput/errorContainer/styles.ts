import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../styles/colors';

export const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginVertical: 10,
  },
  errorText: {
    color: COLORS.red50,
    fontWeight: '600',
  },
});
