import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface CrossedEyeIconProps extends SvgProps {
  stroke?: string;
}

const PasswordIcon = ({
  stroke = COLORS.white20,
  ...props
}: CrossedEyeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2m-8.5 6a2.5 2.5 0 1 0 2.5-2.5"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75"
    />
  </Svg>
);
export default PasswordIcon;
