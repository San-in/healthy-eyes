import * as React from 'react';
import {JSX} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {LogoIcon} from '../../../components/icons/LogoIcon';

export const SignInScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>SignIn Screen</Text>
      <LogoIcon width={150} height={150} />
    </SafeAreaView>
  );
};
