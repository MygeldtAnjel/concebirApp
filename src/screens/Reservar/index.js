import React,{Fragment} from "react";
import {ScrollView,TouchableOpacity,Text,View} from "react-native";
import {Card} from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

import styles from './style';
import Container from "../../components/Container";

export default function Reservar({route,navigation}){
    const {doctor} = route.params;

    return (
        <Fragment>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.touchLeft} activeOpacity={0.7} onPress={()=>{navigation.goBack()}}>
                    <Icon size={26} name="arrowleft" color="#fff"/>
                </TouchableOpacity>
                <Text style={styles.registerText}>{doctor.nombre}</Text>
            </View>
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Card.Cover
                        source={{ uri: doctor.photo_url }}
                        style={styles.imgEspecial}
                    />
                </ScrollView>
            </Container>
        </Fragment>
    );
};
