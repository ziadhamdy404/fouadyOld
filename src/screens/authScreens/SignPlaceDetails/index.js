import React from "react";
import { StatusBar, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, images, icons, FONTS } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const SignPlaceDetails =({navigation , route})=>{
   const {Item} = route.params
    return(
        <>
         <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                padding:RFValue(20),
                paddingHorizontal:RFValue(10)
            }}>
                <StatusBar backgroundColor={COLORS.black} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={images.main_logo} style={{ width: RFValue(100), height: RFValue(100), marginTop: RFValue(70), alignSelf: 'center' }} />
                    <Text style={{ ...FONTS.h6, color: COLORS.white, marginTop: RFValue(20), width: RFValue(150), fontFamily: FONTS.fontFamilyMedium, textAlign: 'center', alignSelf: 'center' }}>
                        Pediatric Cardiology Community
                    </Text>

                    <Text style={{
                        color: COLORS.white,
                        fontSize:RFValue(15),
                        fontFamily:FONTS.fontFamilyLight,
                        textAlign: 'center',
                        marginTop:RFValue(40)
                    }}>Create an account as</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(280),
                        marginTop: RFValue(30),
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                       
                        
                    }}>
                        {Item?.ContentArray?.map((item, index) => (
                            <TouchableOpacity
                                key={index} // Key prop should be directly on the TouchableOpacity
                                style={{
                                    width: RFValue(80),
                                    height: RFValue(80),
                                    borderRadius: RFValue(10),
                                    padding: RFValue(6),
                                    backgroundColor: COLORS.darkGray,
                                    alignItems: 'center',
                                    marginRight: RFValue(10),
                                    marginBottom:RFValue(10)
                                }}>
                                <Image source={item.image} style={{
                                    width: RFValue(30),
                                    height: RFValue(30)
                                }} />
                                <Text style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.fontFamilyMedium,
                                    ...FONTS.h6
                                }}>{item.Title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
        </>
    )
}

export default SignPlaceDetails ;