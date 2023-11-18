import React from 'react';
import {Image, Dimensions, View} from 'react-native';
import {RotateWrapper} from '../animations/RotateWrapper';
import {GearIcon} from '../../assets/icons/GearIcon';
import {MotionWrapper} from '../animations/MotionWrapper';
import {DocumentIcon} from '../../assets/icons/DocumentIcon';
import {EnvelopeIcon} from '../../assets/icons/EnvelopeIcon';
import {ClockAnimationIcon} from '../animations/ClockAnimationIcon';
import {BACKGROUND_COLOR} from '../../styles/backgrounds';
import {DownloadingAnimationIcon} from '../animations/DownloadingAnimationIcon';
import {styles} from './styles';

export const SplashHeroImage = () => {
  const windowWidth: number = Dimensions.get('window').width;
  const windowHeight: number = Dimensions.get('window').height;
  const containerWidth: number =
    windowWidth < windowHeight ? windowWidth : windowHeight;
  const containerHeight: number =
    windowWidth < windowHeight ? windowHeight : windowWidth;

  let imageName;
  if (windowWidth <= 320) {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-1x.png');
  } else if (windowWidth <= 640) {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-2x.png');
  } else {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-3x.png');
  }

  return (
    <View
      style={[
        styles.container,
        {
          height: containerHeight * 0.4,
          width: containerWidth * 0.85,
        },
      ]}>
      <Image source={imageName} style={styles.image} />
      <View style={styles.gearContainer}>
        <RotateWrapper>
          <GearIcon />
        </RotateWrapper>
      </View>
      <View style={styles.clockContainer}>
        <ClockAnimationIcon
          radius={25}
          mainColor={BACKGROUND_COLOR.secondaryLight}
          accentColor={BACKGROUND_COLOR.accent}
          speed={1}
        />
      </View>
      <View style={styles.documentContainer}>
        <MotionWrapper trajectory={'circle'} x={50} y={30} duration={2000}>
          <DocumentIcon />
        </MotionWrapper>
      </View>
      <View style={styles.envelopeContainer}>
        <MotionWrapper trajectory={'circle'} x={70} y={50}>
          <EnvelopeIcon />
        </MotionWrapper>
      </View>
      <View style={styles.downloadingContainer}>
        <DownloadingAnimationIcon
          itemHeight={8}
          itemWidth={14}
          quantityOfSections={5}
          itemColor={BACKGROUND_COLOR.accent}
        />
      </View>
    </View>
  );
};
