import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import RecentlyUsedContext from '../recentlyused/RecentlyUsedContext';
import styles from './enhancecreatedpdfs.style';
import { icons, SIZES } from '../../../constants';

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
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("Add password")}>
          <Text style={styles.buttonText}>Add password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC} onPress={() => handleButtonPress("Remove password")}>
          <Text style={styles.buttonText}>Remove password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("Add Text")}>
          <Text style={styles.buttonText}>Add Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonL} onPress={() => handleButtonPress("Rotate Pages")}>
          <Text style={styles.buttonText}>Rotate Pages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC} onPress={() => handleButtonPress("Add Watermark")}>
          <Text style={styles.buttonText}>Add Watermark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonR} onPress={() => handleButtonPress("Add Images")}>
          <Text style={styles.buttonText}>Add Images</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnhanceCreatedPDFs