import * as React from 'react';
import {JSX} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {LogoIcon} from '../../components/icons/LogoIcon';
import {sharedStyles} from '../../styles/shared';
import {styles} from './styles';
import Mail from '../../components/icons/mail';

export const SplashScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <TouchableOpacity style={styles.header}>
        <LogoIcon width={100} height={100} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Mail trajectory={'quarter'} />
      </View>
    </SafeAreaView>
  );
};
