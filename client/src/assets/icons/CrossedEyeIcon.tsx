import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface CrossedEyeIconProps extends SvgProps {
  stroke?: string;
}

const CrossedEyeIcon = ({
  stroke = COLORS.white20,
  ...props
}: CrossedEyeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.6 17.759c-1-.86-1.91-1.92-2.71-3.17-.9-1.41-.9-3.78 0-5.19 1.18-1.85 2.62-3.3 4.23-4.27m10.7.641C16.07 4.45 14.07 3.73 12 3.73m-3.578 15.8c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47m-5.52 1.542-5.06 5.06a3.578 3.578 0 1 1 5.06-5.06v0Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.511 12.7a3.565 3.565 0 0 1-2.82 2.82m-3.221-.989L2 22.001M22.001 2l-7.47 7.47"
    />
  </Svg>
);
export default CrossedEyeIcon;
