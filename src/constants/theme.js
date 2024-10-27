import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#00b3ff',
  primaryDark: '#298204' + '20',
  primaryLite: '#298204' + '60',
  third: '#5796cc',
  Secondary: '#cfaa06',
  black: '#000000',
  green: '#60c5a8',
  darkBlue: '#111A2C',
  darkGray: '#262626',
  darkGray2: '#595858',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#ECF0F3',
  gray4: '#BBBDC1',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
  white: '#FFFFFF',
  white2: '#FBFBFB',
  darkOverlayColor: 'rgba(0, 0, 0, 0.4)',
  darkOverlayColor2: 'rgba(0, 0, 0, 0.8)',
  primaryAlpha: 'rgba(99, 122, 255, 0.15)',
  greenAlpha: 'rgba(96, 197, 168, 0.15)',
  redAlpha: 'rgba(255, 84, 84, 0.15)',
  red: '#ba4343',
  redAlpha: 'rgba(255, 84, 84, 0.15)',
  greenAlpha: 'rgba(96, 197, 168, 0.15)',
  purpleAlpha: 'rgba(146, 6, 228, 0.15)',
  orange:'#FDAF46',
  ggray:'#9e9e9e',
  heart1:'#FF5B5B',
  heart2:'#A44C4A',
  darkyellow:'#b0792a',
  lightGreen:'#4BA496',
  babyBlue:'#5796CC',
  basicREd:'#EB1C24',
  secondaryRed:'',
  beige : 'rgba(245, 236, 176, 0.4)',
  // bags background colors
  bag1Bg: '#ea7a72',
  bag2Bg: '#c2c5d1',
  bag3Bg: '#82a7c9',
  bag4Bg: '#d49d8f',
  bag5Bg: '#ccd9c6',
  bag6Bg: '#767676',
  bag7Bg: '#d1c8c3',
  bag8Bg: '#dca47f',
  bag9Bg: '#eb849c',
  bag10Bg: '#979dc1',
  bag11Bg: '#c7d3c0',
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  // Error
  error: 'rgba(246, 86, 93, 1)',
  error80: 'rgba(246, 86, 93, 0.8)',
  error60: 'rgba(246, 86, 93, 0.6)',
  error20: 'rgba(246, 86, 93, 0.2)',
  error08: 'rgba(246, 86, 93, 0.08)',

  // Primary
  // primary: 'rgba(78, 85, 175, 1)',
  // primary80: 'rgba(78, 85, 175, 0.8)',
  // primary60: 'rgba(78, 85, 175, 0.6)',
  // primary20: 'rgba(78, 85, 175, 0.2)',
  // primary08: 'rgba(78, 85, 175, 0.08)',

  // Secondary
  secondary: 'rgba(161, 219, 245, 1)',
  secondary80: 'rgba(161, 219, 245, 0.8)',
  secondary60: 'rgba(161, 219, 245, 0.6)',
  secondary20: 'rgba(161, 219, 245, 0.2)',
  secondary08: 'rgba(161, 219, 245, 0.08)',

  // Success
  success: 'rgba(253, 212, 70, 1)',
  success80: 'rgba(253, 212, 70, 0.8)',
  success60: 'rgba(253, 212, 70, 0.6)',
  success20: 'rgba(253, 212, 70, 0.2)',
  success08: 'rgba(253, 212, 70, 0.08)',

  // Dark
  dark: 'rgba(13, 15, 35, 1)',
  dark80: 'rgba(13, 15, 35, 0.8)',
  dark60: 'rgba(13, 15, 35, 0.6)',
  dark20: 'rgba(13, 15, 35, 0.2)',
  dark08: 'rgba(13, 15, 35, 0.08)',

  // Grey
  grey: 'rgba(160, 161, 180, 1)',
  grey80: 'rgba(160, 161, 180, 0.8)',
  grey60: 'rgba(160, 161, 180, 0.6)',
  grey20: 'rgba(160, 161, 180, 0.2)',
  grey08: 'rgba(160, 161, 180, 0.08)',


  // Light Grey
  lightGrey: 'rgba(247, 247, 247, 1)',
  lightGrey80: 'rgba(247, 247, 247, 0.8)',
  lightGrey60: 'rgba(247, 247, 247, 0.6)',
  lightGrey20: 'rgba(247, 247, 247, 0.2)',
  lightGrey08: 'rgba(247, 247, 247, 0.08)',

  // Light
  light: 'rgba(255, 255, 255, 1)',
  light80: 'rgba(255, 255, 255, 0.8)',
  light60: 'rgba(255, 255, 255, 0.6)',
  light20: 'rgba(255, 255, 255, 0.2)',
  light08: 'rgba(255, 255, 255, 0.08)',

  // Support 1
  support1: 'rgba(110, 162, 255, 1)',
  support1_08: 'rgba(110, 162, 255, 0.08)',

  // Support 2
  support2: 'rgba(249, 161, 218, 1)',
  support2_08: 'rgba(249, 161, 218, 0.08)',

  // Support 3
  support3: 'rgba(0, 210, 224, 1)',
  support3_08: 'rgba(0, 210, 224, 0.08)',

  // Support 4
  support4: 'rgba(255, 132, 13, 1)',
  support4_08: 'rgba(255, 132, 13, 0.08)',

  // Support 5
  support5: 'rgba(123, 96, 238, 1)',
  support5_08: 'rgba(123, 96, 238, 0.08)',

  // Shadow
  shadow: 'rgba(138, 149, 158, 1)',
  shadow08: 'rgba(138, 149, 158, 0.08)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6:10,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 13,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h1,
  },
  body3: {fontFamily: 'TitilliumWeb-Black', fontSize: SIZES.body3},
  h2: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h2,
    // lineHeight: 30,
  },
  h3: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h3,
    // lineHeight: 22,
  },
  h3_italic:{
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h3,
fontStyle:'italic'
  },
  h4: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h4,
    // lineHeight: 22,
  },
  h5: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h5,
    // lineHeight: 22,
  },
  h6: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.h6,
    // lineHeight: 22,
  },
  body1: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.body1,
    // lineHeight: 36,
  },
  body2: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.body2,
    // lineHeight: 30,
  },
  body3: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.body3,
    // lineHeight: 22,
  },
  body4: {
    fontFamily: 'FilsonProLiTitilliumWeb-Blackght',
    fontSize: SIZES.body4,

    // lineHeight: 22,
  },
  body5: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.body5,
    // lineHeight: 22,
  },
  body6: {
    fontFamily: 'TitilliumWeb-Black',
    fontSize: SIZES.body6,
    // lineHeight: 22,
  },
  fontFamilyRegular: 'TitilliumWeb-Black',
  fontFamilyLight: 'TitilliumWeb-ExtraLight',
  fontFamilyBold: 'TitilliumWeb-Bold',
  fontFamilyMedium: 'TitilliumWeb-SemiBold',
  fontFamilyItalic: 'TitilliumWeb-Italic',



};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
