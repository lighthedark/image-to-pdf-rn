import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: (x) => ({
    width: 40,
    height: 40,
    right: x,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension
  }),
});

export default styles;