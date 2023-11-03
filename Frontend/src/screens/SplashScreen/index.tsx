import React, {JSX} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {sharedStyles} from '../../styles/shared';
import {BACKGROUND_COLOR} from '../../styles/background';
import {LogoIcon} from '../../assets/icons/LogoIcon';
import {EnvelopeIcon} from '../../assets/icons/EnvelopeIcon';
import {DocumentIcon} from '../../assets/icons/DocumentIcon';
import {GearIcon} from '../../assets/icons/GearIcon';
import {MotionWrapper} from '../../components/animations/MotionWrapper';
import {RotateWrapper} from '../../components/animations/RotateWrapper';
import {ClockAnimationIcon} from '../../components/animations/ClockAnimationIcon';
import {COLORS} from '../../styles/colors';
import {DownloadingAnimationIcon} from '../../components/animations/DownloadingAnimationIcon';
import {SplashHeroImage} from '../../components/splashHeroImage';

export const SplashScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <View style={styles.header}>
        <LogoIcon width={70} height={50} />
      </View>
      <ScrollView style={styles.container}>
        <View>
          <SplashHeroImage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
