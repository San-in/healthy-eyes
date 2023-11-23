import React, {JSX} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LogoIcon} from '../../../assets/icons/LogoIcon';
import {sharedStyles} from '../../../styles/shared';
import {TEXT_COLOR, TITLE} from '../../../styles/text';
import {PADDING_HORIZONTAL_BASIC} from '../../../styles/vars';
import {FieldValues, useForm} from 'react-hook-form';
import {SCREENS} from '../../../types/enums/screens';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../../types/navigation/stackParamLists';
import {CustomButton} from '../../../components/ui/CustomButton';
import {UIStore} from '../../../mobx';
import {CustomInputWithLabel} from '../../../components/ui/inputs/CustomInputWithLabel';
import WarningIcon from '../../../assets/icons/WarningIcon';

export const SignInScreen = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation: NavigationProp<AuthStackParamList, SCREENS.SIGNIN> =
    useNavigation();
  const onConfirm = (data: FieldValues) => {
    console.log(data);
    UIStore.setIsAuth(true);
  };

  return (
    <SafeAreaView style={sharedStyles.screenContainer}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <LogoIcon width={140} height={100} />
        </View>
        <Text style={[TITLE.h1, styles.title]}>Welcome Back!</Text>
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
              beforeIcon={<WarningIcon />}
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
              beforeIcon={<WarningIcon />}
            />
          </View>
          <CustomButton text={'Log in'} onClick={handleSubmit(onConfirm)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  contentContainer: {
    paddingHorizontal: PADDING_HORIZONTAL_BASIC,
  },
  title: {
    color: TEXT_COLOR.primary,
    marginTop: 50,
  },
  form: {},
  formContent: {},
});
