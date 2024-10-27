import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  CheckBox,
  Dimensions,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {COLORS, FONTS, Icons, icons, images} from '../../../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import { Checkbox } from 'react-native-paper';
import moment from 'moment';

const Settings = ({navigation}) => {
  const [options, setOptions] = useState([
    {title: 'Appearance', show: true},
    {title: 'Adjustment', show: false},
    {title: 'Language', show: false},
    {title: 'Data', show: false},
    {title: 'Notifications', show: false},
    {title: 'Payment', show: false},
    {title: 'Security', show: false},
    {title: 'Privacy', show: false},
  ]);

  const [expiryDate, setExpiryDate] = useState('');
  const [status, setStatus] = useState('');
  const [expire, setExpire] = useState('');

  //   const handleCheckExpiry = () => {
  //     const expiryMoment = moment(expiryDate, 'MM/YY', true);

  //     if (!expiryMoment.isValid()) {
  //       setStatus('Invalid date format. Please use MM/YY.');
  //       return;
  //     }

  //     const isExpired = expiryMoment.isBefore(moment(), 'month');
  //     setStatus(isExpired ? "expire" : "valid");

  // status=="expire"?   Alert.alert(
  //         "Expiration Date",
  //         "This Card Is Expire",
  //         [
  //           { text: "Cancel", style: "cancel" },
  //           { text: "OK", onPress: () => console.log("OK Pressed") }
  //         ],
  //         { cancelable: false }
  //       )

  // :(null);

  //   };

  const handleCheckExpiry = () => {
    const expiryMoment = moment(expiryDate, 'MM/YY', true);

    if (!expiryMoment.isValid()) {
      setStatus('Invalid date format. Please use MM/YY.');
      setExpire('Expire');
      Alert.alert('Error', 'Invalid date format. Please use MM/YY.');
      return;
    }

    const isExpired = expiryMoment.isBefore(moment(), 'month');
    const newStatus = isExpired ? 'expire' : 'valid';
    setStatus(newStatus);

    if (expire === 'expire') {
      // Alert.alert(
      //   "Expiration Date",
      //   "This card is expired.",
      //   [
      //     { text: "Cancel", style: "cancel" },
      //     { text: "OK", onPress: () => console.log("OK Pressed") }
      //   ],
      //   { cancelable: false }
      // );

      console.log(newStatus);
    }
  };

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

  const [SearchCheck, setSearchChecked] = useState(false);
  const [ModeCheck, setModeChecked] = useState(false);
  const [BackCheck, setBackChecked] = useState(false);
  const [NextCheck, setNextChecked] = useState(false);
  const [HomeCheck, setHomeChecked] = useState(false);
  const [NotificationsCheck, setNotificationsChecked] = useState(false);
  const [GalleriesCheck, setGalleriessChecked] = useState(false);
  const [CasesCheck, setCasesChecked] = useState(false);
  const [E_booksCheck, setE_booksChecked] = useState(false);
  const [ReportCheck, setReportChecked] = useState(false);
  const [GuidelinesCheck, setGuidelinesChecked] = useState(false);
  const [ConsultCheck, setConsultChecked] = useState(false);
  const [LibraryCheck, setLibraryChecked] = useState(false);
  const [CoursesCheck, setCoursesChecked] = useState(false);
  const [LinksCheck, setLinksChecked] = useState(false);
  const [ExamsCheck, setExamsChecked] = useState(false);
  const [AgendaCheck, setAgendaChecked] = useState(false);
  const [WebinarsCheck, setWebinarsChecked] = useState(false);

  const [AppLanguageList, setAppLanguageList] = useState([
    {title: 'English'},
    {title: 'Arabic'},
  ]);
  const [AppLanguage, setAppLanguage] = useState('');
  const [showAppLanguage, setShowAppLanguage] = useState(false);

  const [Content_languageList, setContent_languageList] = useState([
    {title: 'English'},
    {title: 'Arabic'},
  ]);
  const [Content_language, setContent_language] = useState('');
  const [showContent_language, setShowContent_language] = useState(false);

  const [PhotosList, setPhotosList] = useState([
    {title: 'Allowed'},
    {title: 'Not Allowed'},
  ]);
  const [Photos, setPhotos] = useState('');
  const [showPhotos, setShowPhotos] = useState(false);

  const [CameraList, setCameraList] = useState([
    {title: 'Allowed'},
    {title: 'Not Allowed'},
  ]);
  const [Camera, setCamera] = useState('');
  const [showCamera, setShowCamera] = useState(false);

  const [LocationList, setLocationList] = useState([
    {title: 'Allowed'},
    {title: 'Not Allowed'},
  ]);
  const [Location, setLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  const [MicrophoneList, setMicrophoneList] = useState([
    {title: 'Allowed'},
    {title: 'Not Allowed'},
  ]);
  const [Microphone, setMicrophone] = useState('');
  const [showMicrophone, setShowMicrophone] = useState(false);

  Media_upload_quality;

  const [Media_upload_qualityList, setMedia_upload_qualityList] = useState([
    {title: 'Standard'},
    {title: 'Optimized'},
    {title: 'Low'},
  ]);
  const [Media_upload_quality, setMedia_upload_quality] = useState('');
  const [showMedia_upload_quality, setShowMedia_upload_quality] =
    useState(false);

  const [AutoplayList, setAutoplayList] = useState([
    {title: 'Wi-Fi and cellular'},
    {title: 'Wi-Fi'},
    {title: 'Cellular'},
  ]);
  const [Autoplay, setAutoplay] = useState('');
  const [showAutoplay, setShowAutoplay] = useState(false);

  const [Media_auto_downloadList, setMedia_auto_downloadList] = useState([
    {title: 'Wi-Fi and cellular'},
    {title: 'Wi-Fi'},
    {title: 'Cellular'},
  ]);
  const [Media_auto_download, setMedia_auto_download] = useState('');
  const [showMedia_auto_download, setShowMedia_auto_download] = useState(false);

  const [Videos_qualityList, setVideos_qualityList] = useState([
    {title: 'Standard'},
    {title: 'Optimized'},
    {title: 'Low'},
  ]);
  const [Videos_quality, setVideos_quality] = useState('');
  const [showVideos_quality, setShowVideos_quality] = useState(false);

  const [AllowNotificationsList, setAllowNotificationsList] = useState([
    {title: 'Allowed'},
    {title: 'Not Allowed'},
  ]);
  const [AllowNotifications, setAllowNotifications] = useState('');
  const [showAllowNotifications, setShowAllowNotifications] = useState(false);

  const [SoundsList, setSoundsList] = useState([{title: 'Yes'}, {title: 'No'}]);
  const [Sounds, setSounds] = useState('');
  const [showSounds, setShowSounds] = useState(false);

  const [BadgesList, setBadgesList] = useState([{title: 'Yes'}, {title: 'No'}]);
  const [Badges, setBadges] = useState('');
  const [showBadges, setShowBadges] = useState(false);

  const [Add_payment_methodList, setAdd_payment_methodList] = useState([
    {title: ' Debit card'},
    {title: ' Credit card'},
  ]);
  const [Add_payment_method, setAdd_payment_method] = useState('');
  const [showAdd_payment_method, setShowAdd_payment_method] = useState(false);

  const [cardNumber, setcardNumber] = useState('');
  const [expiredate, setexpiredate] = useState('');
  const [CVV, setCVV] = useState('');
  const [nameOfCard, setnameOfCard] = useState('');

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
            paddingBottom: 50,
          }}>
          <View
            style={{
              // width:Dimensions.get('window').width,
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: RFValue(5),
              borderBottomWidth: 1,
              borderColor: COLORS.darkyellow,
              marginBottom: RFValue(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  borderWidth: 1,
                  borderColor: item.show ? COLORS.darkyellow : COLORS.darkGray,
                  backgroundColor: COLORS.black,
                  borderRadius: RFValue(5),
                  paddingVertical: RFValue(7),
                  paddingHorizontal: RFValue(11),
                  alignItems: 'center',
                  marginLeft: RFValue(5),
                  marginBottom: RFValue(10),
                  justifyContent: 'center',
                }}
                onPress={() => {
                  handleOptionPress(item, index);


                  // console.log(item.show);

                  console.log(item.show);

                }}>
                <Text
                  style={{
                    ...FONTS.h5,
                    color: COLORS.white,
                    fontFamily: FONTS.fontFamilyMedium,
                    // marginRight: RFValue(5),
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{padding: RFValue(10), marginBottom: 50}}>
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
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
            ) : selectedOption == 'Adjustment' ? (
              <>
                {/* Adjustment */}
                {/* mode */}
                <View style={styles.containerForTwoText}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '58%',
                        height: 30,
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>
                        Upper tool bar adjustment
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '38%',
                        height: 30,
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>choose 2</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.buttonsContainer}>
                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setSearchChecked(!SearchCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Search</Text>
                        </View>
                        {SearchCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setModeChecked(!ModeCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Mode</Text>
                        </View>
                        {ModeCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setBackChecked(!BackCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Back</Text>
                        </View>
                        {BackCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setHomeChecked(!HomeCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Home</Text>
                        </View>
                        {HomeCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setNextChecked(!NextCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Next</Text>
                        </View>
                        {NextCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setNotificationsChecked(!NotificationsCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>
                            Notifications
                          </Text>
                        </View>
                        {NotificationsCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.buttonsContainer}>
                  <View style={styles.containerForTwoText}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: '58%',
                          height: 30,
                          backgroundColor: COLORS.black,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                          borderWidth: 0.5,
                          borderColor: COLORS.gray,
                        }}>
                        <Text style={{color: '#fff'}}>
                          Lower tool bar adjustment
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '38%',
                          height: 30,
                          backgroundColor: COLORS.black,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                          borderWidth: 0.5,
                          borderColor: COLORS.gray,
                        }}>
                        <Text style={{color: '#fff'}}>choose 2</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setGalleriessChecked(!GalleriesCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Galleries</Text>
                        </View>
                        {GalleriesCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setCasesChecked(!CasesCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Cases</Text>
                        </View>
                        {CasesCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setGuidelinesChecked(!GuidelinesCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Guidelines</Text>
                        </View>
                        {GuidelinesCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setConsultChecked(!ConsultCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Consult</Text>
                        </View>
                        {ConsultCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setLibraryChecked(!LibraryCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Library</Text>
                        </View>
                        {LibraryCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setCoursesChecked(!CoursesCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Courses</Text>
                        </View>
                        {CoursesCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setLinksChecked(!LinksCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Links</Text>
                        </View>
                        {LinksCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setExamsChecked(!ExamsCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Exams</Text>
                        </View>
                        {ExamsCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.containerForTwoGrayButton}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setAgendaChecked(!AgendaCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Agenda</Text>
                        </View>
                        {AgendaCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.grayButton}
                        onPress={() => {
                          setWebinarsChecked(!WebinarsCheck);
                        }}>
                        <View style={styles.TextContainerOfButton}>
                          <Text style={{color: COLORS.light}}>Webinars</Text>
                        </View>
                        {WebinarsCheck ? (
                          <View style={styles.checkIconImageContainer}>
                            <Image
                              resizeMode="center"
                              style={styles.checkIconImage}
                              source={icons.check}
                            />
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            ) : selectedOption == 'Language' ? (
              <>
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
                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>App Language</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowAppLanguage(!showAppLanguage);
                      }}>
                      <Text style={styles.buttonText}>
                        {AppLanguage || 'English'}
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
                          setShowAppLanguage(!showAppLanguage);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showAppLanguage ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {AppLanguageList.map((item, index) => (
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
                                AppLanguage == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setAppLanguage(item.title);
                              setShowAppLanguage(false);
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>App Language</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowContent_language(!showContent_language);
                      }}>
                      <Text style={styles.buttonText}>
                        {Content_language || 'English'}
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
                          setShowContent_language(!showContent_language);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showContent_language ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Content_languageList.map((item, index) => (
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
                                Content_language == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setContent_language(item.title);
                              setShowContent_language(false);
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
            ) : selectedOption == 'Data' ? (
              <>
                <View style={styles.containerForTwoText}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '58%',
                        height: 30,
                        backgroundColor: COLORS.grey80,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderRadius: RFValue(5),
                        paddingLeft: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>Permissions</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.StaticTextContainer}>
                      <Text style={{color: '#fff'}}>Photos and Videos</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowPhotos(!showPhotos);
                      }}>
                      <Text style={styles.buttonText}>
                        {Photos || 'Allowed'}
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
                          setShowPhotos(!showPhotos);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showPhotos ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {PhotosList.map((item, index) => (
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
                              borderWidth: Photos == item.title ? 1 : 0,
                              borderColor:
                                Photos == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setPhotos(item.title);
                              setShowPhotos(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Camera</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowCamera(!showCamera);
                      }}>
                      <Text style={styles.buttonText}>
                        {Camera || 'Not Allowed'}
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
                          setShowCamera(!showCamera);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showCamera ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {CameraList.map((item, index) => (
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
                              borderWidth: Camera == item.title ? 1 : 0,
                              borderColor:
                                Camera == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setCamera(item.title);
                              setShowCamera(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Location Services</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowLocation(!showLocation);
                      }}>
                      <Text style={styles.buttonText}>
                        {Location || 'Allowed'}
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
                          setShowLocation(!showLocation);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showLocation ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {LocationList.map((item, index) => (
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
                              borderWidth: Location == item.title ? 1 : 0,
                              borderColor:
                                Location == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setLocation(item.title);
                              setShowLocation(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Microphone</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowMicrophone(!showMicrophone);
                      }}>
                      <Text style={styles.buttonText}>
                        {Microphone || 'Allowed'}
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
                          setShowMicrophone(!showMicrophone);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showMicrophone ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {MicrophoneList.map((item, index) => (
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
                              borderWidth: Microphone == item.title ? 1 : 0,
                              borderColor:
                                Microphone == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setMicrophone(item.title);
                              setShowMicrophone(false);
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

                <View style={styles.containerForTwoText}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '58%',
                        height: 30,
                        backgroundColor: COLORS.grey80,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderRadius: RFValue(5),
                        paddingLeft: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>Media</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Media Upload Quality</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowMedia_upload_quality(!showMedia_upload_quality);
                      }}>
                      <Text style={styles.buttonText}>
                        {Media_upload_quality || 'Standard'}
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
                          setShowMedia_upload_quality(
                            !showMedia_upload_quality,
                          );
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showMedia_upload_quality ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Media_upload_qualityList.map((item, index) => (
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
                              borderWidth:
                                Media_upload_quality == item.title ? 1 : 0,
                              borderColor:
                                Media_upload_quality == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setMedia_upload_quality(item.title);
                              setShowMedia_upload_quality(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Media Auto Download</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowMedia_auto_download(!showMedia_auto_download);
                      }}>
                      <Text style={styles.buttonText}>
                        {Media_auto_download || 'Wi-Fi and cellular'}
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
                          setShowMedia_auto_download(!showMedia_auto_download);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showMedia_auto_download ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Media_auto_downloadList.map((item, index) => (
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
                              borderWidth:
                                Media_auto_download == item.title ? 1 : 0,
                              borderColor:
                                Media_auto_download == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setMedia_auto_download(item.title);
                              setShowMedia_auto_download(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.StaticTextContainer}>
                      <Text style={{color: '#fff'}}>Autoplay</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowAutoplay(!showAutoplay);
                      }}>
                      <Text style={styles.buttonText}>
                        {Autoplay || 'Wi-Fi and cellular'}
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
                          setShowAutoplay(!showAutoplay);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showAutoplay ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {AutoplayList.map((item, index) => (
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
                              borderWidth: Autoplay == item.title ? 1 : 0,
                              borderColor:
                                Autoplay == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setAutoplay(item.title);
                              setShowAutoplay(false);
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

                <View style={styles.StaticTextAndDropDownContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={
                        styles.StaticTextContainer
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Videos Quality</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowVideos_quality(!showVideos_quality);
                      }}>
                      <Text style={styles.buttonText}>
                        {Videos_quality || 'Optimized'}
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
                          setShowVideos_quality(!showVideos_quality);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showVideos_quality ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Videos_qualityList.map((item, index) => (
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
                              borderWidth: Videos_quality == item.title ? 1 : 0,
                              borderColor:
                                Videos_quality == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setVideos_quality(item.title);
                              setShowVideos_quality(false);
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
            ) : selectedOption == 'Notifications' ? (
              <>
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
                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Allow Notifications</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowAllowNotifications(!showAllowNotifications);
                      }}>
                      <Text style={styles.buttonText}>
                        {AllowNotifications || 'Allowed'}
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
                          setShowAllowNotifications(!showAllowNotifications);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showAllowNotifications ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {AllowNotificationsList.map((item, index) => (
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
                              borderWidth:
                                AllowNotifications == item.title ? 1 : 0,
                              borderColor:
                                AllowNotifications == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setAllowNotifications(item.title);
                              setShowAllowNotifications(false);
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Sounds</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowSounds(!showSounds);
                      }}>
                      <Text style={styles.buttonText}>{Sounds || 'Yes'}</Text>
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
                          setShowSounds(!showSounds);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showSounds ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {SoundsList.map((item, index) => (
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
                              borderWidth: Sounds == item.title ? 1 : 0,
                              borderColor:
                                Sounds == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setSounds(item.title);
                              setShowSounds(false);
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Badges</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowBadges(!showBadges);
                      }}>
                      <Text style={styles.buttonText}>{Badges || 'Yes'}</Text>
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
                          setShowBadges(!showBadges);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showBadges ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {BadgesList.map((item, index) => (
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
                              borderWidth: Badges == item.title ? 1 : 0,
                              borderColor:
                                Badges == item.title ? COLORS.darkyellow : null,
                            }}
                            onPress={() => {
                              setBadges(item.title);
                              setShowBadges(false);
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
            ) : selectedOption == 'Payment' ? (
              <>
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
                          //   height: 40,

                          backgroundColor: COLORS.darkGray,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: RFValue(5),
                        }
                        // styles.button
                      }>
                      <Text style={{color: '#fff'}}>Add Payment Method</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        // setModalVisible(true);
                        // setModalType('Job_title'); // Set to 'County' modal
                        setShowAdd_payment_method(!showAdd_payment_method);
                      }}>
                      <Text style={styles.buttonText}>
                        {Add_payment_method || 'Credit/Dept Card'}
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
                          setShowAdd_payment_method(!showAdd_payment_method);
                        }}>
                        <Image
                          style={[styles.dropdownIcon, {}]}
                          source={icons.DOWN}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>

                  {showAdd_payment_method ? (
                    <View
                      style={{
                        marginBottom: RFValue(20),
                      }}>
                      {Add_payment_methodList.map((item, index) => (
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
                              borderWidth:
                                Add_payment_method == item.title ? 1 : 0,
                              borderColor:
                                Add_payment_method == item.title
                                  ? COLORS.darkyellow
                                  : null,
                            }}
                            onPress={() => {
                              setAdd_payment_method(item.title);
                              setShowAdd_payment_method(false);
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

                <View
                  style={[
                    styles.containerForTwoText,
                    {
                      height: RFValue(40),
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '36%',
                        height: '100%',
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>Card Number</Text>
                    </View>

                    <View
                      style={{
                        width: '62%',
                        height: '100%',
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <TextInput
                        keyboardType={'decimal-pad'}
                        style={{color: COLORS.light, height: '100%'}}
                        value={cardNumber}
                        maxLength={16}
                        onChangeText={value => {
                          setcardNumber(value);
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={[
                    styles.containerForTwoText,
                    {
                      // height: RFValue(30),
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '35%',
                        // height: "100%",
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text style={{color: '#fff'}}>Expiration date</Text>
                    </View>

                    <View
                      style={{
                        width: '30%',
                        // height: "100%",
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      {/* <TextInput
                       value={expiredate}
                        onChangeText={(value)=>{
                          setexpiredate(value)
                        }}
                      keyboardType={'decimal-pad'}
                        style={{color: COLORS.light,        
                          paddingVertical:RFValue(3)
                        }}
                      /> */}

                      <TextInput
                        style={{
                          color: COLORS.light,
                          paddingVertical: RFValue(3),
                        }}
                        value={expiryDate}
                        onChangeText={(value)=>{
                          setexpiredate(value)
                        }}
                        placeholder="MM/YY"
                        placeholderTextColor={COLORS.light}
                        keyboardType="numeric"
                        // onBlur={() => handleCheckExpiry}
                      />
                    </View>

                    <View
                      style={{
                        width: '15%',
                        // height: "100%",
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <Text
                        style={{color: '#fff', paddingVertical: RFValue(3)}}>
                        CVV
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '15%',
                        // height: "100%",
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <TextInput
                      value={CVV}
                      onChangeText={(value)=>{
                        setCVV(value)

                      }}
                      maxLength={3}
                        keyboardType={'decimal-pad'}
                        style={{
                          color: COLORS.light,
                          paddingVertical: RFValue(3),
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={[styles.containerForTwoText]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '32%',
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                        // height:RFValue(30),
                      }}>
                      <Text
                        style={{color: '#fff', paddingVertical: RFValue(3)}}>
                        Name on card
                      </Text>
                    </View>

                    <View
                      style={{
                        width: '66%',
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <TextInput
                        value={nameOfCard}
                        onChangeText={value => {
                          setnameOfCard(value);
                        }}
                        scrollEnabled={false}
                        style={{
                          color: COLORS.light,
                          paddingVertical: RFValue(3),
                        }}
                      />
                    </View>
                  </View>
                </View>


                <View style={[styles.containerForTwoText]}>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      // justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '32%',
                        backgroundColor: COLORS.orange,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        // borderWidth: 0.5,
                        // borderColor: COLORS.gray,
                        // height:RFValue(30),
                        paddingVertical:RFValue(5)
                      }}>
                      <Text
                        style={{color: COLORS.black, paddingVertical: RFValue(3),...FONTS.h4}}>
                        Send Card
                      </Text>
                    </View>

                    {/* <View
                      style={{
                        width: '66%',
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: RFValue(5),
                        borderWidth: 0.5,
                        borderColor: COLORS.gray,
                      }}>
                      <TextInput
                        value={nameOfCard}
                        onChangeText={value => {
                          setnameOfCard(value);
                        }}
                        scrollEnabled={false}
                        style={{
                          color: COLORS.light,
                          paddingVertical: RFValue(3),
                        }}
                      />
                    </View> */}
                  </View>
                </View>




              </>
            ) : selectedOption == 'Security' ? (
              <>
                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Acceptance of Terms</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      
                      <Text style={styles.smallTextForSecurity}>By accessing our application, you agree to comply with</Text>
                      <Text style={styles.smallTextForSecurity}>these Terms of Service. If you do not agree, please do not</Text>
                      <Text style={styles.smallTextForSecurity}>use our app.</Text>
                    
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>User Accounts</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                     
                      <Text style={styles.smallTextForSecurity}>You are responsible for maintaining the confidentiality of</Text>
                      <Text style={styles.smallTextForSecurity}>your account and password, and for all activities that occur</Text>
                      <Text style={styles.smallTextForSecurity}>under your account.</Text>
                    
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>User Conduct</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}>You agree not to engage in prohibited activities, including:</Text>
                      <Text style={styles.smallTextForSecurity}>Sharing illegal or harmful content.</Text>
                      <Text style={styles.smallTextForSecurity}>Harassing or abusing other users.</Text>
                      <Text style={styles.smallTextForSecurity}>Impersonating any person or entity.</Text>
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}> Content Ownership and Responsibility</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}>You retain ownership of the content you upload. However,</Text>
                      <Text style={styles.smallTextForSecurity}>by using our app, you grant us a license to use, display, and</Text>
                      <Text style={styles.smallTextForSecurity}>share your content as needed to operate our services. </Text>
                      <Text style={styles.smallTextForSecurity}>Impersonating any person or entity.</Text>
                    
                    </View>
                </View>





                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Termination</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}>We reserve the right to suspend or terminate your account</Text>
                      <Text style={styles.smallTextForSecurity}>for violations of these Terms</Text>
                    </View>
                </View>









                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Information We Collect</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      
                      <Text style={styles.smallTextForSecurity}> Personal Information: When you create an account, you
 may provide us with personal details such as your
 name, email address, phone number, date of birth, and
 profile picture.</Text>
                      <Text style={styles.smallTextForSecurity}> Content You Share: Any photos, videos, or messages
                      you upload or share within the app.</Text>
                      <Text style={styles.smallTextForSecurity}> Usage Data: We automatically collect information about
 your activities in the app, including your interaction with
 content, features accessed, and log data (e.g., IP
 address, device information).</Text>
                    
                    </View>
                </View>







                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Data Sharing</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      
                      <Text style={styles.smallTextForSecurity}> We do not sell or rent your personal information to third
 parties. We may share your information in the following
 situations:</Text>
                      <Text style={styles.smallTextForSecurity}> With your consent or at your direction.</Text>
                      <Text style={styles.smallTextForSecurity}> With service providers and partners who assist us in
                      delivering our services.</Text>
                      <Text style={styles.smallTextForSecurity}> As required by law or to protect our rights.</Text>
                    
                    </View>
                </View>






                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}> How We Use Your Information</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      
                      <Text style={styles.smallTextForSecurity}> To provide, maintain, and improve our services.</Text>
                      <Text style={styles.smallTextForSecurity}>  To communicate with you, including sending updates
                      and notifications.</Text>
                      <Text style={styles.smallTextForSecurity}> To analyze usage and trends to enhance user
                      experience.</Text>
                    
                    </View>
                </View>







              </>
            ) : selectedOption == 'Privacy' ? (
              <>
                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Introduction</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      
                      <Text style={styles.smallTextForSecurity}> We value your privacy and take our responsibility to protect</Text>
                      <Text style={styles.smallTextForSecurity}> your personal information seriously. This Privacy Policy</Text>
                      <Text style={styles.smallTextForSecurity}> explains how we collect, use, share, and protect your</Text>
                      <Text style={styles.smallTextForSecurity}> information when you use our application. </Text>
                    
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>User Controls</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                     
                      <Text style={styles.smallTextForSecurity}> We implement robust security measures to protect your</Text>
                      <Text style={styles.smallTextForSecurity}>information from unauthorized access or disclosure.</Text>
                    
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>User Controls</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}> You have the right to access, modify, or delete your</Text>
                      <Text style={styles.smallTextForSecurity}> personal information. You can manage your privacy</Text>
                      <Text style={styles.smallTextForSecurity}>settings and permissions within the app.</Text>
                    </View>
                </View>



                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Security</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}> We implement robust security measures to protect your</Text>
                      <Text style={styles.smallTextForSecurity}> information from unauthorized access or disclosure.</Text>

                    
                    </View>
                </View>





                <View
                  style={styles.TextContainerForSecurity}>
                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.headerTextOfSecurity}>Changes to This Policy</Text>
                    </View>

                  <View
                    style={{
                      paddingVertical: RFValue(5),
                    }}>
                      <Text style={styles.smallTextForSecurity}> We may update our Privacy Policy from time to time. We</Text>
                      <Text style={styles.smallTextForSecurity}>will notify you of any changes by updating the effective</Text>
                      <Text style={styles.smallTextForSecurity}>date at the top of this page.</Text>
                    </View>
                </View>



              </>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Settings;

const styles = StyleSheet.create({
  TextContainerForSecurity:{
    width: "100%",
    backgroundColor: COLORS.black,
    paddingHorizontal: RFValue(5),
    borderRadius:RFValue(5),
    borderWidth:.3,
    borderColor:COLORS.orange,
    marginBottom:RFValue(10)
  },
  headerTextOfSecurity:{ ...FONTS.h3,
    color: COLORS.Secondary,
    fontFamily: FONTS.fontFamilyMedium,
    marginRight: RFValue(5),
  },
    smallTextForSecurity:{ ...FONTS.body6,
      color: COLORS.light,
      fontFamily: FONTS.fontFamilyLight,
      marginRight: RFValue(5)
    },
  StaticTextAndDropDownContainer: {
    width: '100%',
    padding: RFValue(8),
    backgroundColor: COLORS.black,
    // borderWidth: 1,
    // borderColor: COLORS.gray,
    borderRadius: RFValue(5),
    marginBottom: RFValue(10),
  },
  StaticTextContainer: {
    width: '55%',
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: RFValue(5),
  },

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor:'#ff0',
    marginBottom: RFValue(50),
  },
  containerForTwoText: {
    width: '100%',
    backgroundColor: COLORS.black,
    borderRadius: RFValue(2),
    marginBottom: RFValue(10),
  },
  containerForTwoGrayButton: {
    width: '95%',
    padding: RFValue(2),
    backgroundColor: COLORS.black,
    // borderWidth: 1,
    // borderColor: COLORS.gray,
    borderRadius: RFValue(5),
    // marginBottom: RFValue(5),
    alignSelf: 'center',
  },
  grayButton: {
    width: '49%',
    height: RFValue(40),
    backgroundColor: COLORS.darkGray2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: RFValue(10),
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    borderRadius: RFValue(3),
    marginBottom: RFValue(0),
  },
  checkIconImage: {
    width: '75%',
    height: '75%',
    tintColor: COLORS.Secondary,
  },
  checkIconImageContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerOfButton: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RFValue(10),
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
    // marginBottom: RFValue(10),
    width: '42%',
    //   height: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonText: {
    color: COLORS.white,
    ...FONTS.h5,
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
