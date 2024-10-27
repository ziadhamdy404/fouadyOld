import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import TextInput2 from '../../../components/TextInput2';
import DropDown from '../../../components/DropDown';
import {CountryPicker} from 'react-native-country-codes-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const JobTitles = ['Doctor', 'engineer'];
const Counties = ['egypt', 'sudan'];
const Main_institution = ['main', ''];
const Other_institutionS = ['', ''];

const Participant = ({navigation}) => {
  const [jobTitlesItems, setJobTitlesItems] = useState([
    { title: 'Non invasive Ped cardiologist' },
    { title: 'Ped cardiology interventionist' },
    { title: 'Ped cardiac surgeon' },
    { title: 'Ped echocardiologist' },
    { title: 'Ped electrophysiologist' },
    { title: 'Ped cardiac radiologist' },
    { title: 'Ped cardiac intensivist' },
    { title: 'Ped cardiac anesthesiologist' },
    { title: 'Pediatrician' },
    { title: 'Neonatologist' },
    { title: 'Pediatric ICU' },
    { title: 'Non invasive cardiologist' },
    { title: 'Cardiology interventionist' },
    { title: 'Cardiac surgeon' },
    { title: 'Echocardiographer' },
    { title: 'Electrophysiologist' },
    { title: 'Radiologist' },
    { title: 'Intensivist' },
    { title: 'Anesthesiologist' },
    { title: 'Obstetrician/ gynecologist' },
    { title: 'Fetologist' }
  ]);
  
  const [Job_title, setJob_title] = useState('');
  const [showJob, setShowJob] = useState(false);

  // State for the main dropdown dropdown
  const [openMainInstitution, setOpenMainInstitution] = useState(false);
  const [mainInstitution, setMainInstitution] = useState(null);
  const [mainInstitutionItems, setMainInstitutionItems] = useState([
  {title:'main1'},
  {title:'main2'},
  {title:'main3'},
  ]);

  // State for the main dropdown dropdown
  const [openOtherInstitution, setOpenOtherInstitution] = useState(false);
  const [OtherInstitution, setOtherInstitution] = useState(null);
  const [OtherInstitutionItems, setOtherInstitutionItems] = useState([
    {label: 'other', value: 'other'},
    {label: 'other1', value: 'other1'},
    {label: 'other2', value: 'other2'},
  ]);

  const [name, setName] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Phone1, setPhone1] = useState('');
  const [Phone2, setPhone2] = useState('');
  const [Email, setEmail] = useState('');

  const [County, setCountry] = useState('');
  const [Other_institutions_chosen, setOther_institutions] = useState('');
  const [itsName, setitsName] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [facebook, setFaceBook] = useState('');
  const [private_work, setprivate_work] = useState('');
  const [private_work_address, setprivate_work_address] = useState('');
  const [private_work_phone, setprivate_work_phone] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [showContry, setShowContry] = useState(false);
  const [showJobs , setShowJobs] = useState(false)
  const [showInsitution , setshowInsitution ] = useState(false)

  const handleSelect = item => {
    switch (modalType) {
      case 'Job_title':
        setJob_title(item);
        break;
      case 'County':
        setCountry(item);
        break;
      case 'Main_institution':
        setMain_institution(item);
        break;
      case 'Other_institutions':
        setOther_institutions(item);
        break;

      default:
        break;
    }
    setModalVisible(false); // Close the modal after selection
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          paddingVertical: RFValue(20),
          paddingHorizontal: RFValue(10),
        }}>
        <StatusBar backgroundColor={COLORS.black}></StatusBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={icons.personDoctor}
            style={{
              width: RFValue(150),
              height: RFValue(150),
              alignSelf: 'center',
              borderRadius: RFValue(5),
              marginBottom: RFValue(0),
             
            }}
            resizeMode="cover"
          />

          <View style={{marginTop: RFValue(0)}}>
            <TextInput2
              placeholder="Name"
              onChangeText={text => setName(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // setModalVisible(true);
                // setModalType('Job_title'); // Set to 'County' modal
                setShowJobs(!showJobs)
              }}>
              <Text style={styles.buttonText}>{Job_title || 'Job title'}</Text>
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
                  setShowJobs(!showJobs)
                }}>
                <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
              </TouchableOpacity>
            </TouchableOpacity>

