import { Stack } from "expo-router"
import { useState } from "react";
import { COLORS, icons } from "../../constants"
import { ScreenHeaderBtn } from "../../components";

import SideMenu from "../../components/common/SideBar/SideMenu"

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
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
                    headerTitle: "PDF Converter"
                }}
            />
      </>
    )
}

export default Header;