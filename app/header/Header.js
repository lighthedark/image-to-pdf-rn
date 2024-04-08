import { Stack, useRouter } from "expo-router"
import { useState } from "react";
import { COLORS, icons } from "../../constants"
import { ScreenHeaderBtn, useDebouncedTouchableOpacity } from "../../components";
import { View, Text } from "react-native";

import SideMenu from '../../components/common/sidebar/SideMenu';
import BackDrop from '../../components/common/backdrop/BackDrop';

const Header = ({ title, rightVisible=true }) => {
    const router = useRouter()

    const [goToFavorites, disabled] = useDebouncedTouchableOpacity(() => {
        console.log('Button favorites pressed');
        router.push('favourites/Favourites');
    });

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <BackDrop isVisible={menuVisible} onClick={() => setMenuVisible(false)} />
            <SideMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{ height: 23 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
                <ScreenHeaderBtn
                    iconUrl={icons.menu}
                    dimension='67%'
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
                    btn_disable={disabled}
                />
            </View>
            <View style={{ height: 15 }} />
      </>
    )
}

export default Header;