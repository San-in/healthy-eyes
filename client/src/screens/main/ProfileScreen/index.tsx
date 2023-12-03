import React, {JSX} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CustomButton} from '../../../components/ui/CustomButton';
import {logout} from '../../../redux/slices/authSlice';
import {useAppDispatch} from '../../../redux/hooks';

export const ProfileScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
      <CustomButton text={'Logout'} onClick={onLogout} />
    </SafeAreaView>
  );
};
