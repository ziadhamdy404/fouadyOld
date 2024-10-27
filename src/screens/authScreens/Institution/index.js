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
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native-gesture-handler';

const categories = ['Technology', 'Business', 'Art', 'Science'];
const Counties = [
  {
    title: 'egypt',
    flag: 'https://i.pinimg.com/236x/73/e5/c0/73e5c094e98bc8d99e7d58fc7033c6ae.jpg',
  },
  {
    title: 'sudan',
    flag: 'https://i.pinimg.com/236x/f0/c9/43/f0c943667e0347d872aabb99bb565d05.jpg',
  },
  {
    title: 'usa',
    flag: 'https://i.pinimg.com/236x/ff/76/57/ff7657010677b3dbe75fe03c5de5a8d7.jpg',
  },
  {
    title: 'canada',
    flag: 'https://i.pinimg.com/236x/97/f5/d1/97f5d1bef2267b58ce60f46149b1f408.jpg',
  },
  {
    title: 'germany',
    flag: 'https://i.pinimg.com/236x/18/fd/89/18fd89f9ec613b067cc42e532c39628f.jpg',
  },
  {
    title: 'france',
    flag: 'https://i.pinimg.com/236x/2b/4e/ac/2b4eac9302578bdb5a4f4534cffe745a.jpg',
  },
  {
    title: 'italy',
    flag: 'https://i.pinimg.com/236x/c2/eb/bf/c2ebbfc932092e6f336616e260630ee2.jpg',
  },
  {
    title: 'japan',
    flag: 'https://i.pinimg.com/236x/07/90/28/079028a2612c9c41617edbf6190fb4e8.jpg',
  },
  {
    title: 'china',
    flag: 'https://i.pinimg.com/236x/df/90/e3/df90e392f1e76e8eccfce705d4f0aaee.jpg',
  },
  {
    title: 'india',
    flag: 'https://i.pinimg.com/236x/76/e2/bc/76e2bc3a8c3503f9fdd53aaa924b89e5.jpg',
  },
  {
    title: 'brazil',
    flag: 'https://i.pinimg.com/736x/1c/d4/c7/1cd4c78bd9486690e38f7b589ee7870b.jpg',
  },
  {
    title: 'australia',
    flag: 'https://i.pinimg.com/236x/50/db/d6/50dbd6191e4673a90adb5de97bb6af9d.jpg',
  },
  {
    title: 'mexico',
    flag: 'https://i.pinimg.com/236x/2c/60/86/2c608693f21531817c6b10129840e9b3.jpg',
  },
  {
    title: 'south africa',
    flag: 'https://i.pinimg.com/236x/c5/11/84/c511849575695e25d58881cf27308b0f.jpg',
  },
  {
    title: 'nigeria',
    flag: 'https://i.pinimg.com/236x/4c/aa/7c/4caa7cc2e3d5730531df40531f1c145e.jpg',
  },
  {
    title: 'saudi arabia',
    flag: 'https://i.pinimg.com/236x/9b/1d/3f/9b1d3fd2e4b200b2242338f64e8db936.jpg',
  },
  {
    title: 'russia',
    flag: 'https://i.pinimg.com/236x/f0/c8/ca/f0c8ca5cb73d1a8def965fa98adac567.jpg',
  },
  {
    title: 'spain',
    flag: 'https://i.pinimg.com/236x/89/5e/e1/895ee19a8089bced037a3c91c864dbe9.jpg',
  },
];

const Index = [1, 2, 3];
const Business = [''];
const admins = ['Admin 1', 'Admin 2', 'Admin 3'];
const members = ['Member 1', 'Member 2', 'Member 3'];

