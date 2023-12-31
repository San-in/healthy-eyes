import React, {JSX} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {sharedStyles} from '../../styles/shared';
import {shadows} from '../../styles/shadows';
import {LogoIcon} from '../../assets/icons/LogoIcon';
import {SplashHeroImage} from './splashHeroImage';
import {CustomButton} from '../../components/ui/CustomButton';
import {TEXT_COLOR} from '../../styles/text';
import {toggleIsFirstRender} from '../../redux/slices/renderSlice';
import {useAppDispatch} from '../../redux/hooks';
export const SplashScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(toggleIsFirstRender());
  };
  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <View style={styles.header}>
        <LogoIcon width={70} height={50} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <SplashHeroImage />
        <View style={{gap: 10, marginVertical: '10%'}}>
          <Text
            style={[styles.heroText, TEXT_COLOR.primary, shadows.TextTitle]}>
            Take care of your eyes with
          </Text>
          <Text style={[styles.heroText, TEXT_COLOR.accent, shadows.TextTitle]}>
            H-Eyes
          </Text>
        </View>
        <CustomButton text={"Let's start"} onClick={onStart} />
      </ScrollView>
    </SafeAreaView>
  );
};
