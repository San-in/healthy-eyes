import React, {JSX} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FieldValues, useForm} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CustomButton} from '../../../components/ui/CustomButton';
import {CustomInputWithLabel} from '../../../components/ui/inputs/CustomInputWithLabel';
import {HorizontalDivider} from '../../../components/ui/HorizontalDivider';
import {StringWithLink} from '../../../components/ui/StringWithLink';
import {LogoIcon} from '../../../assets/icons/LogoIcon';
import UserEmailIcon from '../../../assets/icons/UserEmailIcon';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import GoogleIcon from '../../../assets/icons/GoogleIcon';
import {sharedStyles} from '../../../styles/shared';
import {TEXT, TEXT_COLOR, TITLE} from '../../../styles/text';
import {styles} from './styles';
import {SCREENS} from '../../../types/enums/screens';
import {AuthStackParamList} from '../../../types/navigation/stackParamLists';
import {login} from '../../../redux/slices/authSlice';
import {useAppDispatch} from '../../../redux/hooks';

export const SignInScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation: NavigationProp<AuthStackParamList, SCREENS.SIGNIN> =
    useNavigation();

  const onConfirm = (data: FieldValues) => {
    console.log(data);
    dispatch(login());
  };
  const onForgotPassword = () => {
    navigation.navigate(SCREENS.FORGOTPASSWORD);
  };
  const onSignUp = () => {
    navigation.navigate(SCREENS.SIGNUP);
  };
  const onGoogle = () => {
    console.log('Click on Google');
  };

  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <LogoIcon width={140} height={100} />
        </View>
        <Text style={[TITLE.h1, TEXT_COLOR.primary, styles.title]}>
          Welcome Back!
        </Text>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <CustomInputWithLabel
              label={'Email Address'}
              name={'email'}
              placeholder={'Email'}
              control={control}
              errors={errors}
              rules={{
                required: true,
                minLength: 6,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              }}
              beforeIcon={<UserEmailIcon />}
            />
            <CustomInputWithLabel
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              control={control}
              errors={errors}
              secureTextEntry={true}
              rules={{
                required: true,
                minLength: 6,
                maxLength: 12,
              }}
              beforeIcon={<PasswordIcon />}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={onForgotPassword}>
            <Text
              style={[
                TEXT_COLOR.secondary,
                TEXT.large,
                sharedStyles.textAlignRight,
              ]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <CustomButton text={'Log in'} onClick={handleSubmit(onConfirm)} />
          <HorizontalDivider text={'Or continue with'} />
          <CustomButton
            text={'Google'}
            beforeIcon={<GoogleIcon />}
            type={'link'}
            onClick={onGoogle}
          />
          <View style={styles.stringWithLinkContainer}>
            <StringWithLink
              text={'Don’t have an account?'}
              link={'Sing Up'}
              align={'center'}
              onHandler={onSignUp}
              textSize={'large'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
