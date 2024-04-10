import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: (marginLeftIn, marginRightIn) => ({
    width: 40,
    height: 40,
    marginLeft: marginLeftIn,
    marginRight: marginRightIn,
    justifyContent: "center"
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    tintColor: "white"
  }),
});

export default styles;