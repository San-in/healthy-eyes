import React from 'react';
import {SharedValue} from 'react-native-reanimated';

export type motionWrapperProps = {
  trajectory: 'circle' | 'quarter' | 'triangle';
  x?: number;
  y?: number;
  duration?:
    | 1000
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000
    | 10000;
  children: React.ReactNode;
};

export type getSelectedAnimatedProps = {
  x: number;
  y: number;
  progress: SharedValue<number>;
  trajectory: 'triangle' | 'circle' | 'quarter';
};
