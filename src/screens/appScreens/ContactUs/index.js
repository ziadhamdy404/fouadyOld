import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TopTabNavigator} from '../../../navigation';
import LinearGradient from 'react-native-linear-gradient';
const ContactUs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(null); // Track the active tab

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

  const data = [
    {
      name: 'Telephone',
      image: icons.telephone,
      data: '',
    },
    {
      name: 'Telegram',
      image: icons.telgram,
      data: '',
    },
    {
      name: 'Whatsapp',
      image: icons.whatsapp,
      data: '',
    },
    {
      name: 'LinkedIn',
      image: icons.linked_in,
      data: '',
    },
    {
      name: 'Facebook',
      image: icons.facebook,
      data: '',
    },
    {
      name: 'E - mail',
      image: icons.e_mail,
      data: '',
    },

    {
      name: 'Instagram',
      image: icons.insta,
      data: '',
    },
    {
      name: 'Youtube',
      image: icons.youtube2,
      data: '',
    },
    {
      name: 'TikTok',
      image: icons.tiktok2,
      data: '',
    },
  ];

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        paddingBottom: RFValue(10),
        paddingTop:0,
      }}>
      {/* <TopTabNavigator onTabPress={handleTabPress} /> */}
      {/* Pass the tab press handler */}
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
      <View
        style={{
          alignSelf: 'center',
          marginTop: RFValue(30),
          marginBottom: RFValue(30),
        }}>
        <Image
          source={images.main_logo}
          style={{
            width: RFValue(150),
            height: RFValue(150),
            marginTop: RFValue(30),
            alignSelf: 'center',
            transform: [{scale: 1.2}],
          }}
          resizeMode="contain"></Image>
        <Text
          style={{
            fontSize: RFValue(33),
            color: COLORS.white,
            width: RFValue(200),
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'center',
            marginTop:RFValue(-20)
          }}>
          Fouady
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '85%',
          alignSelf: 'center',
          marginTop: RFValue(40), // Adjusted margin for better alignment
          paddingBottom: RFValue(50),
        }}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '30%',
              height: RFValue(80),
              borderRadius: RFValue(10),
              marginRight: RFValue(5),
              marginBottom: RFValue(10),

            }}
            onPress={() => {
              // Handle navigation or action on item press
            }}>
            <LinearGradient
              colors={[COLORS.darkGray , COLORS.darkGray]} // Add gray between black and white
              locations={[0, 0.7, 1]} // Control how far each color spreads
              start={{x: 1, y: 0}} // Start at the top right
              end={{x: 0, y: 1}} // End at the bottom left
              style={{
                flex: 1,
                borderRadius: RFValue(10),
                padding: RFValue(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: RFValue(30),
                  height: RFValue(30),
                  borderRadius: RFValue(5),
                  // padding: 2,
                  // overflow: 'hidden',
                  backgroundColor: '#d49c3f',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: RFValue(10),
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: RFValue(30),
                    height: RFValue(25),
                    // marginBottom: RFValue(2),
                    transform: [{scale: 2.5}],
                    // borderRadius: RFValue(15),
                  }}
                />
              </View>
              <Text
                style={{
                  color: 'white',
                  fontFamily: FONTS.fontFamilyBold,
                  fontSize: RFValue(10),
                }}>
                {item.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactUs;
