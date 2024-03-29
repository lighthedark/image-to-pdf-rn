import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from '../recentlyused/RecentlyUsedContext';
import styles from './home.style';
import { icons, SIZES } from '../../../constants';

const MoreOptions = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    addFeature(buttonNumber);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text style={styles.header}>More Options</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("Remove Pages")}>
          <Text style={styles.buttonText}>Remove Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("Reorder Pages")}>
          <Text style={styles.buttonText}>Reorder Pages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("Extract Images")}>
          <Text style={styles.buttonText}>Extract Images</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("PDF to Images")}>
          <Text style={styles.buttonText}>PDF to Images</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("Extract Text")}>
          <Text style={styles.buttonText}>Extract Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("ZIP to PDF")}>
          <Text style={styles.buttonText}>ZIP to PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MoreOptions