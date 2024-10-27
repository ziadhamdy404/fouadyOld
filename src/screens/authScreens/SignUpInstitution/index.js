import React from "react";
import { StatusBar, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, images, icons, FONTS } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const SignUpInstitution = ({ navigation }) => {

    const Array = [
        {
            Title: 'University',
            image: icons.unvirsity
        },
        {
            Title: 'Institute',
            image: icons.institue
        },
        {
            Title: 'Academy',
            image: icons.academy
        },
        {
            Title: 'Hospital',
            image: icons.hospital
        },
        {
            Title: 'Center',
            image: icons.center
        },
        {
            Title: 'Clinic',
            image: icons.clinic
        },
        {
            Title: 'Association',
            image: icons.assoaiation
        },
        {
            Title: 'Society',
            image: icons.society
        },
        {
            Title: 'Charity',
            image: icons.charity
        },
        {
            Title: 'Organization',
            image: icons.organization
        },
        {
            Title: 'Pharmacy',
            image: icons.pharmacy
        },
        {
            Title: 'Company',
            image: icons.company
        },
    ];



    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                padding: RFValue(20),
                paddingHorizontal: RFValue(10)
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
                    <Text style={{ ...FONTS.h6, color: COLORS.white, marginTop: RFValue(30), width: RFValue(120), fontFamily: FONTS.fontFamilyMedium, textAlign: 'center', alignSelf: 'center' }}>
                        Pediatric Cardiology Community
                    </Text>
</View>
                    <Text style={{
                        color: COLORS.white,
                        fontSize:RFValue(15),
      fontFamily:FONTS.fontFamilyMedium,
                        textAlign: 'center',
                        marginTop:RFValue(40)
                    }}>Create an account as</Text>

                   


                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(300),
                        marginTop: RFValue(15),
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginLeft:10
                       
                        
                    }}>
                        {Array.map((item, index) => (
                           <TouchableOpacity
                           key={index}
                           style={{
                         width:RFValue(90),
                         height:RFValue(90),
                         borderRadius:RFValue(10),
                         padding:RFValue(6),
                         backgroundColor:COLORS.darkGray,
                         alignItems:'center',
                         marginRight:RFValue(5)
                         ,
                         paddingVertical:RFValue(10),
                         justifyContent:'space-between',
                         marginBottom:RFValue(10)
                 
                      
                 
                     }}  onPress={()=>{
                        navigation.navigate('Institution')
                                }} >
                               <Image source={item.image} style={{
            width: RFValue(30),
            height:RFValue(30),
            marginTop:RFValue(10)
        }} resizeMode='contain'></Image>
        <Text style={{
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyBold,
          // ...FONTS.h5,
          fontSize:RFValue(10),

        }}>{item.Title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default SignUpInstitution;
