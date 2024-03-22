import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from '../constants';
import { 
  ScreenHeaderBtn,
  RecentlyUsed, 
  CreateNewPDF, 
  ViewPDFs,
  EnhanceCreatedPDFs,
  ModifyExistingPDFs,
  MoreOptions
 } from '../components'

 import SideMenu from '../components/common/SideBar/SideMenu'

const Home = () => {
  const router = useRouter()
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <SideMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />

      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.orange },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension='60%'
              handlePress={toggleMenu}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.heart} dimension='100%' />
          ),
          headerTitle: "PDF Converter"
        }}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{borderRadius: 10}}>
        <View>
          <RecentlyUsed/>
          <CreateNewPDF/>
          <ViewPDFs/>
          <EnhanceCreatedPDFs/>
          <ModifyExistingPDFs/>
          <MoreOptions/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;