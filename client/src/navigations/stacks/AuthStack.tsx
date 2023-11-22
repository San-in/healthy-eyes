import React, {JSX} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../../types/enums/screens';
import {AuthStackParamList} from '../../types/navigation/stackParamLists';
import {SignInScreen} from '../../screens/auth/SingInScreen';
import {SignUpScreen} from '../../screens/auth/SingUpScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SIGNIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SIGNIN} component={SignInScreen} />
      <Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
