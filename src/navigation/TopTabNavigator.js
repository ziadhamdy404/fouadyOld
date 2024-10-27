import React, {useRef, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {COLORS, icons} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import HomeDoctor from '../screens/appScreens/HomeDoctor';
import Settings from '../screens/appScreens/Settings';
import Invite from '../screens/appScreens/Invite'; // Add your other screens here
import Profilee from '../screens/appScreens/Profilee';
import ContactUs from '../screens/appScreens/ContactUs';
import AboutUS from '../screens/appScreens/AboutUS';
import Search from '../screens/appScreens/Search';

const Tab = createMaterialTopTabNavigator();

// Define your TabArr here
const TabArr = [
  {
    route: 'HomeDoctor',
    label: 'HomeDoctor',
    activeIcon: icons.home,
    inActiveIcon: icons.home,
    component: HomeDoctor,
  },
  {
    route: 'Search',
    label: 'Search',
    activeIcon: icons.search,
    inActiveIcon: icons.search,
    component: Search,
  },

 
  //   {
  //     route: 'Setting',
  //     label: 'Settings',
  //     activeIcon: icons.setting,
  //     inActiveIcon: icons.setting,
  //     component: Settings,
  //   },
  //   {
  //     route: 'Profilee',
  //     label: 'Profile',
  //     activeIcon: icons.profilee,
  //     inActiveIcon: icons.profilee,
  //     component: Profilee,
  //   },
  //   {
  //     route: 'ContactUs',
  //     label: 'Contact Us',
  //     activeIcon: icons.callus,
  //     inActiveIcon: icons.callus,
  //     component: ContactUs,
  //   },
  //   {
  //     route: 'AboutUS',
  //     label: 'About Us',
  //     activeIcon: icons.aboutUs,
  //     inActiveIcon: icons.aboutUs,
  //     component: AboutUS,
  //   },
];

const CustomTopTabBar = ({state, descriptors, navigation}) => (
  <View style={styles.tabBarContainer}>
    {TabArr.map((tab, index) => {
      const isFocused = state.index === index;
      const ViewRef = useRef();

      useEffect(() => {
        if (isFocused) {
          ViewRef.current?.animate({
            0: {scale: 0.5, rotate: '0deg'},
            1: {scale: 1.2, rotate: '360deg'},
          });
        } else {
          ViewRef.current?.animate({
            0: {scale: 1.2, rotate: '360deg'},
            1: {scale: 1, rotate: '0deg'},
          });
        }
      }, [isFocused]);

      const onPress = () => navigation.navigate(tab.route);

      return (
        <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
          <Animatable.View ref={ViewRef} animation="zoomIn" duration={1000}>
            <Image
              source={isFocused ? tab.activeIcon : tab.inActiveIcon}
              style={{
                width: RFValue(30),
                height: RFValue(30),
                transform: [{scale: 2}],
                tintColor: isFocused ? COLORS.white : COLORS.Secondary, // Change tint color based on focus
              }}
            />
            {/* <Text
              style={{
                color: isFocused ? COLORS.white : COLORS.gray,
                fontFamily: 'XB-Yagut-Bd',
                fontSize: RFValue(10),
                marginTop: RFValue(5),
              }}>
              {tab.label}
            </Text> */}
          </Animatable.View>
        </TouchableOpacity>
      );
    })}
  </View>
);

const TopTabNavigator = ({onTabPress}) => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTopTabBar {...props} onTabPress={onTabPress} />}
      screenOptions={{tabBarStyle: {backgroundColor: COLORS.black}}}>
      {TabArr.map(tab => (
        <Tab.Screen
          key={tab.route}
          name={tab.route}
          component={tab.component} // This will still render based on tab press
          options={{tabBarLabel: tab.label}} // Use label from TabArr
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.black,
    height: RFValue(60),
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    paddingHorizontal: RFValue(10),
    borderBottomWidth: 1,
    borderColor: COLORS.Secondary,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopTabNavigator;
