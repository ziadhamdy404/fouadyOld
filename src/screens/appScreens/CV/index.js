import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View , StyleSheet , Image ,FlatList , TextInput, ScrollView, Share,Alert, } from "react-native";
import { COLORS, FONTS , icons , images} from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import TextInput2 from "../../../components/TextInput2";
import {CountryPicker} from 'react-native-country-codes-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import DocumentPicker from 'react-native-document-picker';



const CV = ({ navigation }) => {

// useEffect(()=>{
// console.log("00")

// },[])
  
  
const importPDF = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      type: [DocumentPicker.types.docx],
    });
    // Set the selected file info
    setFileInfo(res);

    // console.log(res)
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User canceled the picker
      // Alert.alert('Canceled');
    } else {
      // Handle other errors
      Alert.alert('Error', err.message);
    }
  }
};

const [fileInfo, setFileInfo] = useState(null);
const [file, setFile] = useState(false);



  const [options, setOptions] = useState([
    { title: 'personal', show: true },
    { title: 'Certifications', show: false },
    { title: 'Trainings', show: false },
    { title: 'Skills', show: false },
    { title: 'Career', show: false },
    { title: 'Conferences', show: false },
    { title: 'Research', show: false },
    { title: 'References', show: false },
  ]);

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
const [ReaserchName , setReaserchName] = useState('')
  const [selectedOption , setselectedOption] = useState(options[0].title)
  const [name , setName] = useState('')
  const [countryCode, setCountryCode] = useState('+20');
  const [County, setCountry] = useState('');
  const [showContry, setShowContry] = useState(false);
  const [Address , setAdress] = useState('')
  const [birthDate , setbirthDate] = useState('')
  const [Sexs, setSexs] = useState([
    { title: 'Male' },
    { title: 'Female' },
  
  ]);

  const Degress =[
    {title:'A+'},
    {title:'A'},
    {title:'A-'},
    {title:'B+'},
    {title:'B'},
    {title:'B-'},
    {title:'C+'},
    {title:'C'},
    {title:'C-'},
    {title:'D+'},
    {title:'D'},
    {title:'D-'},
    {title:'F'},

  ]
  const [showDegree , setSHowDegree] = useState(false)
  const [degree , setDegree] = useState('')

  const [showInsitution , setshowInsitution] = useState(false)
  const [Insitution , setInsitution] = useState('')
  const Insitutions=[
    {
        title:'Fouady center'
    },

  ]

  const [Sex , setSex] = useState('')
  const [showSex , setShowSex] = useState(false)
  const [Email , setEmail] = useState('')
  const [LinkedIn , setLinkedIn] = useState('')
  const [Phone , setPhone] = useState('')
  const [Year , setYear] = useState('')
  const [showYear , setshowYear] = useState(false)
  const [Attach_certificate , setAttach_certificate] = useState('')
  const [Add , setAdd] = useState('')

  const [Name , setNameTrain] = useState('')
  const [showName , setShowName] = useState(false)
  const names =[
    {
        title:'css'
    },
    {
        title:'html'
    }
  ]

  const [Place , setPlace] = useState('')
  const [showplace , setShowplace] = useState(false)
  const places=[
    {
        title:'place1'
    },
    {
        title:'place2'
    }
  ]

  const medicalSkills  =[
    {
        title:'skill 1'
    }
  ]
  const [medicalSkillsChoosed , setmedicalSkillsChoosed] = useState([])
  const [showMedicalSkills , setshowMedicalSkills] = useState(false)


  const [ShareAS , setShareAs] = useState('')
  const [showShare , setshowShare] = useState(false)
  const shares=
  [
    {
        title:'share1'
    }
  ]

  const [worksat , setWorksat] =useState('')
  const [show_worksAt , setSHow_worksAt] = useState(false)
  const worksatArray  =[
    {
title:'company1'
    },
    {
      title:'company2'
          },
          {
            title:'company3'
                },
  ]

  const [worksas, setWorksas] =useState('')
  const [show_worksAs , setSHow_worksAs] = useState(false)
  const worksasArray  =[
    {
title:'engineer'
    },
    {
      title:'doctor'
          },
         
  ]

  const [workFrom , setWorkFrom] = useState('')
  const [show_WorkFrom , setshow_WorkFrom] = useState(false)
  const [workTo , setWorkTo] = useState('')
  const [show_WorkTo, setshow_WorkTo] = useState(false)
 const [ConferencesName , setConferencesName] = useState('')
 const [showConferencesName , setShowConferencesName] = useState(false)

const  Conferencesnames =[
  {
    title:'name1'
  },
  {
    title:'name2'
  }
 ]

 const [ConferencesPlace , setConferencesPlace] = useState('')
 const ConferencesPlaces =[
  {
    title:'place1'
  },
  {
    title:'place2'
  },

 ]
 const [showConferencesPlace , setShowConferencesPlace] = useState(false)

 const [shareConferences , setshareConferences] = useState('')
 const [showShareConferences , setshowShareConferences] = useState(false)
const shareConferencesArray =[
  {
    title:'share'
  }
]

const [ConferencesYear , setConferencesYear] = useState('')
const [showConferencesYear , setshowConferencesYear] = useState(false)

