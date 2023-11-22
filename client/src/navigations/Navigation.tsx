import React, {JSX, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './stacks/AuthStack';
import {MainStack} from './stacks/MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation/stackParamLists';
import {SCREENS} from '../types/enums/screens';
import {SplashScreen} from '../screens/SplashScreen';
import {STACKS} from '../types/enums/stacks';
import store from '../mobx';
import {observer} from 'mobx-react-lite';

export const Navigation = observer(() => {
  const {isAuth, isFirstRender, setIsFirstRender} = store;
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    setIsFirstRender(false); // Встановлюємо isFirstRender в false після першого рендера
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isFirstRender && (
          <Stack.Screen
            name={SCREENS.SPLASH}
            component={SplashScreen}
            options={{animation: 'none'}}
          />
        )}
        {isAuth ? (
          <Stack.Screen name={STACKS.MAIN} component={MainStack} />
        ) : (
          <Stack.Screen name={STACKS.AUTH} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
