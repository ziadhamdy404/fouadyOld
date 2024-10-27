// import React, {useState} from 'react';
// import {
//   Alert,
//   Image,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {COLORS, FONTS, icons, images} from '../../../constants';
// import {RFValue} from 'react-native-responsive-fontsize';
// import {TextInput} from 'react-native-gesture-handler';
// import utils from '../../../utils';

// const LogIN1 = ({navigation}) => {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPass , setShowPass] = useState(false)
// const [errors, setErrors] = useState({ username: '', password: '' });






// const validateEmail = (email) => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// };

// const handleLogin = () => {
//   let usernameError = '';
//   let passwordError = '';

//   if (!username || !validateEmail(username)) {
//     usernameError = 'Please enter a valid email address';
//   }

//   if (!password || password.length < 6) {
//     passwordError = 'Password must be at least 6 characters long';
//   }

//   if (usernameError || passwordError) {
//     setErrors({ username: usernameError, password: passwordError });
//     return;
//   }

//   // Proceed with navigation if validation passes
//   navigation.navigate('AuthMain');
// };














//   const handleLogin = () => {
//     if (username && password) {
//       navigation.navigate('AuthMain');
//     } else {
//       utils.toastAlert('error', 'Make sure you fill all fields');
//     }
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.black,
//         padding: RFValue(20),
//         // alignItems: 'center',
//         borderWidth: 1,
//         // borderColor: '#f0f',
//       }}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={
//           {
//             // paddingHorizontal: RFValue(10),
//             // borderWidth: 1,
//             // borderColor: COLORS.red,
//           }
//         }>
//         <View
//           style={{
//             marginTop: RFValue(40),
//             borderWidth: 1,
//             // borderColor: COLORS.red,
//           }}>
         
//             <Image
//               source={images.main_logo}
//               style={{
//                 width: RFValue(100),
//                 height: RFValue(100),
          
//                 alignSelf: 'center',
//              //   backgroundColor:'#fff',
//                 transform:[{scale:1.5}]
//               }}
//               resizeMode="contain"></Image>
    
//         </View>
//         <Text
//           style={{
//       fontSize:RFValue(27),
//             color: COLORS.white,
//            // marginTop: RFValue(30),
//             width: RFValue(120),
//             fontFamily: FONTS.fontFamilyBold,
//             textAlign: 'center',
//             alignSelf: 'center',
//           }}>
//      Fouady
//         </Text>

//         <Text
//           style={{
//             fontSize:RFValue(45),
//             color: COLORS.white,
//             marginTop: RFValue(35),
//            // width: RFValue(120),
//             fontFamily: FONTS.fontFamilyBold,
//             textAlign: 'center',
//             alignSelf: 'center',
//           }}>
//      Welcome
//         </Text>

//         <View
//           style={{
//             borderWidth: 1,
//             borderColor: '#424040',
//             marginTop: RFValue(40),
//             flexDirection: 'row',
//             alignItems: 'center',
//             width: '100%',
//             borderRadius:RFValue(5),
//             paddingHorizontal:RFValue(8)
//           }}>
//           <Image
//             source={icons.SignMail}
//             style={{
//               width: RFValue(30),
//               height: RFValue(30),
//               borderWidth: 1,
//               tintColor:COLORS.darkGray2,
//               transform:[{scale:2}]
//             }}
//           />
//           <TextInput
//             style={{
//               paddingHorizontal: RFValue(8),
//               borderWidth: 1,
//               // borderColor: '#f0f',
//               width: '70%',
//               // marginTop: RFValue(70),
//               color: COLORS.white,
//               fontSize:RFValue(12),
//               fontFamily: FONTS.fontFamilyMedium,
//               paddingVertical: RFValue(0),
//               borderRadius: RFValue(2),
//             }}
//             placeholderTextColor={COLORS.white}
//             placeholder="Username/ Phone/ E mail"
//             onChangeText={setUserName} // Pass the setUserName function correctly
//           />
//         </View>

//         <View
//           style={{
//             borderWidth: 1,
//             borderColor: '#424040',
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginTop: 10,
//             borderRadius:RFValue(5),
//             paddingLeft:RFValue(8)
//           }}>
//           <Image
//             source={icons.SignPass}
//             style={{
//               width: RFValue(30),
//               height: RFValue(30),
//               transform:[{scale:2}]
//             }}
//           />
//           <TextInput
//             style={{
//               paddingHorizontal: RFValue(8),
//               borderWidth: 1,
//               // borderColor: '#f0f',
//               width: '75%',
//               // marginTop: RFValue(70),
//               color: COLORS.white,
//               fontSize:RFValue(12),
//               fontFamily: FONTS.fontFamilyMedium,
//               paddingVertical: RFValue(3),
//               borderRadius: RFValue(5),
//             }}
//             placeholderTextColor={COLORS.white}
//             placeholder="Password"
//             secureTextEntry ={showPass}
//             onChangeText={setPassword} // Pass the setPassword function correctly
//           />
//           <TouchableOpacity onPress={()=>{
//             setShowPass(!showPass)
//           }}>
//           <Image
//             source={icons.SignEye}
//             style={{
//               width: RFValue(20),
//               height: RFValue(20),
//               transform:[{scale:2}],
//               tintColor:showPass? COLORS.white: null
//             }}
//           />
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             marginTop: RFValue(50),
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             width: '100%',
//           }}>
//           <TouchableOpacity
//             style={{
//               paddingHorizontal: RFValue(10),
//               borderWidth: 1,
//               borderColor: '#424040',
//               marginTop: RFValue(10),
//               backgroundColor: COLORS.darkGray,
//               width: '48%',
//               alignItems: 'center',
//               justifyContent: 'center',
//               paddingVertical: RFValue(2),
//               borderRadius: RFValue(5),
//            //   paddingVertical:RFValue(5)
//             }}
//             onPress={handleLogin}>
//             <Text
//               style={{
//                 color: COLORS.white,
//                 fontSize:RFValue(12),
//                 fontFamily: FONTS.fontFamilyMedium,
//               }}>
//               Log In
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{
//               padding: RFValue(13),
//               borderWidth: 1,
//               borderColor: '#424040',
//               marginTop: RFValue(10),
//               width: '49%',
//               alignItems: 'center',
//               justifyContent: 'center',
//               paddingVertical: RFValue(7),
//               borderRadius: RFValue(5),
//               backgroundColor: COLORS.black,
              

//               //  backgroundColor:COLORS.red
//             }}
//             onPress={() => {
//               navigation.navigate('ForgetPassword');
//              // navigation.navigate('OurTeam');
//             }}>
//             <Text
//               style={{
//                 color: COLORS.white,
//                fontSize:RFValue(12),
//                 fontFamily: FONTS.fontFamilyMedium,
//               }}>
//               Forget password
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//         marginTop:RFValue(2),
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             width: '100%',
//           }}>
//         <TouchableOpacity
//           style={{
//             padding: RFValue(13),
//             borderWidth: 1,
//             borderColor: '#424040',
//             marginTop: RFValue(10),
//             width: '48%',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingVertical: RFValue(7),
//             borderRadius: RFValue(5),
//             backgroundColor: COLORS.darkGray,

//             // backgroundColor: COLORS.darkyellow,
//           }}
//           onPress={() => {
//          //   navigation.navigate('SignUp');
//           }}>
//           <Text
//             style={{
//               color: COLORS.white,
//              fontSize:RFValue(12),
//               fontFamily: FONTS.fontFamilyMedium,
//             }}>
//             Create new account
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             padding: RFValue(13),
//             borderWidth: 1,
//             borderColor: '#424040',
//             marginTop: RFValue(10),
//             width: '49%',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingVertical: RFValue(7),
//             borderRadius: RFValue(5),
//             backgroundColor: COLORS.black,

//             // backgroundColor: COLORS.darkyellow,
//           }}
//           onPress={() => {
//             navigation.navigate('AboutUs');
//           }}>
//           <Text
//             style={{
//               color: COLORS.white,
//              fontSize:RFValue(12),
//               fontFamily: FONTS.fontFamilyMedium,
//             }}>
//           About us
//           </Text>
//         </TouchableOpacity>
//         </View>

//         <Text
//           style={{
//             color: COLORS.white,
//             fontSize: RFValue(12),
//             fontFamily: FONTS.fontFamilyMedium,
//             marginTop: RFValue(110),
//             alignSelf: 'center',
//           }}>
//           By signing you agree to the terms and conditions
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

// export default LogIN1;



import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, FONTS, icons, images } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native-gesture-handler';
import utils from '../../../utils';

