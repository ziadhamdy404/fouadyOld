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

// const JobTitles = ['Doctor', 'engineer'];
const Counties = ['egypt', 'sudan'];
const institutions = ['main', ''];
const Doctors = ['', ''];

const Patients = ({navigation}) => {
  const [name, setName] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [Phone1, setPhone1] = useState('');
  const [Phone2, setPhone2] = useState('');
  const [Email, setEmail] = useState('');
  const [FatherId, setFatherId] = useState('');
  const [Birth, setBirth] = useState('');
  const [County, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [showContry, setShowContry] = useState(false);

  // State for the main dropdown dropdown
  const [openMainInstitution, setOpenMainInstitution] = useState(false);
  const [mainInstitution, setMainInstitution] = useState(null);
  const [mainInstitutionItems, setMainInstitutionItems] = useState([
    {label: 'main', value: 'main'},
    {label: 'main2', value: 'main2'},
    {label: 'main3', value: 'main3'},
  ]);
  const [jobTitlesItems, seJjobTitlesItems] = useState([
    {label: 'Doctor', value: 'Doctor'},
    {label: 'engineer', value: 'engineer'},
  ]);
  const [showJob, setShowJob] = useState(false);
  const [Job_title, setJob_title] = useState('');

  const [institution, setMain_institution] = useState('');
  const [Doctor, setDoctor] = useState('');
  const [itsName, setitsName] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [facebook, setFaceBook] = useState('');
  const [private_work, setprivate_work] = useState('');
  const [private_work_address, setprivate_work_address] = useState('');
  const [private_work_phone, setprivate_work_phone] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleSelect = item => {
    switch (modalType) {
      case 'Job_title':
        setJob_title(item);
        break;
      case 'County':
        setCountry(item);
        break;
      case 'institution':
        setMain_institution(item);
        break;
      case 'Doctor':
        setDoctor(item);
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
          paddingVertical: RFValue(40),
          paddingHorizontal: RFValue(10),
        }}>
        <StatusBar backgroundColor={COLORS.black}></StatusBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={icons.PatientImage}
            style={{
              width: RFValue(150),
              height: RFValue(150),
              alignSelf: 'center',
              borderRadius: RFValue(5),
            }}
            resizeMode="cover"
          />

          <View style={{marginTop: RFValue(20)}}>
            <TextInput2
              placeholder="Name"
              onChangeText={text => setName(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowContry(true);
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
                console.log('name   ', item.name.en);
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

            {/* main institution Dropdown */}
            <DropDownPicker
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
                    // setOpenOtherInstitution(false);
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
                    // setOpenOtherInstitution(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.topp}
                  />
                </TouchableOpacity>
              )}
            />

            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('institution'); // Set to 'County' modal
              }}>
              <Text style={styles.buttonText}>
                {institution || 'institution'}
              </Text>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setModalType('institution');
                }}>
                <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
              </TouchableOpacity>
            </TouchableOpacity> */}
            <DropDownPicker
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
                backgroundColor: '#000',
                padding: RFValue(5),
                paddingVertical: RFValue(5),
                borderWidth: 1,
                borderColor: COLORS.darkGray,
                borderRadius: RFValue(2),
                marginBottom: RFValue(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
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
                    // setOpenOtherInstitution(false);
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
                    // setOpenOtherInstitution(false);
                  }}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.topp}
                  />
                </TouchableOpacity>
              )}
            />

            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('Doctor'); // Set to 'County' modal
              }}>
              <Text style={styles.buttonText}>{Doctor || 'Doctor'}</Text>
              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setModalType('Doctor');
                }}>
                <Image style={[styles.dropdownIcon, {}]} source={icons.DOWN} />
              </TouchableOpacity>
            </TouchableOpacity> */}

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
                      width: '100%',
                    },
                  ]}
                  placeholder="Birth certificate number"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setBirth(text)}></TextInput>
              </View>
              <View
                style={[
                  styles.HalfView,
                  {
                    paddingRight: 0,
                  },
                ]}>
                <TouchableOpacity
                  style={[
                    styles.phoneInput,
                    {
                      width: '80%',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Attach certificate</Text>
                </TouchableOpacity>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.LinkIcon}
                />
              </View>
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
                      width: '100%',
                    },
                  ]}
                  placeholder="Father ID number"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setFatherId(text)}></TextInput>
              </View>
              <View
                style={[
                  styles.HalfView,
                  {
                    paddingRight: 0,
                  },
                ]}>
                <TouchableOpacity
                  style={[
                    styles.phoneInput,
                    {
                      width: '80%',
                    },
                  ]}>
                  <Text style={styles.buttonText}>Attach certificate</Text>
                </TouchableOpacity>
                <Image
                  style={[styles.dropdownIcon2, {}]}
                  source={icons.LinkIcon}
                />
              </View>
            </View>

            <TouchableOpacity style={[styles.button, {}]} onPress={() => {}}>
              <Text style={styles.buttonText}>MRN / Username</Text>
              <TouchableOpacity
                style={{
                  borderWidth: 0,
                }}
                onPress={() => {}}>
                <Text
                  style={{
                    color: '#036596',
                    ...FONTS.h4,
                    fontFamily: FONTS.fontFamilyMedium,
                  }}>
                  Generate
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>

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

            <TouchableOpacity
              style={{
                padding: RFValue(55),
                paddingVertical: RFValue(6),
                alignItems: 'center',
                borderWidth: 1,
                borderColor: COLORS.darkGray2,
                alignSelf: 'center',
                backgroundColor: COLORS.darkGray,

                borderRadius: RFValue(2),
                //  marginBottom:RFValue(20)
              }}>
              <Text
                style={{
                  fontSize: RFValue(15),
                  color: COLORS.white,
                  fontFamily: FONTS.fontFamilyLight,
                }}>
                Promote to detailed account for free
              </Text>
            </TouchableOpacity>

            <DropDown
              modalType={modalType}
              data={
                modalType === 'Job_title'
                  ? JobTitles
                  : modalType === 'County'
                  ? Counties
                  : modalType === 'institution'
                  ? institutions
                  : modalType === 'Doctor'
                  ? Doctors
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
    borderRadius: RFValue(2),
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
    width: RFValue(8),
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
export default Patients;
