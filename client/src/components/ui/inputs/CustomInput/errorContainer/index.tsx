import React, {JSX, ReactNode} from 'react';
import {Text, View} from 'react-native';
import WarningIcon from '../../../../../assets/icons/WarningIcon';
import {COLORS} from '../../../../../styles/colors';
import {styles} from './styles';

export const ErrorContainer = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <View style={styles.errorContainer}>
      <WarningIcon stroke={COLORS.red70} />
      <Text style={styles.errorText}>{children}</Text>
    </View>
  );
};
