import React,{Fragment} from "react";
import {
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
    View,
    Image,
} from "react-native";
import { Title } from "react-native-paper";

import styles from "./style";
import rootImage from "../../assets/images/thumbnail_APP-CONCEBIR.png";
import HorizontalListAds from "../../components/HorizontalListAds";
import HorizontalListDoctors from "../../components/HorizontalListDoctors";

export default function Home(){
    return (
        <View style={{flex:1}}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <Fragment>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            resizeMode="stretch"
                            style={styles.image}
                            source={rootImage}
                        />
                        <Title style={{paddingLeft:10}}>
                            Nuestras Promociones
                        </Title>
                        <HorizontalListAds />
                        <Title style={{paddingLeft:10}}>
                            Nuestros Médicos Especialistas
                        </Title>
                        <HorizontalListDoctors />
                    </ScrollView>
                </Fragment>
            </TouchableWithoutFeedback>
        </View>
    );
};

