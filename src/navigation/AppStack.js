import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../screens/appScreens/HomePatient';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/appScreens/Settings';
import MakeCV from '../screens/appScreens/index';
import BottomTab from './Bottom tabs';
import HomeDoctor from '../screens/appScreens/HomeDoctor';
import { OurTeam } from '../screens/authScreens';

import Profile from '../screens/appScreens/profile';
import CV from '../screens/appScreens/CV';
import NotificationPage from '../screens/appScreens/NotificationPage';



const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="AuthMain">
      <Stack.Screen name="AuthMain" component={BottomTab} />


      <Stack.Screen
        name="HomeDoctor"
        component={HomeDoctor}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
       <Stack.Screen
        name="OurTeam"
        component={OurTeam}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
        <Stack.Screen
        name="NotificationPage"
        component={NotificationPage}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
        <Stack.Screen
        name="CV"
        component={CV}
        options={{
          gestureDirection: 'vertical',
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
  
       
    </Stack.Navigator>
  );
};

export default AppStack;
