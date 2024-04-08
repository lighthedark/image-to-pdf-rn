import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Stack, useRouter, Link } from "expo-router";
import { COLORS, DEFAULT_STYLE} from '../../constants';
import Header from "../header/Header";
import { LinearGradient } from 'expo-linear-gradient';


const Favourites = () => {
  const router = useRouter()
  const addFavourite = () => {
    console.log("Adding favourite...");
    // add your logic here, e.g.: router.push(`/create/${page}`)
  };

  return (
    <LinearGradient colors={[COLORS.colorPrimary, COLORS.colorAccent]} start={{x: 0, y: 0}} end={{x: 0, y: 0.16}} style={DEFAULT_STYLE}>
      <SafeAreaView style={DEFAULT_STYLE}>
        <Header 
          title={"Favourites"}
          rightVisible={false}
        />

        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View>
            <Text style={styles.instructionText}>Select + icon to add your favourite features!</Text>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={addFavourite} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        {/* <View style={styles.container}> */}
        <Image
          source={require('../../assets/favourites/heart.gif')} 
          style={styles.gifStyle}
          resizeMode="cover" // Adjusts the gif to fit within the width and height specified
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.white,
  },
  instructionText: {
    textAlign: 'center', 
    marginTop: 413, 
    fontSize: 16, 
    color: COLORS.grey, 
    fontWeight: 'bold'
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03DAC6',
    borderRadius: 30, 
    elevation: 4, // add shadow on Android
    shadowOpacity: 0.3, // add shadow on iOS
    shadowRadius: 4, 
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonText: {
    color: 'black',
    fontSize: 27
  },
  // container: {
  //   flex: 1,
  //   // Ensuring the parent View takes up the full screen so the absolute positioning works as expected
  // },
  gifStyle: {
    position: 'absolute',
    right: 148,
    top: 400,
    width: 90,
    height: 81,
  },
});

export default Favourites;