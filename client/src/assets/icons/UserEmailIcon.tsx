import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {COLORS} from '../../styles/colors';

interface UserEmailIconProps extends SvgProps {
  stroke?: string;
}

const UserEmailIcon = ({
  stroke = COLORS.white20,
  ...props
}: UserEmailIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.03"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 15.658c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26M12.002 10a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66v0Z"
    />
  </Svg>
);
export default UserEmailIcon;