const [Journal , setJournal] = useState('')
const [show_Journal , setShow_Journal] = useState(false)
const JournalArray =[
  {
    title:'Journal1'
  },
  {
    title:'Journal2'
  }
]

const [shareAS_Research , setshareAS_Research] = useState('')
const [show_shareAS_Research , setshow_shareAS_Research] = useState(false)
const shareAS_ResearchArray =[
  {
    title:'shareeee'
  }
]



  const onChangeFrom = (event, selectedDate) => {
    const selecteddate = selectedDate || new Date(); // Use the selected date or default to current date
    setshow_WorkFrom(false); // Hide the picker after selection
    setWorkFrom(selecteddate); // Set the selected date
  };

  
  const onChangeTo = (event, selectedDate) => {
    const selecteddate = selectedDate || new Date(); // Use the selected date or default to current date
    setshow_WorkTo(false); // Hide the picker after selection
    setWorkTo(selecteddate); // Set the selected date
  };

  const onChangeConferencesYear = (event, selectedDate) => {
    const selecteddate = selectedDate || new Date(); // Use the selected date or default to current date
    setshowConferencesYear(false); // Hide the picker after selection
    setConferencesYear(selecteddate); // Set the selected date
  };
  const handleOptionPress = ( item , index ) => {
    setOptions((prevOptions) => 
      prevOptions.map((option, idx) => ({
        ...option,
        show: idx === index,  
      }))
 

    );
    setselectedOption(item.title)

    
  };

  const onChange = (event, selectedDate) => {
    const selectedYear = selectedDate ? selectedDate.getFullYear() : null;
    setshowYear(false); 
    if (selectedYear) {
      setYear(selectedYear); 
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 1,
          borderColor: COLORS.darkyellow,
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
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: RFValue(5),
        borderBottomWidth: 1,
        borderColor: COLORS.darkyellow,
        marginBottom: RFValue(10),
        marginTop:RFValue(10)
      }}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '23%',
              borderWidth: 1,
              borderColor: item.show ? COLORS.darkyellow : COLORS.darkGray,
              backgroundColor: COLORS.black,
              borderRadius: RFValue(5),
              paddingVertical: RFValue(7),
              alignItems: 'center',
              marginLeft: RFValue(5),
              marginBottom: RFValue(10),
              justifyContent: 'center',
            }}
            onPress={() => handleOptionPress(item , index)}
          >
            <Text style={{
              ...FONTS.h5,
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyMedium,
              marginRight: RFValue(5),

            }}
            numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ padding: RFValue(10) }}>

   
      {selectedOption == 'personal' &&(
      <>
     
     <View style={{
        width:'100%',
        padding:RFValue(8),
        backgroundColor:COLORS.black,
        borderWidth:2,
        borderColor:COLORS.gray,
        borderRadius:RFValue(5),
        marginBottom:RFValue(-20)
        
        


      }}>
        <Text style={{
            ...FONTS.h4,
            color:COLORS.darkyellow,
            fontFamily:FONTS.fontFamilyMedium
        }}>Personal data</Text>

      </View>

      <TextInput2
              placeholder="Name"
              onChangeText={text => setName(text)}
              value={name}
            />
   <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowContry(true);
                // setOpenMainInstitution(false);
                // setOpenOtherInstitution(false);
                // setModalVisible(true);
                // setModalType('County'); // Set to 'County' modal
              }}> 
              <Text style={styles.buttonText}>{County || 'County'}</Text>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}
                onPress={() => {
                  setShowContry(true);

                  // setModalVisible(true);
                  // setModalType('County');
                }}>
                <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
              </TouchableOpacity>
            </TouchableOpacity>
<CountryPicker
              show={showContry}
              lang="en"
              pickerButtonOnPress={item => {

                setCountry(item.name.en);
                console.log('name   ', item);
                setCountryCode(item.dial_code);
                setShowContry(false);
              }}
              onRequestClose={() => {
                setShowContry(false);
              }}
              onBackdropPress={() => setShowContry(false)}
              style={{
                modal: {
                  height: 400,
                  backgroundColor: 'white',
                },
                dialCode: {
                  color: COLORS.black,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                },
                countryName: {
                  color: COLORS.black,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                },
                searchMessageText: {
                  color: '#000',
                  color: COLORS.black,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                },
                textInput: {
                  color: COLORS.black,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                },
              }}
            />
<View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setAdress}
                placeholder="Address"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {
                    transform:[{scale:2}],
                    marginTop:RFValue(6)
                  }]}
                  source={icons.locatinIcon}
                />
              </TouchableOpacity>
            </View>
<View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setbirthDate}
                placeholder="Date of birth"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.date}
                />
              </TouchableOpacity>
            </View>


            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // setModalVisible(true);
                // setModalType('Job_title'); // Set to 'County' modal
                setShowSex(!showSex)
              }}>
              <Text style={styles.buttonText}>{Sex || 'Sex'}</Text>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title');
                  setShowSex(!showSex)
                }}>
                <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
              </TouchableOpacity>
            </TouchableOpacity>