const Institution = ({navigation}) => {
  const [modalType, setModalType] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [County, setCountry] = useState('');
  const [MYIndex, setIndex] = useState('');
  const [chosenBusniess, setChosenBusniess] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [about, setAbout] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [applyWhats1, setApplyWhats1] = useState(false);
  const [applyTelegram1, setApplyTelegram1] = useState(false);
  const [applyWhats2, setApplyWhats2] = useState(false);
  const [applyTelegram2, setApplyTelegram2] = useState(false);
  const [email, setEmail] = useState('');
  const [Website, setWebsite] = useState('');
  const [Address, setAddress] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [Whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [telegram, settelegram] = useState('');
  const [twitter, settwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [admin, setAdmin] = useState('');
  const [AdminPassword, setAdminPassword] = useState('');
  const [Username, setuserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Adminchosen, setAdminchosen] = useState('');
  const [Memberschosen, setMemberschosen] = useState('');
  const [selectedFlag, setSelectedFlag] = useState(Counties[0].flag);

  const handleSelect = item => {
    if (modalType === 'Category') {
      setCategory(item);
    } else if (modalType === 'County') {
      const selectedCounty = Counties.find(county => county.title === item);
      setCountry(item);
      setSelectedFlag(selectedCounty.flag);
    } else if (modalType === 'Index') {
      setIndex(item);
    } else if (modalType === 'Business') {
      setChosenBusniess(item);
    } else if (modalType === 'Admins') {
      setAdminchosen(item);
    } else if (modalType === 'Members') {
      setMemberschosen(item);
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
            source={icons.hospitalImage}
            style={{
              width: RFValue(150),
              height: RFValue(150),
              alignSelf: 'center',
              borderRadius: RFValue(5),
              marginBottom: RFValue(30),
            }}
            resizeMode="cover"
          />

          <View style={{marginTop: RFValue(10)}}>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor={COLORS.white}
              onChangeText={text => setName(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('Category'); // Set to 'Category' modal
              }}>
              <Text style={styles.buttonText}>{category || 'Category'}</Text>

              <TouchableOpacity
                style={[
                  styles.checkButtons,
                  {
                    borderColor: COLORS.darkGray,
                  },
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setModalType('Category');
                }}>
                <Image
                  style={[styles.dropdownIcon, {}]}
                  source={icons.DOWN}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('County');
              }}>
              <Text style={styles.buttonText}>{County || 'County'}</Text>
              <Image
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                  marginLeft: RFValue(120),
                }}
                source={{uri: selectedFlag}}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={[styles.checkButtons, {borderColor: COLORS.darkGray}]}>
                <Image
                  style={[styles.dropdownIcon]}
                  source={icons.DOWN}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('Index'); // Set to 'Index' modal
              }}>
              <Text style={styles.buttonText}>
                {MYIndex || 'Speciality index'}
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
                  setModalType('Index');
                }}>
                <Image
                  style={[styles.dropdownIcon, {}]}
                  source={icons.DOWN}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(true);
                setModalType('Business'); // Set to 'Business' modal
              }}>
              <Text style={styles.buttonText}>
                {chosenBusniess || 'Business model'}
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
                  setModalType('County');
                }}>
                <Image
                  style={[styles.dropdownIcon, {}]}
                  source={icons.DOWN}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TextInput
              style={[
                styles.TextInput,
                {height: RFValue(70), marginBottom: RFValue(30)},
              ]}
              placeholder="About"
              placeholderTextColor={COLORS.white}
              onChangeText={text => setAbout(text)}
            />

            {/* Phone 1 Input with WhatsApp and Telegram options */}
            <View style={styles.phoneInputContainer}>
              <TextInput
                style={styles.phoneInput}
                placeholder="Phone 1"
                placeholderTextColor={COLORS.white}
                onChangeText={text => setPhone1(text)}
              />
              <View style={styles.phoneActions}>
                <TouchableOpacity
                  style={[styles.checkButtons]}
                  onPress={() => setApplyWhats1(!applyWhats1)}>
                  <Image
                    tintColor={'green'}
                    style={styles.icon}
                    source={applyWhats1 ? icons.check : null}
                  />
                </TouchableOpacity>
                <Image source={icons.whats} style={styles.socialIcon} />
                <TouchableOpacity
                  style={[styles.checkButtons]}
                  onPress={() => setApplyTelegram1(!applyTelegram1)}>
                  <Image
                    tintColor={'green'}
                    style={styles.icon}
                    source={applyTelegram1 ? icons.check : null}
                  />
                </TouchableOpacity>
                <Image
                  source={icons.telegram}
                  style={[
                    styles.socialIcon,
                    {
                      width: RFValue(22),
                      height: RFValue(22),
                    },
                  ]}
                />
              </View>
            </View>

            {/* Phone 2 Input with WhatsApp and Telegram options */}
            <View style={styles.phoneInputContainer}>
              <TextInput
                style={styles.phoneInput}
                placeholder="Phone 2"
                placeholderTextColor={COLORS.white}
                onChangeText={text => setPhone2(text)}
              />
              <View style={styles.phoneActions}>
                <TouchableOpacity
                  style={[styles.checkButtons]}
                  onPress={() => setApplyWhats2(!applyWhats2)}>
                  <Image
                    tintColor={'green'}
                    style={styles.icon}
                    source={applyWhats2 ? icons.check : null}
                  />
                </TouchableOpacity>
                <Image source={icons.whats} style={styles.socialIcon} />
                <TouchableOpacity
                  style={[styles.checkButtons]}
                  onPress={() => setApplyTelegram2(!applyTelegram2)}>
                  <Image
                    tintColor={'green'}
                    style={styles.icon}
                    source={applyTelegram2 ? icons.check : null}
                  />
                </TouchableOpacity>
                <Image
                  source={icons.telegram}
                  style={[
                    styles.socialIcon,
                    {
                      width: RFValue(22),
                      height: RFValue(22),
                    },
                  ]}
                />
              </View>
            </View>
            <View style={styles.phoneInputContainer}>
              <TextInput
                style={[
                  styles.phoneInput,
                  {
                    width: '90%',
                  },
                ]}
                placeholder="Email"
                placeholderTextColor={COLORS.white}
                onChangeText={text => setEmail(text)}
              />
              <Image
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                  tintColor: COLORS.darkGray,
                }}
                source={icons.email}></Image>
            </View>

            <TextInput
              style={styles.TextInput}
              placeholder="Website"
              placeholderTextColor={COLORS.white}
              onChangeText={text => setWebsite(text)}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="Address"
              placeholderTextColor={COLORS.white}
              onChangeText={text => setAddress(text)}
            />
            <View style={styles.lineView}>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setLinkedIn(text)}></TextInput>
                <Image
                  style={styles.HalfViewImage}
                  source={icons.linkedin2}></Image>
              </View>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setWhatsapp(text)}></TextInput>
                <Image
                  style={styles.HalfViewImage}
                  source={icons.whatsapp2}></Image>
              </View>
            </View>
            <View style={styles.lineView}>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setFacebook(text)}></TextInput>
                <Image
                  style={styles.HalfViewImage}
                  source={icons.facebook2}></Image>
              </View>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => settelegram(text)}></TextInput>
                <Image
                  style={styles.HalfViewImage}
                  source={icons.telegram2}></Image>
              </View>
            </View>
            <View style={styles.lineView}>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => settwitter(text)}></TextInput>
                <Image
                  style={[
                    styles.HalfViewImage,
                    {
                      tintColor: COLORS.white,
                    },
                  ]}
                  source={icons.twitter2}></Image>
              </View>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setInstagram(text)}></TextInput>
                <Image
                  style={[
                    styles.HalfViewImage,
                    {
                      tintColor: COLORS.white,
                    },
                  ]}
                  source={icons.instagram}></Image>
              </View>
            </View>
            <View style={styles.lineView}>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setYoutube(text)}></TextInput>
                <Image
                  style={[styles.HalfViewImage, {}]}
                  source={icons.youtube}></Image>
              </View>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  onChangeText={text => setTiktok(text)}></TextInput>
                <Image
                  style={styles.HalfViewImage}
                  source={icons.tiktok}></Image>
              </View>
            </View>

            <View
              style={[
                styles.lineView,
                {
                  marginTop: RFValue(40),
                },
              ]}>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  placeholder="Creating admin"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setAdmin(text)}></TextInput>
                <Image
                  style={[
                    styles.HalfViewImage,
                    {
                      tintColor: COLORS.darkGray,
                    },
                  ]}
                  source={icons.user}></Image>
              </View>
              <View style={styles.HalfView}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    {
                      width: '90%',
                    },
                  ]}
                  placeholder="Admin password"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setAdminPassword(text)}></TextInput>
              </View>
            </View>

            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor={COLORS.white}
              onChangeText={text => setuserName(text)}
            />

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
                  placeholder="Password"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setPassword(text)}></TextInput>
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
                      width: '100%',
                    },
                  ]}
                  placeholder="Confirm password"
                  placeholderTextColor={'#fff'}
                  onChangeText={text => setConfirmPassword(text)}></TextInput>
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
                marginTop: RFValue(40),
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
                padding: RFValue(10),
                paddingVertical: RFValue(6),
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#595858',
                // alignSelf:'center',
                backgroundColor: COLORS.darkGray,
                marginTop: RFValue(30),
                borderRadius: RFValue(2),
                marginBottom: RFValue(20),
              }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                }}>
                Admins and members
              </Text>
            </TouchableOpacity>

            <View style={styles.lineView}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: '49%',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setModalType('Admins'); // Set to 'Admins' modal
                }}>
                <Text style={styles.buttonText}>{Adminchosen || 'Admins'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.DOWN}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: '49%',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => {
                  setModalVisible(true);
                  setModalType('Members'); // Set to 'Members' modal
                }}>
                <Text style={styles.buttonText}>
                  {Memberschosen || 'Members'}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.DOWN}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>

            <View style={styles.lineView}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: '49%',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => {}}>
                <Text style={styles.buttonText}>{Adminchosen || 'Admins'}</Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.add}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: '49%',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => {}}>
                <Text style={styles.buttonText}>
                  {Memberschosen || 'Members'}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.checkButtons,
                    {
                      borderColor: COLORS.darkGray,
                    },
                  ]}>
                  <Image
                    style={[styles.dropdownIcon, {}]}
                    source={icons.add}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>

            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                  <Text style={styles.modalTitle}>
                    {modalType === 'Category' && 'Select a Category'}
                    {modalType === 'County' && 'Select a County'}
                    {modalType === 'Index' && 'Select an Index'}
                    {modalType === 'Business' && 'Select a Business Model'}
                    {modalType === 'Admins' && 'Select an Admin'}
                    {modalType === 'Members' && 'Select a Member'}
                  </Text>
                  <FlatList
                    data={
                      modalType === 'Category'
                        ? categories
                        : modalType === 'County'
                        ? Counties
                        : modalType === 'Index'
                        ? Index
                        : modalType === 'Business'
                        ? Business
                        : modalType === 'Admins'
                        ? admins
                        : members // For "Members"
                    }
                    keyExtractor={item =>
                      modalType === 'County' ? item.title : item.toString()
                    } // Use item.title for County
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.modalItem}
                        onPress={() =>
                          modalType === 'County'
                            ? handleSelect(item.title)
                            : handleSelect(item)
                        }>
                        {/* For County, render title and flag, for others just render item */}
                        {modalType === 'County' ? (
                          <>
                            <Image
                              style={styles.modalFlagIcon}
                              source={{uri: item.flag}}
                              resizeMode="contain"
                            />
                            <Text style={styles.modalItemText}>
                              {item.title}
                            </Text>
                          </>
                        ) : (
                          <Text style={styles.modalItemText}>{item}</Text>
                        )}
                      </TouchableOpacity>
                    )}
                  />

                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalCloseText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    padding: RFValue(10),
    paddingVertical: RFValue(2),
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
    paddingVertical: RFValue(6),
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
    borderRadius: RFValue(4),
  },
  icon: {
    width: RFValue(22),
    height: RFValue(22),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.black,
    borderRadius: RFValue(10),
    padding: RFValue(20),
  },
  modalTitle: {
    ...FONTS.h4,
    fontFamily: FONTS.fontFamilyMedium,
    marginBottom: RFValue(20),
    textAlign: 'center',
    color: COLORS.white,
  },
  modalItem: {
    padding: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  modalItemText: {
    color: COLORS.white,
    ...FONTS.h4,
  },
  modalCloseButton: {
    marginTop: RFValue(20),
    alignSelf: 'center',
  },
  modalCloseText: {
    color: COLORS.Secondary,
    ...FONTS.h4,
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
});

export default Institution;
