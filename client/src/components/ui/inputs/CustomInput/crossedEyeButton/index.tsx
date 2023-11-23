import React, {JSX, useState} from 'react';
import {LayoutChangeEvent, TouchableOpacity} from 'react-native';
import CrossedEyeIcon from '../../../../../assets/icons/CrossedEyeIcon';
import {styles} from './styles';

type crossedEyeProps = {
  stroke?: string;
  setIsPasswordHidden: React.Dispatch<React.SetStateAction<boolean>>;
};
export const CrossedEyeButton = ({
  stroke,
  setIsPasswordHidden,
}: crossedEyeProps): JSX.Element => {
  const [iconHeight, setIconHeight] = useState(0);
  const onChangeLayout = (event: LayoutChangeEvent) => {
    setIconHeight(event.nativeEvent.layout.height);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        setIsPasswordHidden(prevState => !prevState);
      }}
      style={[
        styles.crossedEyeIcon,
        {transform: [{translateY: -iconHeight / 2}]},
      ]}
      onLayout={onChangeLayout}>
      <CrossedEyeIcon stroke={stroke} />
    </TouchableOpacity>
  );
};
