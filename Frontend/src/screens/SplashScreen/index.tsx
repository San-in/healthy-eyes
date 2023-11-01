import * as React from 'react';
import {JSX} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {LogoIcon} from '../../components/icons/LogoIcon';
import {sharedStyles} from '../../styles/shared';
import {styles} from './styles';
import {MotionWrapper} from '../../components/animations/MotionWrapper';
import {EnvelopeIcon} from '../../components/icons/EnvelopeIcon';
import {DocumentIcon} from '../../components/icons/DocumentIcon';
import {RotateWrapper} from '../../components/animations/RotateWrapper';

export const SplashScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <TouchableOpacity style={styles.header}>
        <LogoIcon width={100} height={100} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={{width: 250, height: 250, borderWidth: 2}}>
          <RotateWrapper>
            <View
              style={{width: 10, height: 20, backgroundColor: 'red'}}></View>
          </RotateWrapper>
        </View>
        <View style={{width: 250, height: 250, borderWidth: 2}}>
          <MotionWrapper trajectory={'circle'} x={50} y={30}>
            <EnvelopeIcon />
          </MotionWrapper>
        </View>
      </View>
    </SafeAreaView>
  );
};