{showJobs?
<View style={{
  marginBottom:RFValue(20)
}}>


            {jobTitlesItems.map((item , index)=>(
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
                borderWidth:Job_title == item.title? 1 :0,
                borderColor:Job_title == item.title?  COLORS.darkyellow : null
               }} onPress={()=>{
                setJob_title(item.title)
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
            {/* <DropDownPicker
              theme="DARK"
              open={showJob}
              value={Job_title}
              items={jobTitlesItems}
              setOpen={setShowJob}
              setValue={setJob_title}
              setItems={setJob_title}
              placeholder={'Job Title'}
              placeholderStyle={{
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyMedium,
              }}
              style={{
                backgroundColor: '#ff0',
                padding: RFValue(5),
                paddingVertical: RFValue(0),
                borderWidth: 1,
                borderColor: COLORS.darkGray,
                borderRadius: RFValue(2),
                marginBottom: RFValue(50),
                flexDirection: 'row',
                justifyContent: 'space-between',
                height:RFValue(10)
              }}
              dropDownContainerStyle={{
                width: '97%',
                alignSelf: 'center',
                backgroundColor: '#000',
              }}
              ArrowDownIconComponent={() => (
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    setShowJob(!showJob);
                    setOpenMainInstitution(false);
                    setOpenOtherInstitution(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.DOWN}
                  />
                </TouchableOpacity>
              )}
              ArrowUpIconComponent={() => (
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}
                  onPress={() => {
                    setShowJob(!showJob);
                    setOpenMainInstitution(false);
                    setOpenOtherInstitution(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.topp}
                  />
                </TouchableOpacity>
              )}
            /> */}




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
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // setModalVisible(true);
                // setModalType('Job_title'); // Set to 'County' modal
                setshowInsitution(!showInsitution)
              }}>
              <Text style={styles.buttonText}>{mainInstitution || 'Main institution'}</Text>
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


            {mainInstitutionItems.map((item , index)=>(
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
                borderWidth:mainInstitution == item.title? 1 :0,
                borderColor:mainInstitution == item.title?  COLORS.darkyellow : null
               }} onPress={()=>{
                setMainInstitution(item.title)
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
            {/* main institution Dropdown */}
            {/* <DropDownPicker
              theme="DARK"
              dropDownDirection="TOP"
              open={openMainInstitution}
              value={mainInstitution}
              items={mainInstitutionItems}
              setOpen={setOpenMainInstitution}
              setValue={setMainInstitution}
              setItems={setMainInstitutionItems}
              placeholder={'Main institution'}
              placeholderStyle={{
                color: COLORS.white,
                ...FONTS.h4,
                fontFamily: FONTS.fontFamilyMedium,
              }}
              style={{
                backgroundColor: '#000',
                padding: RFValue(5),
                borderWidth: 1,
                borderColor: COLORS.darkGray,
                borderRadius: RFValue(2),
                marginBottom: RFValue(10),
              }}
              dropDownContainerStyle={{
                width: '97%',
                alignSelf: 'center',
                backgroundColor: '#000',
                zIndex: 10, // Ensure it appears above other elements
              }}
              ArrowDownIconComponent={() => (
                <TouchableOpacity
                  style={[styles.checkButtons, {borderColor: COLORS.darkGray}]}
                  onPress={() => {
                    setOpenMainInstitution(!openMainInstitution);
                    setOpenOtherInstitution(false);
                    setShowJob(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.DOWN}
                  />
                </TouchableOpacity>
              )}
              ArrowUpIconComponent={() => (
                <TouchableOpacity
                  style={[styles.checkButtons, {borderColor: COLORS.darkGray}]}
                  onPress={() => {
                    setOpenMainInstitution(!openMainInstitution);
                    setShowJob(false);
                    setOpenOtherInstitution(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.topp}
                  />
                </TouchableOpacity>
              )}
            /> */}

      

            {/* <Text
              style={[
                styles.buttonText,
                {
                  textAlign: 'right',
                  marginVertical: RFValue(15),
                  marginRight: RFValue(10),
                },
              ]}>
              Cannot find my institution name
            </Text> */}

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={[
                  styles.TextInput,
                  {
                    width: '55%',
                  },
                ]}
                placeholder="Write its name"
                placeholderTextColor={COLORS.white}
                onChangeText={text => setitsName(text)}
              />

              <TouchableOpacity
                style={{
                  width: '45%',
                  padding: RFValue(10),
                  paddingVertical: RFValue(4),
                  borderWidth: 1,
                  borderColor: COLORS.darkGray,
                  borderRadius: RFValue(2),
                  marginBottom: RFValue(10),
                  backgroundColor: COLORS.darkGray,
                }}>
                <Text style={styles.buttonText}>Give us details about</Text>
              </TouchableOpacity>
            </View> */}

            <View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                  marginTop:RFValue(25)
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setPhone1}
                placeholder="Phone1"
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
                  source={icons.whatsIcon}
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
                onChangeText={setPhone2}
                placeholder="Phone2"
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
                  source={icons.teleicon}
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
                onChangeText={setEmail}
                placeholder="Email"
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
                  style={[
                    styles.dropdownIcon2,
                    {
                      tintColor: null,
                      width: RFValue(70),
                    },
                  ]}
                  source={icons.linked}
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
                onChangeText={setFaceBook}
                placeholder="Facebook"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[
                    styles.dropdownIcon2,
                    {
                      tintColor: null,
                      width: RFValue(50),
                    },
                  ]}
                  source={icons.faceIcon}
                />
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                marginTop: RFValue(-28),
              }}>
              <TextInput2
                placeholder="Private work name"
                onChangeText={text => setprivate_work(text)}
              />
            </View> */}
            {/* <View
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
                onChangeText={setprivate_work_address}
                placeholder="Address of private work"
                placeholderTextColor={COLORS.white}></TextInput>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}>
                <Image
                  style={[
                    styles.dropdownIcon2,
                    {
                      width: RFValue(50),
                    },
                  ]}
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
                onChangeText={setprivate_work_phone}
                placeholder="Phone of private work"
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
                  source={icons.whatsIcon}
                />
              </TouchableOpacity>
            </View> */}

            <View
              style={[
                styles.button,
                {
                  paddingVertical: RFValue(0),
                  alignItems: 'center',
                  height: RFValue(37),
                  marginTop: RFValue(40),
                },
              ]}>
              <TextInput
                style={{
                  color: COLORS.white,
                  ...FONTS.h4,
                  fontFamily: FONTS.fontFamilyMedium,
                  width: '80%',
                }}
                onChangeText={setUserName}
                placeholder="Username"
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
                  source={icons.userIcon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.lineView,
                {
                  // marginTop:RFValue(10),
                },
              ]}>
              <View
                style={[
                  styles.HalfView,
                  {
                    paddingRight: 0,
                  },
                ]}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '80%',
                    },
                  ]}
                  placeholder="Password"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setPassword(text)}></TextInput>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.passicon}
                />
              </View>
              <View
                style={[
                  styles.HalfView,
                  {
                    paddingRight: 0,
                  },
                ]}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '80%',
                    },
                  ]}
                  placeholder="Confirm password"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setConfirmPassword(text)}></TextInput>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.passicon}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                padding: RFValue(55),
                paddingVertical: RFValue(6),
                alignItems: 'center',
                borderWidth: 1,
                borderColor: COLORS.Secondary,
                alignSelf: 'center',
                backgroundColor: COLORS.darkGray2,
                marginTop: RFValue(10),
                borderRadius: RFValue(2),
                marginBottom: RFValue(20),
              }}>
              <Text
                style={{
                  fontSize: RFValue(15),
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyMedium,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>

            <DropDown
              modalType={modalType}
              data={
                modalType === 'Job_title'
                  ? JobTitles
                  : modalType === 'County'
                  ? Counties
                  : modalType === 'Main_institution'
                  ? Main_institution
                  : modalType === 'Other_institutions'
                  ? Other_institutionS
                  : null
                // : modalType === "Admins" ? admins
                // : members
              }
              handleSelect={handleSelect}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
export default Participant;
