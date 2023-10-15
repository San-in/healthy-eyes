import * as React from 'react';
import {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './stacks/AuthStack';
import {MainStack} from './stacks/MainStack';

const isAuth = true;
export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
