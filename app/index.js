import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";

import { COLORS, TOPROUND, icons } from '../constants';
import { 
  ScreenHeaderBtn,
  // RecentlyUsed, 
  // RecentlyUsedFeatures,
  CreateNewPDF, 
  ViewPDFs,
  EnhanceCreatedPDFs,
  ModifyExistingPDFs,
  MoreOptions
 } from '../components';
 import RecentlyUsedProvider from '../components/home/recentlyused/RecentlyUsedProvider';
 import RecentlyUsedFeatures from '../components/home/recentlyused/RecentlyUsedFeatures';
import Header from "./header/Header";

const Home = () => {
  const router = useRouter()
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.colorPrimary }}>
      <Header/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: COLORS.lighter_gray}}>
        <RecentlyUsedProvider>
        <RecentlyUsedFeatures />
        <View>
          <CreateNewPDF/>
          <ViewPDFs/>
          <EnhanceCreatedPDFs/>
          <ModifyExistingPDFs/>
          <MoreOptions/>
        </View>
        </RecentlyUsedProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;