import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, FONTS, icons} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TopTabNavigator} from '../../../navigation';
const Invite = ({navigation}) => {
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
      name: 'Share App through whatsapp',
      actionName: 'Send',
    },
    {
      name: 'Share App through telegram',
      actionName: 'Send',
    },
    {
      name: 'Share App through Email',
      actionName: 'Send',
    },
    {
      name: 'Share via link',
      actionName: 'Copy link',
    },
  ];
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          padding: RFValue(10),
          paddingTop:0
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

        <View
          style={{
            flex: 1,
            marginTop: RFValue(20),
          }}>
          {data.map((item, index) => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: RFValue(10),
              }}>
              <View
                style={{
                  width: '75%',
                  borderWidth: 1,
                  borderColor: COLORS.darkGray,
                  // backgroundColor: '#fff',
                  height: RFValue(30),
                  padding: 5,
                  borderRadius: RFValue(3),
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: RFValue(3),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    color: COLORS.white,
                    fontFamily: FONTS.fontFamilyLight,
                    // fontWeight:
                  }}>
                  {item.name}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: '23%',
                  height: RFValue(30),
                  backgroundColor:item.actionName== 'Copy link'? '#454543': COLORS.darkGray,
                  borderRadius: RFValue(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    color: COLORS.white,
                    fontFamily: FONTS.fontFamilyLight,
                    // fontWeight:
                  }}>
                  {item.actionName}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};
export default Invite;
