import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, marginLeft, marginRight, handlePress, visible=true }) => {

  if(!visible)
    return null;

  return (
    <TouchableOpacity style={styles.btnContainer(marginLeft, marginRight)} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;