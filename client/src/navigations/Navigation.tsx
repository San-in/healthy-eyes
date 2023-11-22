import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './stacks/AuthStack';
import {MainStack} from './stacks/MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/stackParamLists';
import {SCREENS} from '../types/enums/screens';
import {SplashScreen} from '../screens/SplashScreen';
import {STACKS} from '../types/enums/stacks';
import {observer} from 'mobx-react-lite';
import {UIStore} from '../mobx';

const Navigation = () => {
  const {isAuth, isFirstRender} = UIStore;
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isFirstRender ? (
          <Stack.Screen
            name={SCREENS.SPLASH}
            component={SplashScreen}
            options={{animation: 'none'}}
          />
        ) : isAuth ? (
          <Stack.Screen name={STACKS.MAIN} component={MainStack} />
        ) : (
          <Stack.Screen name={STACKS.AUTH} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(Navigation);
