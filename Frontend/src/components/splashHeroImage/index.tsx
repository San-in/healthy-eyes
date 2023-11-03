import React from 'react';
import {Image, Dimensions, View} from 'react-native';
import {RotateWrapper} from '../animations/RotateWrapper';
import {GearIcon} from '../../assets/icons/GearIcon';
import {MotionWrapper} from '../animations/MotionWrapper';
import {DocumentIcon} from '../../assets/icons/DocumentIcon';
import {EnvelopeIcon} from '../../assets/icons/EnvelopeIcon';
import {ClockAnimationIcon} from '../animations/ClockAnimationIcon';
import {COLORS} from '../../styles/colors';
import {BACKGROUND_COLOR} from '../../styles/background';
import {DownloadingAnimationIcon} from '../animations/DownloadingAnimationIcon';

export const SplashHeroImage = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const containerWidth =
    windowWidth < windowHeight ? windowWidth : windowHeight;
  const containerHeight =
    windowWidth < windowHeight ? windowHeight : windowWidth;

  let imageName;
  if (windowWidth <= 320) {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-1x.png'); // Для устройств с базовым разрешением
  } else if (windowWidth <= 640) {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-2x.png'); // Для устройств с разрешением 2x
  } else {
    imageName = require('../../assets/splashHeroBg/splash-hero-bg-3x.png'); // Для устройств с разрешением 3x
  }

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: containerHeight * 0.4,
        width: containerWidth * 0.8,
        position: 'relative',
      }}>
      <Image
        source={imageName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: '27%',
          left: '70%',
        }}>
        <RotateWrapper>
          <GearIcon />
        </RotateWrapper>
      </View>
      <View style={{position: 'absolute', top: '2%'}}>
        <ClockAnimationIcon
          radius={25}
          mainColor={BACKGROUND_COLOR.secondaryLight}
          accentColor={BACKGROUND_COLOR.accent}
          speed={1}
        />
      </View>
      <View style={{position: 'absolute', right: '25%', top: '20%'}}>
        <MotionWrapper trajectory={'circle'} x={50} y={30} duration={2000}>
          <DocumentIcon />
        </MotionWrapper>
      </View>
      <View style={{position: 'absolute', left: '33%', top: '22%'}}>
        <MotionWrapper trajectory={'circle'} x={70} y={50}>
          <EnvelopeIcon />
        </MotionWrapper>
      </View>
      <View style={{position: 'absolute', left: '39%', top: '40%'}}>
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
