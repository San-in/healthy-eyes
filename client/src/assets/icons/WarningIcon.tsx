import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface WarningIconProps extends SvgProps {
  stroke?: string;
}

const WarningIcon = ({
  stroke = COLORS.orange20,
  ...props
}: WarningIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 9.5V13m0 3h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L14.232 5c-.77-1.333-2.694-1.333-3.464 0L3.84 17c-.77 1.333.192 3 1.732 3Z"
    />
  </Svg>
);
export default WarningIcon;
