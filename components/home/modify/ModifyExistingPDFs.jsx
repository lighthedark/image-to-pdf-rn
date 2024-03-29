import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from '../recentlyused/RecentlyUsedContext';
import styles from './modifyexistingpdfs.style';
import { icons, SIZES } from '../../../constants';

const ModifyExistingPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    addFeature(buttonNumber);
    // Add your logic for handling button press here
  };

  return (
    <View>
      <Text style={styles.header}>Modify Existing PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonTL} onPress={() => handleButtonPress("Merge PDF")}>
          <Text style={styles.buttonText}>Merge PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTR} onPress={() => handleButtonPress("Split PDF")}>
          <Text style={styles.buttonText}>Split PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("Invert PDF")}>
          <Text style={styles.buttonText}>Invert PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC} onPress={() => handleButtonPress("Compress PDF")}>
          <Text style={styles.buttonText}>Compress PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("Remove Duplicate")}>
          <Text style={styles.buttonText}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default ModifyExistingPDFs