import React, {JSX} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {styles} from './styles';
import {sharedStyles} from '../../styles/shared';
import {shadows} from '../../styles/shadows';
import {LogoIcon} from '../../assets/icons/LogoIcon';
import {SplashHeroImage} from './splashHeroImage';
import {UIStore} from '../../mobx';
import {CustomButton} from '../../components/ui/CustomButton';
import {TEXT_COLOR} from '../../styles/text';
export const SplashScreen = observer((): JSX.Element => {
  const onStart = () => {
    UIStore.setIsFirstRender();
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
});
