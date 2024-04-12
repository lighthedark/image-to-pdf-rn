import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, DEFAULT_STYLE } from '../../constants';
import Header from "../header/Header";
import * as ImagePicker from 'expo-image-picker';

const ImageToPDF = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle selecting images
  const selectImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setSelectedImages(result.assets);
    }
  };

  return (
    <LinearGradient colors={[COLORS.colorPrimary, COLORS.colorAccent]} start={{x: 0, y: 0}} end={{x: 0, y: 0.16}} style={DEFAULT_STYLE}>
      <SafeAreaView style={DEFAULT_STYLE}>
        <Header
          title = "Image To PDF"
          currentPage = "ImageToPDF"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={selectImages}
            >
              <Text style={styles.buttonText}>SELECT IMAGES</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={selectedImages !== null && selectedImages.length > 0 ? styles.button : styles.disabledButton}
              disabled={selectedImages === null || selectedImages.length === 0}
              onPress={() => {
                // Create PDF with selected images
              }}
            >
              <Text style={styles.buttonText}>CREATE PDF</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.lighter_gray,
  },
  button: {
    backgroundColor: COLORS.colorAccent,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 0,
    width: '90%',
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#B0B0B0',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 0,
    width: '90%',
    alignSelf: 'center',
    opacity: 0.5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ImageToPDF;