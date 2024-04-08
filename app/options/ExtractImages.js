import { SafeAreaView, ScrollView, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, DEFAULT_STYLE } from '../../constants';
import Header from "../header/Header";

const ExtractImages = () => {

  return (
    <LinearGradient colors={[COLORS.colorPrimary, COLORS.colorAccent]} start={{x: 0, y: 0}} end={{x: 0, y: 0.16}} style={DEFAULT_STYLE}>
      <SafeAreaView style={DEFAULT_STYLE}>
        <Header
          title="Extract Images"
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
    </LinearGradient>
  );
};

export default ExtractImages;