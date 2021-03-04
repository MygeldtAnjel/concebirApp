import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";
import {Card,Title,Paragraph,Surface} from "react-native-paper";

import styles from './style';
import {DOCTOR_SCREEN} from '../../utils/consts';

export default function ResultHeadquarterCard(props){
    const { image, name, adress, phone, schedule } = props;
    const navigation = useNavigation();

    const btnDoctor = () => {
        navigation.navigate(DOCTOR_SCREEN,{query:name});
    };

    return (
        <Surface style={styles.container}>
            <Card onPress={btnDoctor}>
                <Card.Cover source={image} />
            </Card>
            <Card.Content style={{ paddingBottom: 10 }}>
                <Title
                    style={{
                        textAlign: "center",
                        color: "#5e9931"
                    }}>
                    {name}
                </Title>
                <View style={styles.text}>
                    <Paragraph style={styles.parag}>Dirección</Paragraph>
                    <Paragraph style={[styles.parag, { textAlign: "right" }]}>
                        {adress}
                    </Paragraph>
                </View>
                <View style={styles.text}>
                    <Paragraph style={styles.parag}>Teléfono</Paragraph>
                    <Paragraph style={[styles.parag, { textAlign: "right" }]}>
                        {phone}
                    </Paragraph>
                </View>
                <View style={styles.text}>
                    <Paragraph style={styles.parag}>Horario</Paragraph>
                    <Paragraph style={[styles.parag, { textAlign: "right" }]}>
                        {schedule}
                    </Paragraph>
                </View>
            </Card.Content>
        </Surface>
    );
};