{showSex?
<View style={{
  marginBottom:RFValue(20)
}}>


            {Sexs.map((item , index)=>(
              <>
               <TouchableOpacity style={{
                marginTop:RFValue(10),
                width:'90%',
                alignSelf:'center',
                backgroundColor: COLORS.darkGray,
                justifyContent:'center',
                borderRadius:RFValue(5),
                padding:RFValue(10),
                paddingHorizontal:RFValue(30),
                borderWidth:Sex == item.title? 1 :0,
                borderColor:Sex == item.title?  COLORS.darkyellow : null
               }} onPress={()=>{
                setSex(item.title)
                setShowSex(false)
               }}>
                <Text style={{
                ...FONTS.h4,
                  color:COLORS.white,
                  fontFamily:FONTS.fontFamilyMedium
                }}>{item.title}</Text>
               </TouchableOpacity>
              </>
            ))}
            </View>
            : null
}

<View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setEmail}
                placeholder="Email address"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.mailIcon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setPhone}
                placeholder="Phone number"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {
                    transform:[{scale:2}]
                  }]}
                  source={icons.telephone}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setLinkedIn}
                placeholder="LinkedIn"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {
                    transform:[{scale:2.5}]
                  }]}
                  source={icons.linked}
                />
              </TouchableOpacity>
            </View>

      </>
      )} 
 
    {selectedOption == 'Certifications'  && (
        <>
       
       <View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5),
          // backgroundColor:'#f00'
          
          
  
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Certifications</Text>
  
        </View>
  
   


  
  
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setSHowDegree(!showDegree)
                }}>
                <Text style={styles.buttonText}>{degree || 'Degree'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setSHowDegree(!showDegree)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {showDegree?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {Degress.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:degree == item.title? 1 :0,
                  borderColor:degree == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setDegree(item.title)
                  setSHowDegree(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>
              : null
  }
  
   <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowInsitution(!showInsitution)
                }}>
                <Text style={styles.buttonText}>{Insitution || 'Insitution'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowInsitution(!showInsitution)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {showInsitution?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {Insitutions.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:Insitution == item.title? 1 :0,
                  borderColor:Insitution == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setInsitution(item.title)
                  setshowInsitution(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>
              : null
  }

  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'#f00'
  }}>

<TouchableOpacity
                style={[styles.button,{
                    width:'30%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowYear(!showYear)
                }}>
                <Text style={styles.buttonText}>{Year || 'Year'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowYear(!showYear)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>

                {showYear && (
        <DateTimePicker
          value={new Date()} // Default to current date
          mode="date"
          display="spinner"
          onChange={onChange}
          maximumDate={new Date()} // Set the maximum date to today's date
          minimumDate={new Date(1900, 0, 1)} // Optional: Set a minimum year if needed
        />
      )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button,{
                    width:'45%',
                }]}
                onPress={()=>{
                importPDF()
                
                }}
                >
                <Text style={styles.buttonText}>{Attach_certificate || 'Attach certificate'}</Text>
                <TouchableOpacity
                 style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
              marginRight:RFValue(5),
              // backgroundColor:'#ff0'
            },
          ]}
                  onPress={()=>importPDF()}
                  
                  >
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>

              
              <TouchableOpacity
                style={[styles.button,{
                    width:'24%'
                }]}
                onPress={() => {
                  // console.log("111")

                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>

  </View>


  
{fileInfo != null ? 
      <View style={
        {
          padding: RFValue(10),
      paddingVertical: RFValue(5),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      borderRadius: RFValue(5),
      marginBottom: RFValue(10),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
}
// [styles.button,{
// }]
      }>
      <Text style={styles.fileName} maxFontSizeMultiplier={50}>{fileInfo[0].name}</Text>

      
          <Image
            source={require("../../../assets/icons/pdf.png")} // Ensure you have a PDF icon image in the assets folder
            style={[styles.icon,{width: RFValue(50),
    height:RFValue(50),
   }]}
          />
       

        
      </View>
:null}

  
        </>
    )} 
      {selectedOption == 'Trainings'  && (
        <>
       
       <View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
          
          
  
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Training courses</Text>
  
        </View>
  
   


  
  
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setShowName(!showName)
                }}>
                <Text style={styles.buttonText}>{Name || 'Name'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setShowName(!showName)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {showName?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {names.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:Name == item.title? 1 :0,
                  borderColor:Name == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                    setNameTrain(item.title)
                  setShowName(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>
              : null
  }
  
   <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setShowplace(!showplace)
                }}>
                <Text style={styles.buttonText}>{Place || 'Place'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setShowplace(!showplace)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {showplace?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {places.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:Place == item.title? 1 :0,
                  borderColor:Place == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setPlace(item.title)
                  setShowplace(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }

<TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowShare(!showShare)
                }}>
                <Text style={styles.buttonText}>{ShareAS  || 'Share as'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowShare(!showShare)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {showShare?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {shares.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:ShareAS == item.title? 1 :0,
                  borderColor:ShareAS == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setShareAs(item.title)
                  setshowShare(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }

  <View style={{
    flexDirection:'row',
    justifyContent:'space-between'
  }}>

<TouchableOpacity
                style={[styles.button,{
                    width:'30%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowYear(!showYear)
                }}>
                <Text style={styles.buttonText}>{Year || 'Year'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowYear(!showYear)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button,{
                    width:'43%',
                    // backgroundColor:'#f00',
                    padding:RFValue(4)
                }]}
                
                onPress={()=>importPDF()}

                >
                <Text style={styles.buttonText}>{Attach_certificate || 'Attach certificate'}</Text>
                <TouchableOpacity
                 style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,

            },
          ]}
                  onPress={()=>importPDF()}
                  
                  >
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>

              
              <TouchableOpacity
                style={[styles.button,{
                    width:'24%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>

  </View>
  
  
{fileInfo != null ? 
      <View style={
        {
          padding: RFValue(10),
      paddingVertical: RFValue(5),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      borderRadius: RFValue(5),
      marginBottom: RFValue(10),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
}
// [styles.button,{
// }]
      }>
      <Text style={styles.fileName} maxFontSizeMultiplier={50}>{fileInfo[0].name}</Text>

      
          <Image
            source={require("../../../assets/icons/pdf.png")} // Ensure you have a PDF icon image in the assets folder
            style={[styles.icon,{width: RFValue(50),
    height:RFValue(50),
   }]}
          />
       

        
      </View>
:null}

        </>
      )}

      {  selectedOption=='Skills' && (
        <>
        <View >
        <View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Medical skills</Text>
  
        </View>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:RFValue(10)

}}>
       <TouchableOpacity
                style={[styles.button ,{
                    width:'70%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowMedicalSkills(!showMedicalSkills)
                }}>
                <Text style={styles.buttonText}>{medicalSkillsChoosed}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowMedicalSkills(!showMedicalSkills)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button,{
                    width:'28%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>
  

</View>

{showMedicalSkills?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {medicalSkills.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:medicalSkills == item.title? 1 :0,
                  borderColor:medicalSkills == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setmedicalSkillsChoosed(item.title)
                  setshowMedicalSkills(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }

<View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Language</Text>
  
        </View>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:RFValue(10)

}}>
       <TouchableOpacity
                style={[styles.button ,{
                    width:'70%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowMedicalSkills(!showMedicalSkills)
                }}>
                <Text style={styles.buttonText}>{medicalSkillsChoosed}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowMedicalSkills(!showMedicalSkills)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button,{
                    width:'28%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>
  

</View>

{showMedicalSkills?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {medicalSkills.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:medicalSkills == item.title? 1 :0,
                  borderColor:medicalSkills == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setmedicalSkillsChoosed(item.title)
                  setshowMedicalSkills(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }


<View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Technical skills</Text>
  
        </View>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:RFValue(10)

}}>
       <TouchableOpacity
                style={[styles.button ,{
                    width:'70%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowMedicalSkills(!showMedicalSkills)
                }}>
                <Text style={styles.buttonText}>{medicalSkillsChoosed}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowMedicalSkills(!showMedicalSkills)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button,{
                    width:'28%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>
  

</View>

{showMedicalSkills?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {medicalSkills.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:medicalSkills == item.title? 1 :0,
                  borderColor:medicalSkills == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setmedicalSkillsChoosed(item.title)
                  setshowMedicalSkills(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }



<View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Soft skills</Text>
  
        </View>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:RFValue(10)

}}>
       <TouchableOpacity
                style={[styles.button ,{
                    width:'70%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowMedicalSkills(!showMedicalSkills)
                }}>
                <Text style={styles.buttonText}>{medicalSkillsChoosed}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowMedicalSkills(!showMedicalSkills)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button,{
                    width:'28%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>
  

</View>

{showMedicalSkills?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {medicalSkills.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:medicalSkills == item.title? 1 :0,
                  borderColor:medicalSkills == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setmedicalSkillsChoosed(item.title)
                  setshowMedicalSkills(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }

  
<View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Hobbits</Text>
  
        </View>

<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:RFValue(10)

}}>
       <TouchableOpacity
                style={[styles.button ,{
                    width:'70%'
                }]}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setshowMedicalSkills(!showMedicalSkills)
                }}>
                <Text style={styles.buttonText}>{medicalSkillsChoosed}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setshowMedicalSkills(!showMedicalSkills)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button,{
                    width:'28%'
                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>
  

</View>

{showMedicalSkills?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {medicalSkills.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:medicalSkills == item.title? 1 :0,
                  borderColor:medicalSkills == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setmedicalSkillsChoosed(item.title)
                  setshowMedicalSkills(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

              
              : null
  }


        </View>
        </>
      )}
      
        { selectedOption == 'Career' && (
        <>
       
       <View style={{
          width:'100%',
          padding:RFValue(8),
          backgroundColor:COLORS.black,
          borderWidth:2,
          borderColor:COLORS.gray,
          borderRadius:RFValue(5),
          marginBottom:RFValue(5)
          
          
  
  
        }}>
          <Text style={{
              ...FONTS.h4,
              color:COLORS.darkyellow,
              fontFamily:FONTS.fontFamilyMedium
          }}>Career</Text>
  
        </View>
  
   


  
  
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setSHow_worksAs(!show_worksAs)
                }}>
                <Text style={styles.buttonText}>{worksas || 'Works as'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setSHow_worksAs(!show_worksAs)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {show_worksAs?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {worksasArray.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:Name == item.title? 1 :0,
                  borderColor:Name == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                    setWorksas(item.title)
                  setSHow_worksAs(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>
              : null
  }
  
   <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // setModalVisible(true);
                  // setModalType('Job_title'); // Set to 'County' modal
                  setSHow_worksAt(!show_worksAt)
                }}>
                <Text style={styles.buttonText}>{worksat || 'Works at'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    // setModalVisible(true);
                    // setModalType('Job_title');
                    setSHow_worksAt(!show_worksAt)
                  }}>
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>
  
  {show_worksAt?
  <View style={{
    marginBottom:RFValue(20)
  }}>
  
  
              {worksatArray.map((item , index)=>(
                <>
                 <TouchableOpacity style={{
                  marginTop:RFValue(10),
                  width:'90%',
                  alignSelf:'center',
                  backgroundColor: COLORS.darkGray,
                  justifyContent:'center',
                  borderRadius:RFValue(5),
                  padding:RFValue(10),
                  paddingHorizontal:RFValue(30),
                  borderWidth:Place == item.title? 1 :0,
                  borderColor:Place == item.title?  COLORS.darkyellow : null
                 }} onPress={()=>{
                  setWorksat(item.title)
                  setSHow_worksAt(false)
                 }}>
                  <Text style={{
                  ...FONTS.h4,
                    color:COLORS.white,
                    fontFamily:FONTS.fontFamilyMedium
                  }}>{item.title}</Text>
                 </TouchableOpacity>
                </>
              ))}
              </View>

:  


               null
  }

<View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setAdress}
                placeholder="Location"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[styles.dropdownIcon2, {
                    transform:[{scale:2}],
                    marginTop:RFValue(6)
                  }]}
                  source={icons.locatinIcon}
                />
              </TouchableOpacity>
            </View>

  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:"#ff0"

  }}>
<TouchableOpacity
  style={[styles.button, { width: '48%' }]}
  onPress={() => {
    setshow_WorkFrom(!show_WorkFrom);
  }}>
  <Text style={styles.buttonText}>
    {workFrom ? format(workFrom, 'MM/dd/yyyy') : 'From'} {/* Format the date */}
  </Text>
  <TouchableOpacity
    style={[
      styles.checkButtons,
      {
        borderColor: COLORS.darkGray,
      },
    ]}
    onPress={() => {
      setshow_WorkFrom(!show_WorkFrom);
    }}>
    <Image
      style={[styles.dropdownIcon, { transform: [{ scale: 4 }] }]}
      source={icons.date}
    />
  </TouchableOpacity>

  {show_WorkFrom && (
    <DateTimePicker
      value={new Date()} // Default to current date
      mode="date"
      display="spinner"
      onChange={onChangeFrom}
      maximumDate={new Date()} // Set the maximum date to today's date
      minimumDate={new Date(1900, 0, 1)} // Optional: Set a minimum year if needed
    />
  )}
</TouchableOpacity> 

<TouchableOpacity
  style={[styles.button, { width: '48%' }]}  
  onPress={() => {
    setshow_WorkTo(!show_WorkTo);
  }}>
  <Text style={styles.buttonText}>
    {workTo ? format(workTo, 'MM/dd/yyyy') : 'To'} {/* Format the date */}
  </Text>
  <TouchableOpacity
    style={[
      styles.checkButtons,
      {
        borderColor: COLORS.darkGray,
      },
    ]}
    onPress={() => {
      setshow_WorkTo(!show_WorkTo);
    }}>
    <Image
      style={[styles.dropdownIcon, { transform: [{ scale: 4 }] }]}
      source={icons.date}
    />
  </TouchableOpacity>

  {show_WorkTo && (
    <DateTimePicker
      value={new Date()} // Default to current date
      mode="date"
      display="spinner"
      onChange={onChangeTo}
      maximumDate={new Date()} // Set the maximum date to today's date
      minimumDate={new Date(1900, 0, 1)} // Optional: Set a minimum year if needed
    />
  )}
</TouchableOpacity> 
  </View>

  <View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
    alignSelf:'flex-end',
    // backgroundColor:"#f00"
  }}>



              <TouchableOpacity
                style={
                  [styles.button,
                  {width:'59%',
                    // backgroundColor:"#f00",
                    padding:RFValue(3),
                     }]}
                onPress={()=>importPDF()}
               

               >
               
                <Text style={[styles.buttonText,{}]}>{Attach_certificate || 'Attach certificate'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                      // backgroundColor:'#ff0',

                    },
                  ]}
                  
                  onPress={()=>importPDF()}
                  
                  >
                  <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
                </TouchableOpacity>
              </TouchableOpacity>

              
              <TouchableOpacity
                style={[styles.button,{
                    width:'39%',
                    padding:RFValue(5),
                    // backgroundColor:"#ff0000"



                }]}
                onPress={() => {
                 
                }}>
                <Text style={styles.buttonText}>{Add || 'Add'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                   
                  }}>
                  <Image style={[styles.dropdownIcon, {
                    transform:[{scale:2}]
                  }]} source={icons.add} />
                </TouchableOpacity>
              </TouchableOpacity>

  </View>
  

  {fileInfo != null ? 
      <View style={
        {
          padding: RFValue(10),
      paddingVertical: RFValue(5),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      borderRadius: RFValue(5),
      marginBottom: RFValue(10),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
}
// [styles.button,{
// }]
      }>
      <Text style={styles.fileName} maxFontSizeMultiplier={50}>{fileInfo[0].name}</Text>

      
          <Image
            source={require("../../../assets/icons/pdf.png")} // Ensure you have a PDF icon image in the assets folder
            style={[styles.icon,{width: RFValue(50),
    height:RFValue(50),
   }]}
          />
       

        
      </View>
:null}







        </>)}

        {selectedOption === 'Conferences' && (

<>

<View style={{
  width:'100%',
  padding:RFValue(8),
  backgroundColor:COLORS.black,
  borderWidth:2,
  borderColor:COLORS.gray,
  borderRadius:RFValue(5),
  marginBottom:RFValue(5)
  
}}>
  <Text style={{
      ...FONTS.h4,
      color:COLORS.darkyellow,
      fontFamily:FONTS.fontFamilyMedium
  }}>Conferences</Text>

</View>






      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setModalVisible(true);
          // setModalType('Job_title'); // Set to 'County' modal
          setShowConferencesName(!showConferencesName)
        }}>
        <Text style={styles.buttonText}>{ConferencesName || 'Name'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setShowConferencesName(!showConferencesName)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

{showConferencesName?
<View style={{
marginBottom:RFValue(20)
}}>


      {Conferencesnames.map((item , index)=>(
        <>
         <TouchableOpacity style={{
          marginTop:RFValue(10),
          width:'90%',
          alignSelf:'center',
          backgroundColor: COLORS.darkGray,
          justifyContent:'center',
          borderRadius:RFValue(5),
          padding:RFValue(10),
          paddingHorizontal:RFValue(30),
          borderWidth:Name == item.title? 1 :0,
          borderColor:Name == item.title?  COLORS.darkyellow : null
         }} onPress={()=>{
            setConferencesName(item.title)
          setShowConferencesName(false)
         }}>
          <Text style={{
          ...FONTS.h4,
            color:COLORS.white,
            fontFamily:FONTS.fontFamilyMedium
          }}>{item.title}</Text>
         </TouchableOpacity>
        </>
      ))}
      </View>
      : null
}

<TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setModalVisible(true);
          // setModalType('Job_title'); // Set to 'County' modal
          setShowConferencesPlace(!showConferencesPlace)
        }}>
        <Text style={styles.buttonText}>{ConferencesPlace || 'Place'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setShowConferencesPlace(!showConferencesPlace)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

{showConferencesPlace?
<View style={{
marginBottom:RFValue(20)
}}>


      {ConferencesPlaces.map((item , index)=>(
        <>
         <TouchableOpacity style={{
          marginTop:RFValue(10),
          width:'90%',
          alignSelf:'center',
          backgroundColor: COLORS.darkGray,
          justifyContent:'center',
          borderRadius:RFValue(5),
          padding:RFValue(10),
          paddingHorizontal:RFValue(30),
          borderWidth:ConferencesPlace == item.title? 1 :0,
          borderColor:ConferencesPlace == item.title?  COLORS.darkyellow : null
         }} onPress={()=>{
          setConferencesPlace(item.title)
          setShowConferencesPlace(false)
         }}>
          <Text style={{
          ...FONTS.h4,
            color:COLORS.white,
            fontFamily:FONTS.fontFamilyMedium
          }}>{item.title}</Text>
         </TouchableOpacity>
        </>
      ))}
      </View>

      
      : null
}

<TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setModalVisible(true);
          // setModalType('Job_title'); // Set to 'County' modal
          setshowShareConferences(!showShareConferences)
        }}>
        <Text style={styles.buttonText}>{shareConferences  || 'Share as'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setshowShareConferences(!showShareConferences)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

{showShareConferences?
<View style={{
marginBottom:RFValue(20)
}}>


      {shareConferencesArray.map((item , index)=>(
        <>
         <TouchableOpacity style={{
          marginTop:RFValue(10),
          width:'90%',
          alignSelf:'center',
          backgroundColor: COLORS.darkGray,
          justifyContent:'center',
          borderRadius:RFValue(5),
          padding:RFValue(10),
          paddingHorizontal:RFValue(30),
          borderWidth:shareConferences == item.title? 1 :0,
          borderColor:shareConferences == item.title?  COLORS.darkyellow : null
         }} onPress={()=>{
          setshareConferences(item.title)
          setshowShareConferences(false)
         }}>
          <Text style={{
          ...FONTS.h4,
            color:COLORS.white,
            fontFamily:FONTS.fontFamilyMedium
          }}>{item.title}</Text>
         </TouchableOpacity>
        </>
      ))}
      </View>

      
      : null
}

<View style={{
flexDirection:'row',
justifyContent:'space-between',
// backgroundColor:'#f00'
}}>

<TouchableOpacity
        style={[styles.button,{
            width:'33%',
            // backgroundColor:"#f00",
            padding:RFValue(5)
        }]}
        onPress={() => {
         setshowConferencesYear(!showConferencesYear)
        }}>
        <View style={{
          alignItems:'center',
        justifyContent:'center',
        // alignSelf:'center',
        // backgroundColor:'#707070',
        width:'80%'
        }}>
        <Text style={styles.buttonText}
        numberOfLines={1}>     
             {ConferencesYear ? format(ConferencesYear, 'MM/dd/yyyy') : 'Year'} {/* Format the date */}
             </Text>
</View>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
              // backgroundColor:'#f00',

            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setshowConferencesYear(!showConferencesYear)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>
      {showConferencesYear && (
        <DateTimePicker
          value={new Date()} // Default to current date
          mode="date"
          display="spinner"
          onChange={onChangeConferencesYear}
          maximumDate={new Date()} // Set the maximum date to today's date
          minimumDate={new Date(1900, 0, 1)} // Optional: Set a minimum year if needed
        />
      )}

      <TouchableOpacity
        style={[styles.button,{
            width:'42%',
            // backgroundColor:"#f00",
            padding:RFValue(3),

        }]}
        onPress={() => {
         
        }}>
        <Text style={styles.buttonText}>{Attach_certificate || 'Attach certificate'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
              // marginRight:RFValue(5),
              // backgroundColor:'#ff0'
            },
          ]}
         
          onPress={()=>importPDF()}

         >
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={[styles.button,{
            width:'22%',
            padding:RFValue(4)
        }]}
        
        onPress={()=>{importPDF()
        
        // console.log(fileInfo)
        }}
        
        >
        <Text style={styles.buttonText}>{Add || 'Add'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
           
          }}>
          <Image style={[styles.dropdownIcon, {
            transform:[{scale:2}]
          }]} source={icons.add} />
        </TouchableOpacity>
      </TouchableOpacity>



      {/* {fileInfo && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>File Name: {fileInfo.name}</Text>
          <Text style={styles.fileUri}>File URI: {fileInfo.uri}</Text>

        </View>
      )} */}











