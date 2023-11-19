import {STACKS} from '../../types/enums/stacks';
import {SCREENS} from '../../types/enums/screens';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation/stackParamLists';

const isAuth: boolean = true;
export const onStart = (
  navigation: NavigationProp<RootStackParamList, SCREENS.SPLASH>,
) => {
  if (isAuth) {
    navigation.navigate(STACKS.MAIN, {
      [STACKS.HOME]: {[SCREENS.HOME]: undefined},
      [STACKS.MENU]: {[SCREENS.MENU]: undefined},
      [STACKS.PROFILE]: {[SCREENS.PROFILE]: undefined},
    });
  } else {
    navigation.navigate(STACKS.AUTH, {
      [SCREENS.SIGNIN]: undefined,
      [SCREENS.SIGNUP]: undefined,
    });
  }
};
