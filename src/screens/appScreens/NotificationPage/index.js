import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View , 
  FlatList
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Image} from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
const NotificationPage = ({navigation}) => {
  const [data, setDate] = useState('Saturday 21/9/2024');
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
  const renderedData = [
    {
      name: 'Fouady acadamy',
      actionName: 'See your progres',
      icon: icons.progress,
      title: 'Progress',
    },
    {
      name: 'Fouady acadamy',
      icon: icons.courses2,
      actionName: 'Added new Subscription',
      title: 'Courses',
    },
    {
      name: 'Fouady acadamy',
      icon: icons.cer,
      actionName: 'Added new certificate',
      title: 'Certification',
    },
    {
      name: 'Fouady acadamy',
      icon: icons.courses2,
      actionName: 'Renew your Subscription',
      title: 'Courses',
    },

    {
      name: 'Ahmed Hamdy',
      icon: icons.Courses,

      actionName: 'Added new lecture',
      title: 'Lectures',
    },
    {
      name: 'Fouady acadamy',
      icon: icons.webiner,
      actionName: 'Invite you to join webinar',
      title: 'Webiners',
    },
    {
      name: 'Fouady acadamy',
      icon: icons.cases2,
      actionName: 'Added new case',
      title: 'Cases',
    },
  ];
  return (
    <>
                  <View
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 1,
          borderColor: COLORS.Secondary,
          backgroundColor:COLORS.black
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
          backgroundColor: COLORS.black,
          paddingHorizontal:RFValue(10)
        }}>
  
        <View
          style={{
            width: '100%',
            height: RFValue(30),
            paddingHorizontal: RFValue(10),
            borderWidth: 1,
            borderColor: COLORS.Secondary,
            borderRadius: RFValue(5),
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(14),
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyLight,
            }}>
            {data}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.black,
            // paddingHorizontal: 0,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: RFValue(70),
            }}>
            {renderedData.map((item, index) => (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: RFValue(10),
                }}>
                <View
                  style={{
                    width: '18%',
                    height: RFValue(80),
                    marginRight: RFValue(5),
                    // backgroundColor: COLORS.gray,
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
                    <Image
                      source={item.icon}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                        transform: [{scale: 2}],
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(8),
                        color: COLORS.white,
                        fontFamily: FONTS.fontFamilyBold,
                      }}>
                      {item.title}
                    </Text>
                  </LinearGradient>
                </View>
                <View
                  style={{
                    width: '73%',
                    borderWidth: 1,
                    borderColor: '#424040',
                    // backgroundColor: '#fff',
                    height: RFValue(80),
                    padding: 5,
                    borderRadius: RFValue(3),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: RFValue(60),
                      height: RFValue(60),
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: COLORS.white,
                      borderRadius: RFValue(5),
                    }}>
                    <Image
                      source={images.main_logo}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                        transform: [{scale: 2}],
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                      // width: '90%',
                      marginLeft: RFValue(5),
                      // backgroundColor: COL /ORS.Secondary,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: RFValue(30),

                        borderWidth: 1,
                        borderColor: '#424040',
                        borderRadius: RFValue(2),
                        justifyContent: 'center',
                        marginBottom: RFValue(10),
                        paddingHorizontal: RFValue(10),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: COLORS.white,
                          fontFamily: FONTS.fontFamilyBold,
                          // fontWeight:
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: RFValue(30),
                        borderWidth: 1,
                        borderColor: '#424040',
                        borderRadius: RFValue(2),
                        justifyContent: 'center',
                        paddingHorizontal: RFValue(10),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: COLORS.white,
                          fontFamily: FONTS.fontFamilyLight,
                        }}>
                        {item.actionName}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '6%',
                    borderWidth: 1,
                    borderColor: '#424040',
                    height: RFValue(80),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 3,
                    padding: 1,

                    // justifyContent: 'center',
                  }}>
                  <TouchableOpacity style={{marginBottom: RFValue(10)}}>
                    <Image
                      source={icons.logout}
                      style={{
                        width: RFValue(20),
                        height: RFValue(20),
                        transform: [{scale: 2}],
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{}}>
                    <Image
                      source={icons.delte}
                      style={{
                        width: RFValue(20),
                        height: RFValue(20),
                        transform: [{scale: 2}],
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default NotificationPage;
