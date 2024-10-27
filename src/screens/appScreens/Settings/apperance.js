import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

const Settings = ({navigation}) => {
  const [options, setOptions] = useState([
    {title: 'Appearance', show: true},
    {title: ' Adjustment', show: false},
    {title: ' Language', show: false},
    {title: 'Data', show: false},
    {title: 'Notifications', show: false},
    {title: 'Payment', show: false},
    {title: 'Security', show: false},
    {title: 'Privacy', show: false},
  ]);

  const [selectedOption, setselectedOption] = useState(options[0].title);

  const handleOptionPress = (item, index) => {
    setOptions(prevOptions =>
      prevOptions.map((option, idx) => ({
        ...option,
        show: idx === index,
      })),
    );
    setselectedOption(item.title);
  };

  const [Thames, setThames] = useState([
    {title: 'Default'},
    {title: 'Dark'},
    {title: 'Light'},
  ]);
  const [Thame, setThame] = useState('');
  const [showThame, setShowThame] = useState(false);

  const [Fonts, setFonts] = useState([
    {title: 'Small'},
    {title: 'Stander'},
    {title: 'Large'},
  ]);
  const [Font, setFont] = useState('');
  const [showFont, setShowFont] = useState(false);

  const [ZoomList, setZoomList] = useState([
    {title: '25%'},
    {title: '50%'},
    {title: '75%'},
    {title: '100%%'},
  ]);
  const [Zoom, setZoom] = useState('');
  const [showZoom, setShowZoom] = useState(false);

  const [wallpaperList, setwallpaperList] = useState([
    {title: 'castimize'},
    {title: 'stander'},
  ]);
  const [wallpaper, setwallpaper] = useState('');
  const [showwallpaper, setShowwallpaper] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          padding: RFValue(10),
        }}>


        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            paddingBottom: 40,
          }}>



          

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: RFValue(5),
              borderBottomWidth: 1,
              borderColor: COLORS.darkyellow,
              marginBottom: RFValue(10),
            }}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: RFValue(80),
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
                onPress={() => handleOptionPress(item, index)}>
                <Text
                  style={{
                    ...FONTS.h5,
                    color: COLORS.white,
                    fontFamily: FONTS.fontFamilyMedium,
                    marginRight: RFValue(5),
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{padding: RFValue(10)}}>
            {selectedOption == 'Appearance' ? (




              <>
               {/* Appearance */}
                {/* mode */}
                <View
                  style={{
                    width: '100%',
                    padding: RFValue(8),
                    backgroundColor: COLORS.black,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius: RFValue(5),
                    marginBottom: RFValue(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        {
                          width: '55%',
                          height: 40,
                          backgroundColor: '#rgb(36 36 36)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Mode</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowThame(!showThame);
                      }}>
                      <Text style={styles.buttonText}>
                        {Thame || 'Default'}
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
                          setShowThame(!showThame);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showThame ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Thames.map((item, index) => (
                        <>
                          <TouchableOpacity
                            style={{
                              marginTop: RFValue(10),
                              width: '90%',
                              alignSelf: 'center',
                              backgroundColor: COLORS.darkGray,
                              justifyContent: 'center',
                              borderRadius: RFValue(5),
                              padding: RFValue(10),
                              paddingHorizontal: RFValue(30),
                              borderWidth: Thame == item.title ? 1 : 0,
                              borderColor:
                                Thame == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setThame(item.title);
                              setShowThame(false);
                            }}>
                            <Text
                              style={{
                                ...FONTS.h4,
                                color: COLORS.white,
                                fontFamily: FONTS.fontFamilyMedium,
                              }}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        </>
                      ))}
                    </View>
                  ) : null}
                </View>

                {/* Font Size */}

                <View
                  style={{
                    width: '100%',
                    padding: RFValue(8),
                    backgroundColor: COLORS.black,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius: RFValue(5),
                    marginBottom: RFValue(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        {
                          width: '55%',
                          height: 40,
                          backgroundColor: '#rgb(36 36 36)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Font Size</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowFont(!showFont);
                      }}>
                      <Text style={styles.buttonText}>{Font || 'Stander'}</Text>
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
                          setShowFont(!showFont);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showFont ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Fonts.map((item, index) => (
                        <>
                          <TouchableOpacity
                            style={{
                              marginTop: RFValue(10),
                              width: '90%',
                              alignSelf: 'center',
                              backgroundColor: COLORS.darkGray,
                              justifyContent: 'center',
                              borderRadius: RFValue(5),
                              padding: RFValue(10),
                              paddingHorizontal: RFValue(30),
                              borderWidth: Font == item.title ? 1 : 0,
                              borderColor:
                                Font == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setFont(item.title);
                              setShowFont(false);
                            }}>
                            <Text
                              style={{
                                ...FONTS.h4,
                                color: COLORS.white,
                                fontFamily: FONTS.fontFamilyMedium,
                              }}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        </>
                      ))}
                    </View>
                  ) : null}
                </View>

                {/* Font Size */}

                <View
                  style={{
                    width: '100%',
                    padding: RFValue(8),
                    backgroundColor: COLORS.black,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius: RFValue(5),
                    marginBottom: RFValue(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        {
                          width: '55%',
                          height: 40,
                          backgroundColor: '#rgb(36 36 36)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Page Zoom</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowZoom(!showZoom);
                      }}>
                      <Text style={styles.buttonText}>{Zoom || '50%'}</Text>
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
                          setShowFont(!showZoom);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showZoom ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {ZoomList.map((item, index) => (
                        <>
                          <TouchableOpacity
                            style={{
                              marginTop: RFValue(10),
                              width: '90%',
                              alignSelf: 'center',
                              backgroundColor: COLORS.darkGray,
                              justifyContent: 'center',
                              borderRadius: RFValue(5),
                              padding: RFValue(10),
                              paddingHorizontal: RFValue(30),
                              borderWidth: Zoom == item.title ? 1 : 0,
                              borderColor:
                                Zoom == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setZoom(item.title);
                              setShowZoom(false);
                            }}>
                            <Text
                              style={{
                                ...FONTS.h4,
                                color: COLORS.white,
                                fontFamily: FONTS.fontFamilyMedium,
                              }}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        </>
                      ))}
                    </View>
                  ) : null}
                </View>

                {/*  Chat wallpaper */}

                <View
                  style={{
                    width: '100%',
                    padding: RFValue(8),
                    backgroundColor: COLORS.black,
                    borderWidth: 1,
                    borderColor: COLORS.gray,
                    borderRadius: RFValue(5),
                    marginBottom: RFValue(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        {
                          width: '55%',
                          height: 40,
                          backgroundColor: '#rgb(36 36 36)',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Chat Wallpaper</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowwallpaper(!showwallpaper);
                      }}>
                      <Text style={styles.buttonText}>
                        {wallpaper || 'stander'}
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
                          setShowwallpaper(!showwallpaper);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showwallpaper ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {wallpaperList.map((item, index) => (
                        <>
                          <TouchableOpacity
                            style={{
                              marginTop: RFValue(10),
                              width: '90%',
                              alignSelf: 'center',
                              backgroundColor: COLORS.darkGray,
                              justifyContent: 'center',
                              borderRadius: RFValue(5),
                              padding: RFValue(10),
                              paddingHorizontal: RFValue(30),
                              borderWidth: wallpaper == item.title ? 1 : 0,
                              borderColor:
                                wallpaper == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setwallpaper(item.title);
                              setShowwallpaper(false);
                            }}>
                            <Text
                              style={{
                                ...FONTS.h4,
                                color: COLORS.white,
                                fontFamily: FONTS.fontFamilyMedium,
                              }}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        </>
                      ))}
                    </View>
                  ) : null}
                </View>
              </>











            ) : null}
          </View>
        </ScrollView>
        {/* end of Appearance */}





































       
      </View>
    </>
  );
};
export default Settings;

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
    width: '42%',
    height: 40,
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
