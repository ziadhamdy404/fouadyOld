import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransitionPresets} from '@react-navigation/stack';
// import FastImage from 'react-native-fast-image';
import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import LinearGradient from 'react-native-linear-gradient';
import {icons, COLORS, SIZES} from '../../constants';
import Settings from '../../screens/appScreens/Settings';
import ContactUs from '../../screens/appScreens/ContactUs';
import Profilee from '../../screens/appScreens/Profilee';
import Invite from '../../screens/appScreens/Invite';
import Profile from '../../screens/appScreens/profile';

import AboutUS from '../../screens/appScreens/AboutUS';


const Tab = createBottomTabNavigator();
const TabArr = [
  {
    route: 'Invite',
    label: 'invite',
    activeIcon: icons.invite,
    inActiveIcon: icons.invite,
    component: Invite,
  },
  {
    route: 'Setting',
    label: 'Setting',
    activeIcon: icons.setting,
    inActiveIcon: icons.setting,
    component: Settings,
  },
  {
    route: 'Profilee',
    label: 'Profile',
    activeIcon: icons.profilee,
    inActiveIcon: icons.profilee,
    component: Profile,
  },
  {
    route: 'ContactUs',
    label: 'Contact us',
    activeIcon: icons.callus,
    inActiveIcon: icons.callus,
    component: ContactUs,
  },
  {
    route: 'AboutUS',
    label: 'About us',
    activeIcon: icons.abutUs,
    inActiveIcon: icons.abutUs,
    component: AboutUS,
  },
];

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{...styles.tabBarContainer}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const ViewRef = useRef();

        useEffect(() => {
          if (isFocused) {
            ViewRef.current.animate({
              0: {scale: 0.5, rotate: '0deg'},
              1: {scale: 1.2, rotate: '360deg'},
            });
          } else {
            ViewRef.current.animate({
              0: {scale: 1.2, rotate: '360deg'},
              1: {scale: 1, rotate: '0deg'},
            });
          }
        }, [isFocused]);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: route.name}],
            }),
          );
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={index}>
            <View
              style={{
                marginVertical: RFValue(5),

                paddingTop: RFValue(15),
                borderRadius: RFValue(SIZES.base),
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animatable.View
                ref={ViewRef}
                animation={'zoomIn'}
                duration={1000}>
                <Image
                  source={options.tabBarIcon.activeIcon}
                  tintColor={isFocused ? COLORS.white : null}
                  // size={SIZES.padding}
                  style={{
                    width: RFValue(30),
                    height: RFValue(30),
                    transform: [{scale: 1.5}],
                  }}
                />
              </Animatable.View>

              <Text
                style={{
                  color: COLORS.white,
                  // color: isFocused ? COLORS.white : COLORS.third,
                  fontFamily: 'XB-Yagut-Bd',
                  fontSize: 10,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      // initialRouteName="Settings"
      tabBar={props => <MyTabBar {...props} />}>
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarIcon: {
                activeIcon: _.activeIcon,
                inActiveIcon: _.activeIcon,
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(3),
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
    position: 'absolute',
    bottom: RFValue(10),
    borderTopWidth: 1,
    borderTopColor: COLORS.Secondary,
    // borderRadius: RFValue(40),
    width: '100%',
    // alignSelf: 'center',
    height: RFValue(50),
    // padding: RFValue(5),
    // borderTopWidth: 1,
    // borderColor: COLORS.gray5,
  },
});
export default BottomTab;