const LogIN1 = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    let usernameError = '';
    let passwordError = '';

    if (!username || !validateEmail(username)) {
      usernameError = 'Please enter a valid email address';
    }

    if (!password || password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }

    if (usernameError || passwordError) {
      setErrors({ username: usernameError, password: passwordError });
      return;
    }

    // Proceed with navigation if validation passes
    navigation.navigate('AuthMain');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        padding: RFValue(20),
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <View style={{ marginTop: RFValue(40) }}>
          <Image
            source={images.main_logo}
            style={{
              width: RFValue(100),
              height: RFValue(100),
              alignSelf: 'center',
              transform: [{ scale: 1.5 }],
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            fontSize: RFValue(27),
            color: COLORS.white,
            width: RFValue(120),
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          Fouady
        </Text>

        <Text
          style={{
            fontSize: RFValue(45),
            color: COLORS.white,
            marginTop: RFValue(35),
            fontFamily: FONTS.fontFamilyBold,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          Welcome
        </Text>

        {/* Username Input */}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#424040',
            marginTop: RFValue(40),
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderRadius: RFValue(5),
            paddingHorizontal: RFValue(8),
          }}>
          <Image
            source={icons.SignMail}
            style={{
              width: RFValue(30),
              height: RFValue(30),
              tintColor: COLORS.darkGray2,
              transform: [{ scale: 2 }],
            }}
          />
          <TextInput
            style={{
              paddingHorizontal: RFValue(8),
              borderWidth: 1,
              width: '70%',
              color: COLORS.white,
              fontSize: RFValue(12),
              fontFamily: FONTS.fontFamilyMedium,
              paddingVertical: RFValue(0),
              borderRadius: RFValue(2),
            }}
            placeholderTextColor={COLORS.white}
            placeholder="Username/ Phone/ Email"
            value={username}
            onChangeText={(value)=>{setUserName(value)
            console.log(username)
              setErrors({ ...Error,username: ""});
            }}
          />
        </View>
        {errors.username ? <Text style={{ color: 'red', alignSelf:'center' }}>{errors.username}</Text> : null}

        {/* Password Input */}
        <View
          style={{
            borderWidth: 1,
            borderColor: '#424040',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: RFValue(5),
            paddingLeft: RFValue(8),
          }}>
          <Image
            source={icons.SignPass}
            style={{
              width: RFValue(30),
              height: RFValue(30),
              transform: [{ scale: 2 }],
            }}
          />
          <TextInput
            style={{
              paddingHorizontal: RFValue(8),
              borderWidth: 1,
              width: '75%',
              color: COLORS.white,
              fontSize: RFValue(12),
              fontFamily: FONTS.fontFamilyMedium,
              paddingVertical: RFValue(3),
              borderRadius: RFValue(5),
            }}
            placeholderTextColor={COLORS.white}
            placeholder="Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={(value)=>{setPassword(value)
              setErrors({ ...Error,password: ""});
            
            }}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image
              source={icons.SignEye}
              style={{
                width: RFValue(20),
                height: RFValue(20),
                transform: [{ scale: 2 }],
                tintColor: showPass ? COLORS.white : null,
              }}
            />
          </TouchableOpacity>
        </View>
        {errors.password ? <Text style={{ color: 'red', alignSelf:'center' }}>{errors.password}</Text> : null}

        {/* Buttons */}
        <View
          style={{
            marginTop: RFValue(50),
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: RFValue(10),
              borderWidth: 1,
              borderColor: '#424040',
              marginTop: RFValue(10),
              backgroundColor: COLORS.darkGray,
              width: '48%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: RFValue(2),
              borderRadius: RFValue(5),
            }}
            onPress={handleLogin}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: RFValue(12),
                fontFamily: FONTS.fontFamilyMedium,
              }}>
              Log In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: RFValue(13),
              borderWidth: 1,
              borderColor: '#424040',
              marginTop: RFValue(10),
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: RFValue(7),
              borderRadius: RFValue(5),
              backgroundColor: COLORS.black,
            }}
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: RFValue(12),
                fontFamily: FONTS.fontFamilyMedium,
              }}>
              Forget password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Additional Options */}
        <View
          style={{
            marginTop: RFValue(2),
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              padding: RFValue(13),
              borderWidth: 1,
              borderColor: '#424040',
              marginTop: RFValue(10),
              width: '48%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: RFValue(7),
              borderRadius: RFValue(5),
              backgroundColor: COLORS.darkGray,
            }}
            onPress={() => {
              // navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: RFValue(12),
                fontFamily: FONTS.fontFamilyMedium,
              }}>
              Create new account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: RFValue(13),
              borderWidth: 1,
              borderColor: '#424040',
              marginTop: RFValue(10),
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: RFValue(7),
              borderRadius: RFValue(5),
              backgroundColor: COLORS.black,
            }}
            onPress={() => {
              navigation.navigate('AboutUs');
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: RFValue(12),
                fontFamily: FONTS.fontFamilyMedium,
              }}>
              About us
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: COLORS.white,
            fontSize: RFValue(12),
            fontFamily: FONTS.fontFamilyMedium,
            marginTop: RFValue(110),
            alignSelf: 'center',
          }}>
          By signing you agree to the terms and conditions
        </Text>
      </ScrollView>
    </View>
  );
};

export default LogIN1;
