import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from '../recentlyused/RecentlyUsedContext';
import styles from './viewpdfs.style';
import { icons, SIZES } from '../../../constants';

const ViewPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    addFeature(buttonNumber);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text style={styles.header}>View PDFs</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("View File")}>
          <Text style={styles.buttonText}>View Files</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("History")}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ViewPDFs