</View>

{fileInfo != null ? 
      <View style={
        {
          padding: RFValue(10),
      paddingVertical: RFValue(5),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      borderRadius: RFValue(5),
      marginBottom: RFValue(10),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
}
// [styles.button,{
// }]
      }>
      <Text style={styles.fileName} maxFontSizeMultiplier={50}>{fileInfo[0].name}</Text>

      
          <Image
            source={require("../../../assets/icons/pdf.png")} // Ensure you have a PDF icon image in the assets folder
            style={[styles.icon,{width: RFValue(50),
    height:RFValue(50),
   }]}
          />
       

        
      </View>
:null}


</>
)}

{selectedOption === 'Research' && (

<>

<View style={{
  width:'100%',
  padding:RFValue(8),
  backgroundColor:COLORS.black,
  // backgroundColor:"#f00",

  borderWidth:2,
  borderColor:COLORS.gray,
  borderRadius:RFValue(5),
  marginBottom:RFValue(-20)
  
}}>
  <Text style={{
      ...FONTS.h4,
      color:COLORS.darkyellow,
      fontFamily:FONTS.fontFamilyMedium,
    
  }}>Research</Text>

</View>






<TextInput2
              placeholder="Name"
              onChangeText={text => setReaserchName(text)}
              value={ReaserchName}
          
            />


<TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setModalVisible(true);
          // setModalType('Job_title'); // Set to 'County' modal
          setShow_Journal(!show_Journal)
        }}>
        <Text style={styles.buttonText}>{Journal || 'Journal'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setShow_Journal(!show_Journal)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

{show_Journal?
<View style={{
marginBottom:RFValue(20)
}}>


      {JournalArray.map((item , index)=>(
        <>
         <TouchableOpacity style={{
          marginTop:RFValue(10),
          width:'90%',
          alignSelf:'center',
          backgroundColor: COLORS.darkGray,
          justifyContent:'center',
          borderRadius:RFValue(5),
          padding:RFValue(10),
          paddingHorizontal:RFValue(30),
          borderWidth:Journal == item.title? 1 :0,
          borderColor:Journal == item.title?  COLORS.darkyellow : null
         }} onPress={()=>{
          setJournal(item.title)
          setShow_Journal(false)
         }}>
          <Text style={{
          ...FONTS.h4,
            color:COLORS.white,
            fontFamily:FONTS.fontFamilyMedium
          }}>{item.title}</Text>
         </TouchableOpacity>
        </>
      ))}
      </View>

      
      : null
}

<TouchableOpacity
        style={styles.button}
        onPress={() => {
          // setModalVisible(true);
          // setModalType('Job_title'); // Set to 'County' modal
          setshow_shareAS_Research(!show_shareAS_Research)
        }}>
        <Text style={styles.buttonText}>{shareAS_Research  || 'Share as'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setshow_shareAS_Research(!show_shareAS_Research)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

{show_shareAS_Research?
<View style={{
marginBottom:RFValue(20)
}}>


      {shareAS_ResearchArray.map((item , index)=>(
        <>
         <TouchableOpacity style={{
          marginTop:RFValue(10),
          width:'90%',
          alignSelf:'center',
          backgroundColor: COLORS.darkGray,
          justifyContent:'center',
          borderRadius:RFValue(5),
          padding:RFValue(10),
          paddingHorizontal:RFValue(30),
          borderWidth:shareAS_Research == item.title? 1 :0,
          borderColor:shareAS_Research == item.title?  COLORS.darkyellow : null
         }} onPress={()=>{
          setshareAS_Research(item.title)
          setshow_shareAS_Research(false)
         }}>
          <Text style={{
          ...FONTS.h4,
            color:COLORS.white,
            fontFamily:FONTS.fontFamilyMedium
          }}>{item.title}</Text>
         </TouchableOpacity>
        </>
      ))}
      </View>

      
      : null
}

<View style={{
flexDirection:'row',
justifyContent:'space-between'
}}>

<TouchableOpacity
        style={[styles.button,{
            width:'34%',
            padding:RFValue(3)
        }]}
        onPress={() => {
         setshowConferencesYear(!showConferencesYear)
        }}>
        <Text style={styles.buttonText}
        numberOfLines={1}>     
             {ConferencesYear ? format(ConferencesYear, 'MM/dd/yyyy') : 'Year'} {/* Format the date */}
             </Text>

        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
            // setModalVisible(true);
            // setModalType('Job_title');
            setshowConferencesYear(!showConferencesYear)
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>
      {showConferencesYear && (
        <DateTimePicker
          value={new Date()} // Default to current date
          mode="date"
          display="spinner"
          onChange={onChangeConferencesYear}
          maximumDate={new Date()} // Set the maximum date to today's date
          minimumDate={new Date(1900, 0, 1)} // Optional: Set a minimum year if needed
        />
      )}

      <TouchableOpacity
        style={[styles.button,{
            width:'41%',
              // backgroundColor:'#f00',
              padding:RFValue(3)

        }]}
        onPress={() => {
         
        }}>
        <Text style={styles.buttonText}>{Attach_certificate || 'Attach certificate'}</Text>
        <TouchableOpacity
         style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
              // marginRight:RFValue(5),
            },
          ]}
          onPress={() => {
           
          }}>
          <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
        </TouchableOpacity>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={[styles.button,{
            width:'22%',
            padding:RFValue(5)
        }]}
        onPress={() => {
         
        }}>
        <Text style={styles.buttonText}>{Add || 'Add'}</Text>
        <TouchableOpacity
          style={[
            styles.checkButtons,
            {
              borderColor: COLORS.darkGray,
            },
          ]}
          onPress={() => {
           
          }}>
          <Image style={[styles.dropdownIcon, {
            transform:[{scale:2}]
          }]} source={icons.add} />
        </TouchableOpacity>
      </TouchableOpacity>

