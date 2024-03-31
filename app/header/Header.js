import { Stack, useRouter } from "expo-router"
import { useState } from "react";
import { COLORS, icons } from "../../constants"
import { ScreenHeaderBtn } from "../../components";
import { View, Text } from "react-native";

const Header = ({ title, rightVisible=true, toggleMenu }) => {
    const router = useRouter()

    const goToFavorites = () => {
        console.log('Button favorites pressed');
        router.push('favourites/Favourites')
      };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{ height: 23 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.colorPrimary, height: 60 }}>
                <ScreenHeaderBtn
                    iconUrl={icons.menu}
                    dimension='43%'
                    marginLeft={20}
                    marginRight={15}
                    handlePress={toggleMenu}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold' }}>
                        {title}
                    </Text>
                </View>
                <ScreenHeaderBtn
                    iconUrl={icons.heart}
                    dimension='60%'
                    marginLeft={0}
                    marginRight={-8}
                    visible={rightVisible}
                    handlePress={goToFavorites}
                />
            </View>
            <View style={{ height: 15 }} />
      </>
    )
}

export default Header;