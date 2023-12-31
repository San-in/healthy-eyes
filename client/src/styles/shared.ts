import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from './backgrounds';

export const sharedStyles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_COLOR.primary,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
