import {StyleSheet} from 'react-native';
import {BORDER_RADIUS_BASIC} from '../../../styles/vars';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS_BASIC,
    gap: 12,
  },
});