</View>

</>
)}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height:40,
    // marginRight: 10,
    color:"#000"
  },
  fileInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  fileName: {
    fontSize: 12,
    fontWeight: 'bold',
    color:COLORS.orange
  },
 
    TextInput: {
      padding: RFValue(10),
      paddingVertical: RFValue(4),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      color: COLORS.white,
      ...FONTS.h4,
      fontFamily: FONTS.fontFamilyMedium,
      borderRadius: RFValue(2),
      marginBottom: RFValue(10),
    },
    button: {
      padding: RFValue(10),
      paddingVertical: RFValue(5),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      borderRadius: RFValue(5),
      marginBottom: RFValue(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',

    },
  
    buttonText: {
      color: COLORS.white,
      ...FONTS.h4,
      fontFamily: FONTS.fontFamilyMedium,
    },
    dropdownIcon: {
      width: RFValue(7),
      height: RFValue(8),
      tintColor: COLORS.ggray,
      transform: [{rotate: '90deg'}],
    },
    dropdownIcon2: {
      width: RFValue(30),
      height: RFValue(30),
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: RFValue(10),
      marginBottom: RFValue(10),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
    },
    phoneInput: {
      width: '60%',
      padding: RFValue(10),
      paddingVertical: RFValue(5),
      color: COLORS.white,
      ...FONTS.h4,
      fontFamily: FONTS.fontFamilyMedium,
    },
    phoneActions: {
      flexDirection: 'row',
      width: '40%',
      justifyContent: 'space-between',
    },
    socialIcon: {
      width: RFValue(25),
      height: RFValue(25),
    },
    checkButtons: {
      width: RFValue(22),
      height: RFValue(22),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: COLORS.darkGray2,
      borderRadius: RFValue(2),
    },
    icon: {
      width: RFValue(22),
      height: RFValue(22),
    },
    HalfView: {
      width: '49%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: RFValue(10),
      marginBottom: RFValue(10),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
    },
    lineView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    HalfViewImage: {
      width: RFValue(15),
      height: RFValue(15),
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: RFValue(10),
      marginBottom: RFValue(10),
      borderWidth: 1,
      borderColor: COLORS.darkGray,
    },
    phoneInput: {
      width: '60%',
      padding: RFValue(10),
      paddingVertical: RFValue(2),
      color: COLORS.white,
      ...FONTS.h4,
      fontFamily: FONTS.fontFamilyMedium,
    },
    phoneActions: {
      flexDirection: 'row',
      width: '40%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default CV;
