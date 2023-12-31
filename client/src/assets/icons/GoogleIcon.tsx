import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface GoogleIconProps extends SvgProps {
  stroke?: string;
}

const GoogleIcon = ({stroke = COLORS.white20, ...props}: GoogleIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.27 7.508c-.68 1.36-1.07 2.88-1.07 4.49 0 1.61.39 3.13 1.07 4.49l.01-.01v.01a9.962 9.962 0 0 0 8.92 5.51c2.7 0 4.97-.89 6.62-2.42 1.89-1.74 2.98-4.31 2.98-7.36 0-.82-.07-1.42-.21-2.04H12.2v3.71h5.51c-.11.92-.71 2.31-2.04 3.24-.84.59-1.98 1-3.47 1-2.64 0-4.89-1.74-5.69-4.16-.21-.62-.33-1.29-.33-1.98s.12-1.36.32-1.98c.06-.18.13-.37.21-.54.95-2.13 3.05-3.61 5.49-3.61 1.88 0 3.14.81 3.87 1.49l2.82-2.76c-1.73-1.61-3.99-2.6-6.69-2.6-2.15 0-4.14.68-5.77 1.83"
    />
  </Svg>
);
export default GoogleIcon;
