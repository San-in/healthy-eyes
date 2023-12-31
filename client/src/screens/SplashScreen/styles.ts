import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL_BASIC} from '../../styles/vars';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
    position: 'relative',
  },
  header: {
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
    marginTop: '-3%',
    marginBottom: '5%',
  },
  heroText: {
    fontSize: 55,
    lineHeight: 54,
  },
});
