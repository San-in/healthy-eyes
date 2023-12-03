import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectAuth} from '../redux/slices/authSlice';
import {selectIsFirstRender} from '../redux/slices/renderSlice';
import {useAppSelector} from '../redux/hooks';
import {AuthStack} from './stacks/AuthStack';
import {MainStack} from './stacks/MainStack';
import {SplashScreen} from '../screens/SplashScreen';
import {RootStackParamList} from '../types/navigation/stackParamLists';
import {SCREENS} from '../types/enums/screens';
import {STACKS} from '../types/enums/stacks';

export const Navigation = () => {
  const isAuth = useAppSelector(selectAuth);
  const isFirstRender = useAppSelector(selectIsFirstRender);

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
