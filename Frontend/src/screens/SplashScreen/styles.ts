import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL_BASIC} from '../../styles/vars';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
    position: 'relative',
  },
  header: {
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
  },
});
