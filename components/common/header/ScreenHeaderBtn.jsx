import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, marginLeft, marginRight, handlePress, visible=true, btn_disable=false }) => {

  if(!visible)
    return null;

  return (
    <TouchableOpacity 
      style={styles.btnContainer(marginLeft, marginRight)} 
      onPress={handlePress}
      disabled={btn_disable}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;