import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from "./home.style";
import { COLORS, icons } from "../../constants"

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
        <TouchableOpacity style={styles.buttonL2} onPress={() => handleButtonPress("Merge PDF")}>
          <Image
            source={icons.merge}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Merge PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR2} onPress={() => handleButtonPress("Split PDF")}>
          <Image
            source={icons.split}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Split PDF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Invert PDF")}>
          <Image
            source={icons.invertColor}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Invert PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Compress PDF")}>
          <Image
            source={icons.compress}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Compress PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Remove Duplicate")}>
          <Image
            source={icons.removeDuplicate}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Remove Duplicate</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default ModifyExistingPDFs