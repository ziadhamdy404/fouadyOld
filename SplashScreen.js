import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Video from "react-native-video";
import {icons , images , FONTS, COLORS} from "./src/constants";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 , backgroundColor:COLORS.black , padding:RFValue(20),
            justifyContent:'center',
            alignItems:'center'
        }}>
        
           <Image source={images.main_logo} style={{
    width:RFValue(150),
    height:RFValue(150),
    marginTop:RFValue(-30),
    alignSelf:'center',
    transform:[{scale:1.6}]
 }} resizeMode='contain'></Image>

 <Text style={{
fontSize:RFValue(40),
    color:COLORS.white,
    marginTop:RFValue(10),
    width:RFValue(200),
    fontFamily:FONTS.fontFamilyBold,
    textAlign:'center'
 }}>Fouady</Text>

           
        </View>
    );
};

const styles = {
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    overlayContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    logo: {
        width: RFValue(100),
        height: RFValue(100),
        transform: [{ scale: 3 }],
        marginTop: RFValue(300),
    },
    buttonGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: RFValue(550),
    },
    buttonWhite: {
        backgroundColor: COLORS.white,
        borderRadius: RFValue(40),
        padding: RFValue(10),
        borderWidth: 0.25,
        borderColor: COLORS.black,
        marginLeft: RFValue(5),
    },
    buttonFacebook: {
        backgroundColor: '#425f9d',
        borderRadius: RFValue(40),
        padding: RFValue(10),
        borderWidth: 0.25,
        borderColor: COLORS.black,
        marginLeft: RFValue(5),
    },
    iconStyleBlack: {
        width: RFValue(20),
        height: RFValue(20),
        tintColor: COLORS.black,
    },
    iconStyleWhite: {
        width: RFValue(20),
        height: RFValue(20),
        tintColor: COLORS.white,
    },
    iconStyle: {
        width: RFValue(20),
        height: RFValue(20),
    },
    signInLater: {
        alignSelf: 'center',
        marginTop: RFValue(20),
    },
    signInText: {
        ...FONTS.h5,
        color: COLORS.black,
        textDecorationLine: 'underline',
        fontFamily: FONTS.fontFamilyLight,
    },
};

export default SplashScreen;
