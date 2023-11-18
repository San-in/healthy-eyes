import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './stacks/AuthStack';
import {MainStack} from './stacks/MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/stackParamLists';
import {SCREENS} from '../types/enums/screens';
import {SplashScreen} from '../screens/SplashScreen';
import {STACKS} from '../types/enums/stacks';

const isAuth: boolean = true;
export const Navigation = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SPLASH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
        {isAuth ? (
          <Stack.Screen name={STACKS.MAIN} component={MainStack} />
        ) : (
          <Stack.Screen name={STACKS.AUTH} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
