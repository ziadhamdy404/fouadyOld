import React, { useState } from "react";
import { StatusBar, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, images, icons, FONTS } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const SignUpDetails = ({navigation , route}) => {
    const { Item } = route.params;
    const [selectedIndex, setSelectedIndex] = useState(0); // State to track the selected index

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                padding: RFValue(20),
            }}>
                <StatusBar backgroundColor={COLORS.black} />
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{
                    marginTop:RFValue(20)
                  }}>
                <View style={{
          backgroundColor:COLORS.white,
          width:RFValue(80),
          height:RFValue(60),
          marginTop: RFValue(50), 
            alignSelf: 'center',
            alignItems:'center'
        }}>
            <Image source={images.main_logo} style={{
           width: RFValue(100),
          height: RFValue(100),
           marginTop: RFValue(-20), 
           alignSelf:'center'
         
            }} resizeMode='contain'></Image>
        </View>
        </View>
                    {/* <Image source={images.main_logo} style={{ width: RFValue(100), height: RFValue(100), marginTop: RFValue(70), alignSelf: 'center' }} /> */}
                    <Text style={{ ...FONTS.h6, color: COLORS.white, marginTop: RFValue(20), width: RFValue(120), fontFamily: FONTS.fontFamilyMedium, textAlign: 'center', alignSelf: 'center' }}>
                        Pediatric Cardiology Community
                    </Text>

                    <Text style={{
                        color: COLORS.white,
                        fontSize:RFValue(15),
                        fontFamily:FONTS.fontFamilyMedium,
                        textAlign: 'center',
                        marginTop: RFValue(40),
                    }}>Create an account as</Text>

                    <View style={{ marginTop: RFValue(20) }}>
                        {Item?.ContentArray?.map((item, index) => (
                            <TouchableOpacity
                                key={index} 
                                style={{
                                    borderRadius: RFValue(5),
                                    paddingLeft: RFValue(35),
                                    paddingVertical: RFValue(10),
                                    backgroundColor: COLORS.darkGray,
                                    borderColor: selectedIndex === index ? COLORS.Secondary : 'transparent', // Change border color based on selection
                                    borderWidth: 1,
                                    marginBottom: RFValue(10),
                                    
                                }}
                                onPress={() => setSelectedIndex(index)} // Set the selected index
                            >
                                <Text style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.fontFamilyLight,
                                 fontSize:RFValue(15)
                                }}>
                                    {item.Title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default SignUpDetails;
