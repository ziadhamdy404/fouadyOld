import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView , FlatList , TouchableOpacity } from 'react-native';
import {COLORS, FONTS, images , icons} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TopTabNavigator} from '../../../navigation';

const AboutUs = ({navigation}) => {
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
  const [isTabVisible, setIsTabVisible] = useState(false);
  // Optional: Add a timeout to show tabs after a specific duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTabVisible(true);
    }, 0); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.black,
          flex: 1,
        }}>
        {/* {isTabVisible && <TopTabNavigator />} */}
        <ScrollView showsVerticalScrollIndicator={false}>
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
        <Image
              source={images.main_logo}
              style={{
                width: RFValue(100),
                height: RFValue(100),
          
                alignSelf: 'center',
             //   backgroundColor:'#fff',
                transform:[{scale:1.6}],
                marginTop:RFValue(80)
              }}
              resizeMode="contain"></Image>
    
    
        <Text
          style={{
      fontSize:RFValue(30),
            color: COLORS.white,
           // marginTop: RFValue(30),
            width: RFValue(120),
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop:RFValue(0)
          }}>
     Fouady
        </Text>
        <View
          style={{
            // borderWidth: 1,
          
            paddingVertical: RFValue(30),
            // borderColor: '#cfaa06',
            alignSelf: 'center',
            padding: RFValue(8),
            marginTop: RFValue(10),
            borderRadius: RFValue(2),
            alignItems:'center',
                width:'80%'
          }}>
          <Text
            style={{
              fontSize: RFValue(14),
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyLight,
              textAlign: 'center',
              lineHeight: 20,
          
            }}>
            Fouady Academy for Pediatric Echocardiography (FAPE) is a
            specialized educational institution dedicated to providing
            comprehensive training and certification in pediatric
            echocardiography.
          </Text>

          <Text
            style={{
              fontSize: RFValue(14),
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyLight,
              marginTop: RFValue(15),
              textAlign: 'center',
              lineHeight: 20,
            }}>
            Our mission is to enhance the quality of pediatric cardiac care by
            equipping healthcare professionals with the skills and knowledge
            required to perform echocardiographic examinations proficiently.
          </Text>

          <Text
            style={{
              fontSize: RFValue(14),
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyLight,
              marginTop: RFValue(15),
              textAlign: 'center',
              lineHeight: 20,
            }}>
            We aim to serve the medical community and improve patient outcomes
            through high-quality education, practical training, and continuous
            professional development.
          </Text>
        </View>
        </ScrollView>
      </View>
    </>
  );
};
export default AboutUs;
