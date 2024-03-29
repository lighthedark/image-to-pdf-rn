import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS } from '../../constants';
import Header from "../header/Header";

const QRAndBarcodes = () => {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.colorPrimary }}>
      <Header
        title="QR & Barcodes"
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

export default QRAndBarcodes;