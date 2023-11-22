import React, {JSX, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AuthStackParamList,
  RootStackParamList,
} from '../../types/navigation/stackParamLists';
import {SCREENS} from '../../types/enums/screens';
import {styles} from './styles';
import {sharedStyles} from '../../styles/shared';
import {shadows} from '../../styles/shadows';
import {LogoIcon} from '../../assets/icons/LogoIcon';
import {Button} from '../../components/ui/Button';
import {onStart} from '../../navigations/services/onStart';
import {SplashHeroImage} from './splashHeroImage';

export const SplashScreen = (): JSX.Element => {
  const navigation: NavigationProp<RootStackParamList, SCREENS.SPLASH> =
    useNavigation();
  useEffect(() => {
    onStart(navigation);
  }, []);
  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <View style={styles.header}>
        <LogoIcon width={70} height={50} />
      </View>
      <ScrollView style={styles.container}>
        <SplashHeroImage />
        <View style={{gap: 10, marginVertical: '10%'}}>
          <Text style={[styles.heroText, shadows.TextTitle]}>
            Take care of your eyes with
          </Text>
          <Text
            style={[
              styles.heroText,
              styles.heroText__accent,
              shadows.TextTitle,
            ]}>
            H-Eyes
          </Text>
        </View>
        <Button text={"Let's start"} onClick={() => onStart(navigation)} />
      </ScrollView>
    </SafeAreaView>
  );
};
