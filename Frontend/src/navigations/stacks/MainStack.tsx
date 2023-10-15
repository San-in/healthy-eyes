import * as React from 'react';
import {JSX} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {STACKS} from '../../types/enums/stacks';
import {MainStackParamList} from '../../types/navigation/stackParamLists';
import {HomeScreen} from '../../screens/main/HomeScreen';
import {MenuScreen} from '../../screens/main/MenuScreen';
import {ProfileScreen} from '../../screens/main/ProfileScreen';

const Tab = createBottomTabNavigator<MainStackParamList>();
export const MainStack = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={STACKS.HOME} component={HomeScreen} />
      <Tab.Screen name={STACKS.MENU} component={MenuScreen} />
      <Tab.Screen name={STACKS.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
