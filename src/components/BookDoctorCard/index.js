import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Image,TouchableNativeFeedback} from "react-native";
import {Button,Subheading,Surface} from "react-native-paper";
import {RESERVAR} from "../../utils/consts";

import styles from './style';

export default function BookDoctorCard(props){
    const {photo_url,nombre} = props;

    const navigation = useNavigation();

    const btnToBook = () => {
        navigation.navigate(RESERVAR, { doctor: props });
    };

    return (
        <Surface style={styles.container}>
            <TouchableNativeFeedback onPress={btnToBook}>
                <Image
                    style={styles.img}
                    source={{ uri: photo_url }}
                />
            </TouchableNativeFeedback>
            <Subheading style={styles.text}>{nombre}</Subheading>
            <Button
                uppercase={false}
                mode="outlined"
                compact={true}
                color="white"
                style={styles.button}
                onPress={btnToBook}>
                Reservar
            </Button>
        </Surface>
    );
};
