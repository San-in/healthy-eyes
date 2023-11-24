import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface UserIconProps extends SvgProps {
  stroke?: string;
}

const UserIcon = ({stroke = COLORS.white20, ...props}: UserIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.02 3.01A4.944 4.944 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5m3.59 15c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
    />
  </Svg>
);
export default UserIcon;
