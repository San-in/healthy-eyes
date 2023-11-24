import React, {JSX} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {FieldValues, useForm} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CustomButton} from '../../../components/ui/CustomButton';
import {CustomInputWithLabel} from '../../../components/ui/inputs/CustomInputWithLabel';
import {HorizontalDivider} from '../../../components/ui/HorizontalDivider';
import {StringWithLink} from '../../../components/ui/StringWithLink';
import {LogoIcon} from '../../../assets/icons/LogoIcon';
import UserEmailIcon from '../../../assets/icons/UserEmailIcon';
import UserIcon from '../../../assets/icons/UseIcon';
import PasswordIcon from '../../../assets/icons/PasswordIcon';
import GoogleIcon from '../../../assets/icons/GoogleIcon';
import {UIStore} from '../../../mobx';
import {sharedStyles} from '../../../styles/shared';
import {TEXT_COLOR, TITLE} from '../../../styles/text';
import {styles} from './styles';
import {SCREENS} from '../../../types/enums/screens';
import {AuthStackParamList} from '../../../types/navigation/stackParamLists';
import {CustomCheckBox} from '../../../components/ui/inputs/CustomCheckBox';
import PolicyModal from '../../../components/PolicyModal';
import {observer} from 'mobx-react-lite';

export const SignUpScreen = observer((): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation: NavigationProp<AuthStackParamList, SCREENS.SIGNUP> =
    useNavigation();

  const onConfirm = (data: FieldValues) => {
    console.log(data);
    UIStore.setIsAuth(true);
  };
  const onLogIn = () => {
    navigation.navigate(SCREENS.SIGNIN);
  };
  const onGoogle = () => {
    console.log('Click on Google');
  };

  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <LogoIcon width={140} height={100} />
        </View>
        <Text style={[TITLE.h1, TEXT_COLOR.primary, styles.title]}>
          Create your account
        </Text>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <CustomInputWithLabel
              label={'Full name'}
              name={'name'}
              placeholder={'Name'}
              control={control}
              errors={errors}
              autoCapitalize
              rules={{
                required: true,
                minLength: 2,
                maxLength: 18,
              }}
              beforeIcon={<UserIcon />}
            />
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
          <CustomCheckBox
            control={control}
            errors={errors}
            name={'confirmed'}
            rules={{required: true}}>
            <View style={styles.checkboxContent}>
              <StringWithLink
                text={'I have read & agreed to H-Eyes'}
                link={'Privacy Policy, Terms & Condition'}
                onHandler={() => {
                  UIStore.togglePolicyModalVisible();
                }}
              />
            </View>
          </CustomCheckBox>
          <CustomButton text={'Sing Up'} onClick={handleSubmit(onConfirm)} />
          <HorizontalDivider text={'Or continue with'} />
          <CustomButton
            text={'Google'}
            beforeIcon={<GoogleIcon />}
            type={'link'}
            onClick={onGoogle}
          />
          <View style={styles.stringWithLinkContainer}>
            <StringWithLink
              text={'Already have an account?'}
              link={'Log in'}
              align={'center'}
              textSize={'large'}
              onHandler={onLogIn}
            />
          </View>
        </View>
      </ScrollView>
      <PolicyModal />
    </SafeAreaView>
  );
});
