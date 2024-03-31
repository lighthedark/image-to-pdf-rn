import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import SideMenu from '../components/common/SideBar/SideMenu';
import BackDrop from '../components/common/BackDrop/BackDrop';

import { COLORS } from '../constants';
import { 
  RecentlyUsed, 
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
      <BackDrop isVisible={menuVisible} onClick={() => setMenuVisible(false)} />
      <SideMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
      <Header
        title="PDF Converter"
        toggleMenu={toggleMenu}
      />
      <View style={{overflow: 'scroll', 
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: COLORS.lighter_gray}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecentlyUsedProvider>
          <RecentlyUsedFeatures />
          <View style={{marginBottom: 20, marginTop: 20}}>
            <CreateNewPDF/>
            <ViewPDFs/>
            <EnhanceCreatedPDFs/>
            <ModifyExistingPDFs/>
            <MoreOptions/>
          </View>
          </RecentlyUsedProvider>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;