import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from './backgrounds';
import {TEXT_COLOR} from './text';

export const sharedStyles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_COLOR.primary,
  },
});
