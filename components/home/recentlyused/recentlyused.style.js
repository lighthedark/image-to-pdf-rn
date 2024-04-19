import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from "../../../constants";

const windowWidth = Dimensions.get('window').width;
const buttonWidth = (windowWidth - 52) / 3; // Subtracting padding
const buttonWidth2 = (windowWidth - 40) / 2; // Subtracting padding
const buttonWidth3 = (windowWidth - 52) / 3; // Subtracting padding

const buttonHeight = 120;
const buttonRadius = 10;
const leftMargin = 15;
const rightMargin = 15;
const bottomMargin = 10;
const middleMargin = 12;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: SIZES.medium,
    color: COLORS.grey,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    marginBottom: 0
  },
  buttonL: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth,
    height: 140,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 12,
    marginRight: 12
  },
  buttonC: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth,
    height: 140,
    borderRadius: 10,
    marginBottom: 12,
    marginRight: 12
  },
  buttonR: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth,
    height: 140,
    marginRight: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: SIZES.small,
    color: COLORS.black,
    textAlign: 'center'
  },
  buttonL2: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth2,  // Adjust the width to fit two buttons across
    height: buttonHeight,
    borderRadius: buttonRadius,
    marginLeft: leftMargin,
    marginBottom: bottomMargin,
    marginRight: middleMargin
  },
  buttonC2: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth2,  // Adjust the width to fit two buttons across
    height: buttonHeight,
    borderRadius: buttonRadius,
    marginBottom: bottomMargin,
    marginRight: rightMargin
  },
  // Button style for 3 across
  buttonL3: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth3,
    height: buttonHeight,
    borderRadius: buttonRadius,
    marginLeft: leftMargin,
    marginBottom: bottomMargin,
    marginRight: middleMargin
  },
  buttonC3: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth3,
    height: buttonHeight,
    borderRadius: buttonRadius,
    marginBottom: bottomMargin,
    marginRight: middleMargin
  },
  buttonR3: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonWidth3,
    height: buttonHeight,
    borderRadius: buttonRadius,
    marginBottom: bottomMargin,
    marginRight: rightMargin
  }
});

export default styles;

