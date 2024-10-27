import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {COLORS, FONTS, icons} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const HomePatient = ({navigation}) => {
  const [name, setName] = useState('Name');
  const [jopTitle, setJopTitle] = useState('Doctor');
  const [institution, setInstitution] = useState('Instituion');
  const [country, setCountry] = useState('Country');

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

  const [actions, setActions] = useState([
    {
      name: 'My Reports',
      page: '',
    },
    {
      name: 'My doctor',
      page: '',
    },
    {
      name: 'My Institutions',
      page: '',
    },
  ]);

  const data = [
    // {
    //   Title: 'reservation',
    //   image: icons.reservation,
    // },
    // {
    //   Title: 'reports',
    //   image: icons.reports,
    // },
    // {
    //   Title: 'consult',
    //   image: icons.consult,
    // },
    // {
    //   Title: 'call us',
    //   image: icons.callus,
    // },
    // {
    //   Title: 'chat us',
    //   image: icons.chatus,
    // },
    // {
    //   Title: 'Awn',
    //   image: icons.Awm,
    // },
    // {
    //   Title: 'services',
    //   image: icons.services,
    // },
    // {
    //   Title: 'Branches',
    //   image: icons.Branches,
    // },
    // {
    //   Title: 'Team',
    //   image: icons.Team,
    // },
    // {
    //   Title: 'Consultations',
    //   image: icons.consultation,
    // },
    // {
    //   Title: 'timeLine',
    //   image: icons.services,
    // },
    // {
    //   Title: 'health education',
    //   image: icons.health_education,
    // },
    {
      Title: 'Diagnosis',
      image: icons.diagnosis,
    },
    {
      Title: 'Counseling',
      image: icons.counseling,
    },
    {
      Title: 'Medication',
      image: icons.medic,
    },
    {
      Title: 'Hospital',
      image: icons.hos,
    },
    {
      Title: 'Activity',
      image: icons.activity,
    },
    {
      Title: 'Nutrition',
      image: icons.nutrition,
    },
    {
      Title: 'Vaccines',
      image: icons.vaccine,
    },
    {
      Title: 'IE prophylaxis',
      image: icons.ie,
    },
    {
      Title: 'investigations',
      image: icons.invest,
    },
    {
      Title: 'consultation',
      image: icons.consultation,
    },
    {
      Title: 'interventions',
      image: icons.services,
    },
    {
      Title: 'Follow up',
      image: icons.health_education,
    },
  ];

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            borderWidth: 1,
            marginTop: 10,
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
                  navigation.navigate('HomeInstitution');
                }}>
                <Image
                  source={item.icon}
                  tintColor={COLORS.darkyellow}
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                  }}
                  //   resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.darkyellow,
          }}></View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: RFValue(15),
            borderBottomWidth: 1,
            borderColor: COLORS.darkyellow,
          }}>
          <View
            style={{
              width: '25%',
            }}>
            <Image
              style={{
                width: '100%',
                height: RFValue(80),
                borderRadius: RFValue(10),
              }}
              resizeMode="cover"
              source={icons.PatientImage}></Image>
          </View>

          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              //   borderColor: '#f0f',
              width: '75%',
              marginLeft: RFValue(10),
            }}>
            <View
              style={{
                width: '57%',
                height: RFValue(30),
                // alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: RFValue(10),
                borderWidth: 1,
                borderColor: '#424040',
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyLight,
                paddingVertical: RFValue(3),
                borderRadius: RFValue(2),
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  fontSize: RFValue(10),
                }}>
                {name}
              </Text>
            </View>
            <View
              style={{
                width: '39%',
                height: RFValue(30),
                // alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: RFValue(10),
                borderWidth: 1,
                borderColor: '#424040',
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyLight,
                paddingVertical: RFValue(3),
                borderRadius: RFValue(2),
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  fontSize: RFValue(10),
                }}>
                {jopTitle}
              </Text>
            </View>
            <View
              style={{
                width: '57%',
                height: RFValue(30),
                // alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: RFValue(10),
                borderWidth: 1,
                borderColor: '#424040',
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyLight,
                paddingVertical: RFValue(3),
                borderRadius: RFValue(2),
                marginTop: RFValue(15),
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  fontSize: RFValue(10),
                }}>
                {institution}
              </Text>
            </View>
            <View
              style={{
                width: '39%',
                height: RFValue(30),
                // alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: RFValue(10),
                borderWidth: 1,
                borderColor: '#424040',
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyLight,
                paddingVertical: RFValue(3),
                borderRadius: RFValue(2),
                marginTop: RFValue(15),
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  fontSize: RFValue(10),
                }}>
                {country}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.darkyellow,
          }}>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              padding: RFValue(10),
            }}>
            <FlatList
              data={actions}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                paddingHorizontal: 10,
                width: '100%',
                justifyContent: 'space-between',
              }}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    width: RFValue(95),
                    // width: '100%',
                    // padding: RFValue(15),
                    height: RFValue(30),
                    paddingHorizontal: 5,
                    borderRadius: RFValue(2),
                    backgroundColor: COLORS.darkGray,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: FONTS.fontFamilyBold,
                      fontSize: RFValue(13),
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '85%',
            //   width: RFValue(300),
            marginTop: RFValue(40),

            marginLeft: 10,
          }}> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
            marginTop: RFValue(40),
            marginLeft: 10,
            paddingBottom: RFValue(50),
          }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: RFValue(90),
                height: RFValue(90),
                borderRadius: RFValue(10),
                padding: RFValue(6),
                backgroundColor: COLORS.darkGray,
                alignItems: 'center',
                marginRight: RFValue(5),
                paddingVertical: RFValue(10),
                justifyContent: 'space-between',
                marginBottom: RFValue(10),
              }}
              onPress={() => {}}>
              <Image
                source={item.image}
                style={{
                  width: RFValue(70),
                  height: RFValue(60),
                  //   marginTop: RFValue(10),
                }}
                // resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  // ...FONTS.h5,
                  fontSize: RFValue(10),
                  marginTop: -10,
                }}>
                {item.Title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* </View> */}
    </>
  );
};
export default HomePatient;
