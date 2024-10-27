import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, FONTS} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TopTabNavigator} from '../../../navigation';
const Profilee = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          padding: RFValue(10),
        }}>
        <TopTabNavigator />
      </View>
    </>
  );
};
export default Profilee;
