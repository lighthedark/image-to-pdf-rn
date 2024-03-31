import { Stack, useRouter } from "expo-router"
import { useState } from "react";
import { COLORS, icons } from "../../constants"
import { ScreenHeaderBtn } from "../../components";
import { View } from "react-native";
import SideMenu from "../../components/common/SideBar/SideMenu"
import BackDrop from "../../components/common/BackDrop/BackDrop"

const Header = ({ title, rightVisible=true }) => {
    const router = useRouter()
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const goToFavorites = () => {
        console.log('Button favorites pressed');
        router.push('favourites/Favourites')
      };
    
    return (
        <>
            <BackDrop isVisible={menuVisible} onClick={() => setMenuVisible(false)} />
            <SideMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.colorPrimary},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension='43%'
                            marginLeft={5}
                            marginRight={15}
                            handlePress={toggleMenu}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.heart} 
                            dimension='60%' 
                            marginLeft={0}
                            marginRight={-25}
                            visible={rightVisible}
                            handlePress={goToFavorites}
                        />
                    ),
                    headerTitleStyle : {
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 22
                    },
                    headerTitle: title,
                    headerTitleAlign: 'left',
                    headerBackButtonMenuEnabled: false,
                      
                }}
            />
            <View style={{ height: 15 }} />
      </>
    )
}

export default Header;