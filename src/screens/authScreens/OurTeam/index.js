import React , {useState}from "react";
import { View , Text, Image, ScrollView ,
    FlatList,
    TouchableOpacity

} from "react-native";
import { COLORS, images , FONTS , 
    icons , 
    

} from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";


const OurTeam=({navigation})=>{

    
  const [touchables, setTouchables] = useState([
    {
      icon: icons.home,
      transform:1.2,
      top:2,
      nav : 'HomeDoctor'
    },
    {
      icon: icons.left,
      transform:1,
      top:2,
         nav : ''
    },
    {
      icon: icons.right,
      transform:1.05,
      top:-2,
         nav : ''
    },
    {
      icon: icons.search,
      transform:1.2,
      top:0,
         nav : ''
    },
    {
      icon: icons.notify,
      transform:.9,
      top:2,
         nav : 'NotificationPage'
    },
  ]);
    return(
        <>
        <View style={{
            flex:1
            ,backgroundColor:COLORS.black,
           // paddingTop:RFValue(30)
        }}>

<View
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 1,
          borderColor: COLORS.Secondary,
        //  marginTop: 10,
        }}>
        <FlatList
          data={touchables}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingHorizontal: 10,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.nav);
              }}>
              <Image
                source={item.icon}
                tintColor={COLORS.darkyellow}
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  transform:[{scale:item.transform}],
                  marginTop: item.top
                }}
                //   resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
            <ScrollView showsVerticalScrollIndicator={false}>

<Text style={
            {
                fontSize:RFValue(25),
                color:COLORS.white,
                fontFamily:FONTS.fontFamilyBold,
                marginTop:RFValue(10),
                textAlign:'center',
                marginBottom:RFValue(10)
            }
        }>Our team</Text>


        <Image style={{
            width:'100%',
            height:RFValue(80),
            marginTop:RFValue(10),
      
          

        }} source={images.team1}></Image>

        <View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
           // marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
            marginTop:RFValue(-5),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>THE BOARD OF DIRECTIONS</Text>
        </View>

        <Image style={{
            width:'30%',
            height:RFValue(80),
         //   marginTop:RFValue(10),
            transform:[{scale:2.7}]
        

        }} source={images.team2}></Image>

        <View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
          //  marginTop:RFValue(20),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>OPERATING TEAM</Text>
        </View>
   <Image style={{
            width:'100%',
            height:RFValue(170),
          //  marginTop:RFValue(40)

        }} source={images.team3} ></Image>
      


      

        <View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
           // marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
            marginTop:RFValue(-10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>THE EDITORS</Text>

            
        </View>
        
<Image style={{
            width:'100%',
            height:RFValue(160),
          //  marginTop:RFValue(40)

        }} source={images.team4}></Image>

<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
            marginTop:RFValue(-10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>CO-EDITORS</Text>

            
        </View>
        
<Image style={{
            width:'100%',
            height:RFValue(160),
          //  marginTop:RFValue(40)

        }} source={images.team5}></Image>

<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
            marginTop:RFValue(0),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>MEDICAL RESEARCHERS</Text>

            
        </View>
        
<Image style={{
            width:'100%',
            height:RFValue(210),


        }} source={images.team6}></Image>

<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
            marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>DEMONESTRATORS TEAM</Text>

            
        </View>
        <Image style={{
            width:'60%',
            height:RFValue(80),
           marginTop:RFValue(20)

        }} source={images.team7}></Image>

        
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
           marginTop:RFValue(-10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>ADMINSTRATRATIVE TEAM</Text>

            
        </View>
        <Image style={{
            width:'80%',
            height:RFValue(80),
            marginTop:RFValue(10)

        }} source={images.team8}></Image>

                
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
            marginTop:RFValue(-10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>SCIENTIFIC AND REPORTING TEAM</Text>

            
        </View>
        <Image style={{
            width:'70%',
            height:RFValue(90),
            marginTop:RFValue(10)

        }} source={images.team9}></Image>

                
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
            marginTop:RFValue(-10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>INFORMATION TECHNOLOGY TEAM</Text>

            
        </View>
        <Image style={{
            width:'70%',
            height:RFValue(80),
            marginTop:RFValue(10)

        }} source={images.team10}></Image>

                        
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>CALL CENTER TEAM</Text>

            
        </View>
        <Image style={{
            width:'100%',
            height:RFValue(100),
            //marginTop:RFValue(10)

        }} source={images.team11}></Image>

                        
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>FINANCE , LAW AFFAIRS, Social media, public relation TEAMs</Text>

            
        </View>
        <Image style={{
            width:'70%',
            height:RFValue(100),
            marginTop:RFValue(-10),
            marginBottom:RFValue(10)

        }} source={images.team12}></Image>

                      
<View style={{
            backgroundColor:COLORS.darkGray,
            borderWidth:1,
            borderColor:COLORS.darkyellow,
          //  marginTop:RFValue(10),
            alignItems:'center',
            justifyContent:'center',
            padding:RFValue(7),
           // marginTop:RFValue(10),
            borderRadius:RFValue(5),
            marginBottom:RFValue(20)


        }}>
            <Text style={{
           fontSize:RFValue(13),
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyLight
            }}>SECURITY TEAM</Text>

            
        </View>
        </ScrollView>
        </View>
        </>
    )
}
export default OurTeam ;