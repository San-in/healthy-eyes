export type MainStackParamList = {
  HomeStack: HomeScreenParamList;
  MenuStack: MenuScreenParamList;
  ProfileStack: ProfileScreenParamList;
};

export type HomeScreenParamList = {
  HomeScreen: undefined;
};
export type MenuScreenParamList = {
  MenuScreen: undefined;
};
export type ProfileScreenParamList = {
  ProfileScreen: undefined;
};

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
};

export type RootStackParamList = {
  GreetingScreen: undefined;
  MainStack: MainStackParamList;
  AuthStack: AuthStackParamList;
};
