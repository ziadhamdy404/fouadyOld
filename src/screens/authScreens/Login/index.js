import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";

const Login=({navigation})=>{






    const Array =[
        {
            Title:'Partipants',
            image:icons.participants
        },
        {
            Title:'Institution',
            image:icons.institution
        },
        {
            Title:'Patient',
            image:icons.patient
        },

    ]
    return(
        <>
        <View style={{
            flex:1,
            backgroundColor:COLORS.black,
            backgroundColor:COLORS.black,
            padding:RFValue(20),
            alignItems:'center'
        }}>
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
 <Text style={{
    ...FONTS.h6,
    color:COLORS.white,
    marginTop:RFValue(30),
    width:RFValue(110),
    fontFamily:FONTS.fontFamilyMedium,
    textAlign:'center',
    lineHeight:RFValue(12)
 }}>Pediatric Cardiology Community</Text>

<Text style={{
    fontSize:RFValue(45),
    color:COLORS.white,
    marginTop:RFValue(60),  
    fontFamily:FONTS.fontFamilyBold,
    textAlign:'center'
 }}>Welcome</Text>

 <TouchableOpacity style={{
    padding:RFValue(45),
    paddingVertical:RFValue(5),
    borderWidth:.5,
    borderColor:COLORS.darkGray2,
    marginTop:RFValue(25),
    marginBottom:RFValue(50)
    
 }} onPress={()=>{
    navigation.navigate('AboutUs')
 }}>
    <Text style={{
      fontSize:RFValue(15),
      fontFamily:FONTS.fontFamilyMedium



    }}>About us</Text>
 </TouchableOpacity>

 <Text style={{
        color:COLORS.white,
        fontSize:RFValue(15),
      fontFamily:FONTS.fontFamilyMedium,
        textAlign:'center',
        marginTop:RFValue(20)
        



    }}>Create an account as</Text>


<View style={{
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    width:RFValue(290),
    marginTop:RFValue(20),
       justifyContent:'space-between',
        flexWrap:'nowrap',
}}>
    {Array.map((item , index)=>(
        <>
          <TouchableOpacity
          key={index}
          style={{
        width:RFValue(85),
        height:RFValue(85),
        borderRadius:RFValue(10),
        padding:RFValue(6),
        backgroundColor:COLORS.darkGray,
        alignItems:'center',
        marginRight:RFValue(10)
        ,
        paddingVertical:RFValue(10),
        justifyContent:'space-between'

     

    }} onPress={()=>{
        if(item.Title=='Institution'){
        navigation.navigate('SignUpInstitution')
        }
        else if(item.Title=='Partipants'){
            navigation.navigate('Participant')
            }
            else if(item.Title=='Patient'){
                navigation.navigate('Patients')
                }
    }}>
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
        </>
    ))}
  
  
</View>



        </View>
        
        </>
    )
}

export default Login;