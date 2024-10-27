import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {COLORS, FONTS, icons} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const HomeDoctor = ({navigation}) => {
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
      name: 'My Profile',
      page: '',
    },
    {
      name: 'My institutions',
      page: '',
    },
    {
      name: 'My Patients',
      page: '',
    },
  ]);

  const data = [
    {
      Title: 'Galleries',
      image: icons.gallery,
    },
    {
      Title: 'E books',
      image: icons.ebook,
    },
    {
      Title: 'Guidlines',
      image: icons.guidlines,
    },
    {
      Title: 'library',
      image: icons.library,
    },

    {
      Title: 'Links',
      image: icons.links,
    },
    {
      Title: 'Agenda',
      image: icons.reservation,
    },
    {
      Title: 'Courses',
      image: icons.Courses,
    },

    {
      Title: 'Cases',
      image: icons.cases2,
    },
    {
      Title: 'Webinars',
      image: icons.webiner,
    },
    {
      Title: 'Updates',
      image: icons.Updates,
    },
    {
      Title: 'Report aid',
      image: icons.Report,
    },
    {
      Title: 'Consult',
      image: icons.Consult,
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
          borderBottomWidth: 1,
          borderColor: COLORS.darkyellow,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:RFValue(20)
        //  marginTop: 10,
        }}>
  
         <View style={{
          width:'60%',

         }}>
             <TouchableOpacity
                onPress={() => {
                 // navigation.navigate('HomeInstitution');
                }}>
                <Image
                  source={icons.home}
                  tintColor={COLORS.darkyellow}
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    tintColor:COLORS.white
                    ,transform:[{scale:1.2}]
                  }}
                  //   resizeMode="contain"
                />
              </TouchableOpacity>
         </View>

         <View style={{
          width:'40%',
          flexDirection:'row',
          justifyContent:'space-between'

         }}>
             <TouchableOpacity
                onPress={() => {
               //   navigation.navigate('HomeInstitution');
                }}>
                <Image
                  source={icons.search}
                  tintColor={COLORS.darkyellow}
                  style={{
                    width: RFValue(55),
                    height: RFValue(50),
                    transform:[{scale:1.2}],
                    marginTop:RFValue(-3)
                  }}
                  //   resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
               //   navigation.navigate('HomeInstitution');
                }}>
                <Image
                  source={icons.notify}
                  tintColor={COLORS.darkyellow}
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                   
                  }}
                  //   resizeMode="contain"
                />
              </TouchableOpacity>
         </View>
        </View> 

       
        {/* <View
          style={{
            borderBottomWidth: 1,
            borderColor: COLORS.darkyellow,
          }}></View> */}
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
              source={icons.personDoctor}></Image>
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
          {/* <View
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
                    width: RFValue(100),
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
          </View> */}
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
            width: '82%',
            alignSelf: 'center',
            marginTop: RFValue(60),
            marginLeft: 10,
            paddingBottom: RFValue(50),
          }}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: RFValue(85),
                height: RFValue(87),
                borderRadius: RFValue(10),
                padding: RFValue(5),
                backgroundColor: COLORS.darkGray,
                alignItems: 'center',
                marginRight: RFValue(5),
                paddingBottom: RFValue(12),
                justifyContent: 'space-between',
                marginBottom: RFValue(10),
              }}
              onPress={() => {}}>
              <Image
                source={item.image}
                style={{
                  width: RFValue(70),
                  height: RFValue(70),
                  marginTop:-5
               

                  //   marginTop: RFValue(10),
                //  transform:[{scale:1.2}]
                }}
                // resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyBold,
                  // ...FONTS.h5,
                  fontSize: RFValue(11),
                  marginTop: -15,
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
export default HomeDoctor;
