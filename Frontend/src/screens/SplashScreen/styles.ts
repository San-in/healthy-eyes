import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL_BASIC} from '../../styles/vars';
import {TEXT_COLOR} from '../../styles/text';

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
    color: TEXT_COLOR.primary,
  },
  heroText__accent: {
    color: TEXT_COLOR.accent,
  },
});
