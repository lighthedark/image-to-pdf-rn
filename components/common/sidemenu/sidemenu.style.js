import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
    menu: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '77%',
      backgroundColor: 'white',
      paddingTop: 30,
      zIndex: 1000
    },
    headerSection: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 15,
      paddingLeft: 10
    },
    headerText: {
      fontSize: SIZES.large,
      fontWeight: 'normal',
      paddingLeft: 10
    },
    headerImage: {
      width: 40,
      height: 40
    },

    buttonSection:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    button: (currentPage) => ({
      paddingRight: currentPage ? 18 : 0,
      marginBottom: 5
    }),
    buttonCurrentPage: (currentPage) => ({
      backgroundColor: currentPage ? COLORS.colorPrimaryLight : 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      height: 43,
      borderTopRightRadius: currentPage ? 30 : 0,
      borderBottomRightRadius: currentPage ? 30 : 0
    }),
    buttonSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonImage: (currentPage) => ({
      width: 25,
      height: 25,
      marginLeft: 30,
      tintColor: currentPage ? COLORS.colorPrimary : COLORS.colorDarkGrey
    }),
    buttonText: (currentPage) => ({
      fontSize: SIZES.small,
      paddingLeft: 20,
      fontWeight: '500',
      color: currentPage ? COLORS.colorPrimary : COLORS.colorDarkGrey
    }),

    sectionHeader: {
        fontSize: SIZES.small,
        paddingLeft: 15,
        paddingBottom: 14,
        color: COLORS.colorDarkGrey,
    },
    sectionSpacer: {
      marginVertical: 20,
    },
   
    
    
    buttonImage2: {
      width: 28,
      height: 25,
      marginRight: 6,
    },
    line: {
        marginTop: 10,
        borderColor: COLORS.light_gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

export default styles;