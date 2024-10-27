import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native-gesture-handler';

const ForgetPassword = ({navigation}) => {
  const [PhoneEmail, setPhoneEmail] = useState('');
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          padding: RFValue(20),
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: RFValue(20),
          }}>
          
          <Image
              source={images.main_logo}
              style={{
                width: RFValue(100),
                height: RFValue(100),
          
                alignSelf: 'center',
             //   backgroundColor:'#fff',
                transform:[{scale:1.5}]
              }}
              resizeMode="contain"></Image>
    
        </View>
        <Text
          style={{
      fontSize:RFValue(27),
            color: COLORS.white,
           // marginTop: RFValue(30),
            width: RFValue(120),
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
     Fouady
        </Text>

        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'left',
            marginTop: RFValue(80),
            alignSelf: 'flex-start',
          }}>
          Forget Password
        </Text>
        <Text
          style={{
            color: COLORS.white,
        fontSize:RFValue(13),
            fontFamily: FONTS.fontFamilyMedium,

            marginTop: RFValue(10),
          }}>
          Please enter your Phone/E mail to reset password
        </Text>

        <TextInput
          style={{
            paddingHorizontal: RFValue(10),
            borderWidth: 1,
            borderColor: COLORS.darkGray2,
            marginTop: RFValue(20),
            color: COLORS.white,
            ...FONTS.h4,
            fontFamily: FONTS.fontFamilyMedium,
            width: '100%',
            paddingVertical: RFValue(3),
            borderRadius: RFValue(5),
          }}
          placeholderTextColor={COLORS.white}
          placeholder="Phone/ E mail"
          onChangeText={setPhoneEmail} // Pass the setPassword function correctly
        />

        <TouchableOpacity
          style={{
            padding: RFValue(30),
            paddingVertical: RFValue(10),
            backgroundColor: COLORS.darkGray,

            // backgroundColor:COLORS.darkyellow,
            borderRadius: RFValue(6),
            marginTop: RFValue(20),
          }}
          onPress={() => {
            if (PhoneEmail) {
              navigation.navigate('VerifyAccount');
            } else {
              Alert.alert('', 'Please enter your email or your phone');
            }
          }}>
          <Text
            style={{
              ...FONTS.h5,
              fontFamily: FONTS.fontFamilyBold,
              color:COLORS.white
            }}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ForgetPassword;
