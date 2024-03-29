import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from "./heart.style";
import { useRouter } from 'expo-router';

const HeartBtn = ({ iconUrl, dimension, x, handlePress }) => {
  const router = useRouter();
  const handleButtonPress = (page) => {
    console.log(`Button ${page} pressed`);
    router.push(`/create/${page}`)
  };
  return (
    <TouchableOpacity style={styles.btnContainer(x)} onPress={() => handleButtonPress("Favourites")}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default HeartBtn;