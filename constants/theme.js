const COLORS = {
  colorPrimary: '#FE9D5C',
  colorPrimaryDark: '#F25C26',
  colorAccent: '#FA7443',
  light_gray: '#D3D3D3',
  grey: '#9F9F9F',
  lighter_gray: '#EDEDED',
  dark_purple: '#690339',
  colorGray: '#607D8B',
  black: '#000000',
  red: '#FF0000',
  white: '#FFFFFF',
  colorBlackAlt: '#2B303B',
  colorBlackAltLight: '#3E4553',
  colorLightGrey: '#EFEFEF',
  colorDarkGrey: '#5F6267',
  colorBluishGrey: '#D2DDF3',
  colorBackground_black: '#0A0808',
  windowBackground_light: '#F4F4F6',
  windowBackground_dark: '#33343B',
  dot_inactive: 'rgba(77, 245, 124, 0)'
};

const TOPROUND = {
  width: 200,
  height: 100,
  borderTopLeftRadius: 20, // Adjust as per your requirement
  borderTopRightRadius: 20, // Adjust as per your requirement
}

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};
  
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};
  
  export { COLORS, FONT, SIZES, SHADOWS, TOPROUND};