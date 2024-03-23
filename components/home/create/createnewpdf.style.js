import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT, SIZES } from "../../../constants";

const windowWidth = Dimensions.get('window').width;
const buttonWidth = (windowWidth - 40) / 2; // Subtracting padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: SIZES.medium,
    color: COLORS.grey,
    fontWeight: 'bold',
    marginTop: 30,
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
    fontSize: SIZES.medium,
    color: COLORS.black,
  }
});

export default styles;
