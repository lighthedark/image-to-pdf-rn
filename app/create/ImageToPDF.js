import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter, Link } from "expo-router";

import { COLORS, TOPROUND, icons } from '../../constants';
import { 
  ScreenHeaderBtn,
  RecentlyUsed, 
  CreateNewPDF, 
  ViewPDFs,
  EnhanceCreatedPDFs,
  ModifyExistingPDFs,
  MoreOptions
 } from '../../components'

 import SideMenu from '../../components/common/SideBar/SideMenu'

const ImageToPDF = () => {
  const router = useRouter()
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.colorPrimary }}>
      <SideMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.colorPrimary },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension='60%'
              handlePress={toggleMenu}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.heart} dimension='60%' />
          ),
          headerTitle: "Image to PDF"
        }}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: COLORS.lighter_gray}}>
        <View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageToPDF;