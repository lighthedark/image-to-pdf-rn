import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, DEFAULT_STYLE } from '../../constants';
import Header from '../header/Header';
import * as ImagePicker from 'expo-image-picker';
import { printToFileAsync } from 'expo-print';
import * as DocumentPicker from 'expo-document-picker';

const ImageToPDF = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [pdfGenerationStatus, setPdfGenerationStatus] = useState(null);
  const [pdfUri, setPdfUri] = useState(null);

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

  // Function to create PDF from selected images
  const createPDF = async () => {
    try {
      setPdfGenerationStatus('generating');

      const images = selectedImages.map(image => ({
        uri: image.uri,
        width: image.width,
        height: image.height,
      }));

      const html = `
        <html>
          <body>
            ${images.map(image => `<img src="${image.uri}" width="${image.width}" height="${image.height}" />`).join('')}
          </body>
        </html>
      `;

      const { uri } = await printToFileAsync({
        html,
        base64: false,
      });

      setPdfUri(uri);
      setPdfGenerationStatus('success');
    } catch (error) {
      console.error('Error creating PDF:', error);
      setPdfGenerationStatus('error');
    }
  };

  // Function to open the generated PDF
  const openPDF = async () => {
    try {
        const res = await DocumentPicker.getDocumentAsync({
          type: 'application/pdf', // make sure only PDFs are picked
          copyToCacheDirectory: true
        });
        if (res.type === 'success') {
          await WebBrowser.openBrowserAsync(res.uri);
        }
      } catch (error) {
        console.error('Error picking a PDF:', error);
        alert('Failed to pick PDF. Please try again.');
      }
  };

  return (
    <LinearGradient
      colors={[COLORS.colorPrimary, COLORS.colorAccent]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.16 }}
      style={DEFAULT_STYLE}
    >
      <SafeAreaView style={DEFAULT_STYLE}>
        <Header title="Image To PDF" currentPage="ImageToPDF" />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View>
            <TouchableOpacity style={styles.button} onPress={selectImages}>
              <Text style={styles.buttonText}>SELECT IMAGES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedImages !== null && selectedImages.length > 0 ? styles.button : styles.disabledButton}
              disabled={selectedImages === null || selectedImages.length === 0}
              onPress={createPDF}
            >
              <Text style={styles.buttonText}>CREATE PDF</Text>
            </TouchableOpacity>
            {pdfGenerationStatus === 'generating' && (
              <Text style={styles.statusText}>Generating PDF...</Text>
            )}
            {pdfGenerationStatus === 'success' && (
              <>
                <Text style={styles.statusText}>PDF created successfully!</Text>
                <TouchableOpacity style={styles.button} onPress={openPDF}>
                  <Text style={styles.buttonText}>VIEW PDF</Text>
                </TouchableOpacity>
              </>
            )}
            {pdfGenerationStatus === 'error' && (
              <Text style={styles.statusText}>Error creating PDF. Please try again.</Text>
            )}
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
    fontWeight: 'bold',
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ImageToPDF;