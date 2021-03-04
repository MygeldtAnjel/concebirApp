import React,{Fragment} from "react";
import {Image,View} from "react-native";
import {IconButton} from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";

import mini_logo from "../../assets/images/mini_logo.png";
import styles from './style';
import {HOME,SEARCH_SCREEN} from "../../utils/consts";

export default function Bar(){
    const navigation = useNavigation();
    const searchOnPress = () => {
        navigation.navigate(SEARCH_SCREEN);
    };

    const homeOnPress = () => {
        navigation.navigate(HOME);
    };

    return (
        <Fragment>
            <View style={styles.container}>
                <View style={{ width: 40 }} />
                <IconButton
                    icon={() => (
                        <Image
                            source={mini_logo}
                            style={{ width: 40, height: 40}}
                        />
                    )}
                    size={30}
                    onPress={homeOnPress}
                />
                <IconButton
                    icon={() => (
                        <EvilIcons
                            color={"#fff"}
                            name="search"
                            size={35}
                        />
                    )}
                    color={"#fff"}
                    onPress={searchOnPress}
                />
            </View>
        </Fragment>
    );
};

