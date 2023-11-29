import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface ArrowRightIconProps extends SvgProps {
  stroke?: string;
}

const ArrowRightIcon = ({
  stroke = COLORS.white20,
  ...props
}: ArrowRightIconProps) => (
  <Svg width={20} height={14} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.43 13.07 18.5 7 12.43.93M9.18 7h9.32M1.67 7h3.48"
    />
  </Svg>
);
export default ArrowRightIcon;
