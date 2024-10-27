import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  AboutUs,
  ForgetPassword,
  Institution,
  Login,
  LogIN1,
  OurTeam,
  Participant,
  Patients,
  SignUp,
  SignUpDetails,
  SignUpInstitution,
  UpdatePassword,
  VerifyAccount,
} from '../screens/authScreens';
import SignPlaceDetails from '../screens/authScreens/SignPlaceDetails';
import HomePatient from '../screens/appScreens/HomePatient';
import HomeInstitution from '../screens/appScreens/HomeInstitution';
import HomeDoctor from '../screens/appScreens/HomeDoctor';
import BottomTab from './Bottom tabs';
import CV from '../screens/appScreens/CV';
import NotificationPage from '../screens/appScreens/NotificationPage';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="LogIN1">
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="LogIN1" component={LogIN1} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignPlaceDetails" component={SignPlaceDetails} />
      <Stack.Screen name="SignUpDetails" component={SignUpDetails} />
      <Stack.Screen name="Institution" component={Institution} />
      <Stack.Screen name="SignUpInstitution" component={SignUpInstitution} />
      <Stack.Screen name="Participant" component={Participant} />
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen name="HomePatient" component={HomePatient} />
      <Stack.Screen name="HomeInstitution" component={HomeInstitution} />
      <Stack.Screen name="HomeDoctor" component={HomeDoctor} />
      <Stack.Screen name="OurTeam" component={OurTeam} />
      <Stack.Screen name="AuthMain" component={BottomTab} />
      <Stack.Screen name="CV" component={CV} />
      <Stack.Screen name="NotificationPage" component={NotificationPage} />
  

      {/* <Stack.Screen name="SignOTP" component={SignOTP} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
