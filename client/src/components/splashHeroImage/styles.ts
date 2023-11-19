import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '../../styles/backgrounds';
import {COLORS} from '../../styles/colors';
import {BORDER_RADIUS_BASIC} from '../../styles/vars';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white10,
    borderRadius: BORDER_RADIUS_BASIC,
  },
  gearContainer: {
    position: 'absolute',
    top: '27%',
    left: '70%',
  },
  documentContainer: {position: 'absolute', right: '25%', top: '20%'},
  envelopeContainer: {position: 'absolute', left: '33%', top: '22%'},
  clockContainer: {position: 'absolute', top: '2%'},
  downloadingContainer: {position: 'absolute', left: '39%', top: '40%'},
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
