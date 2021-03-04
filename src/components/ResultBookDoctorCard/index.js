import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {View,Image,TouchableNativeFeedback} from "react-native";
import {
    Button,
    Subheading,
    Surface,
    Caption,
} from "react-native-paper";

import styles from "./style";
import {RESERVAR} from "../../utils/consts";

export default function ResultBookDoctorCard(props){
    const { nombre, especialidad, photo_url } = props;
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
            <View style={styles.body}>
                <Subheading>{nombre}</Subheading>
                <Caption>{especialidad}</Caption>
                <Button
                    uppercase={false}
                    mode="outlined"
                    compact={true}
                    onPress={btnToBook}
                    color="white"
                    style={styles.button}>
                    Reservar
                </Button>
            </View>
        </Surface>
    );
};
