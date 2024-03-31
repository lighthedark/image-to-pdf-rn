import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from './recentlyused/RecentlyUsedContext';
import {styles, buttonStyles} from "./home.style";
import { COLORS, icons } from "../../constants"

const EnhanceCreatedPDFs = () => {
  const router = useRouter();
  const { addFeature } = useContext(RecentlyUsedContext);
  const handleButtonPress = (featureName) => {
    console.log(`${featureName} pressed`);
    addFeature(featureName);
  };

  return (
    <View>
      <Text style={styles.header}>Enhance Created PDFs</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Add password")}>
          <Image
            source={icons.lock}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Remove password")}>
          <Image
            source={icons.openLock}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Remove password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Add Text")}>
          <Image
            source={icons.text}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL3} onPress={() => handleButtonPress("Rotate Pages")}>
          <Image
            source={icons.rotate}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Rotate Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC3} onPress={() => handleButtonPress("Add Watermark")}>
          <Image
            source={icons.watermark}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Watermark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR3} onPress={() => handleButtonPress("Add Images")}>
          <Image
            source={icons.add}
            resizeMode='cover'
            style={buttonStyles.buttonImage}
          />
          <Text style={styles.buttonText}>Add Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnhanceCreatedPDFs