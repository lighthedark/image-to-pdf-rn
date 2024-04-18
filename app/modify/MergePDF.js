import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as DocumentPicker from 'expo-document-picker';
import { COLORS, DEFAULT_STYLE } from '../../constants';
import Header from "../header/Header";

const MergePDF = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const selectPDFFile = async () => {
    try {
      const results = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true
      });

      if (results.type !== 'cancel') {
        setPdfFiles(prev => [...prev, results]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mergePDFFiles = () => {
    alert('Merge functionality to be implemented on the server-side.');
  };

  return (
    <LinearGradient colors={[COLORS.colorPrimary, COLORS.colorAccent]} start={{x: 0, y: 0}} end={{x: 0, y: 0.16}} style={DEFAULT_STYLE}>
      <SafeAreaView style={DEFAULT_STYLE}>
        <Header
          title="Merge PDF"
          currentPage="MergePDF"
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More Enhancement Options</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.button}
            onPress={selectPDFFile}>
            <Text style={styles.buttonText}>Select Files</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.disabledButton} onPress={mergePDFFiles} disabled={pdfFiles.length !== 2}>
            <Text style={styles.buttonText}>Merge Files</Text>
          </TouchableOpacity>
          {/* Include additional UI components here */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'transparent', // Or any color based on your design
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // Or any color based on your design
  },
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

export default MergePDF;