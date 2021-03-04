import React, { useState } from "react";
import {FlatList,View} from "react-native";
import ResultHeadquarterCard from "../ResultSedeCard";

import CONCEBIR_SANISIDRO from "../../assets/headquarters/CONCEBIR.SANISIDRO.jpg";
import CONCEBIR_LOSOLIVOS from "../../assets/headquarters/CONCEBIR.LOSOLIVOS.jpg";
import CONCEBIR_SJM from "../../assets/headquarters/CONCEBIR.SJM.jpg";
import CONCEBIR_SANTAANITA from "../../assets/headquarters/CONCEBIR.SANTAANITA.jpg";
import CONCEBIR_TRUJILLO from "../../assets/headquarters/CONCEBIR.TRUJILLO.jpg";
import CONCEBIR_AREQUIPA from "../../assets/headquarters/CONCEBIR.AREQUIPA.jpg";

export default function ListHeadquarters (){
    const [dataHeadquarter,setDataHeadquarter]=useState([{
        image: CONCEBIR_SANISIDRO,
        name: `San Isidro`,
        adress: `Calle Los Olivos 364`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a domingo`,
    },
    {
        image: CONCEBIR_SANISIDRO,
        name: `Monterrico`,
        adress: `Calle Los Olivos 364`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a domingo`,
    },
    {
        image: CONCEBIR_LOSOLIVOS,
        name: `Los Olivos`,
        adress: `Av. Carlos Izaguirre 1184`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    },

    {
        image: CONCEBIR_SJM,
        name: `San Juan de Miraflores`,
        adress: `Av. Belisario Suárez 859`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    },

    {
        image: CONCEBIR_SANTAANITA,
        name: `Santa Anita`,
        adress: `Av. Los Ruiseñores 476`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    },

    {
        image: CONCEBIR_TRUJILLO,
        name: `Trujillo`,
        adress: `Av. Dean Saavedra 396 – 398`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    },
    {
        image: CONCEBIR_AREQUIPA,
        name: `Arequipa`,
        adress: `Av. Mariscal Benavides 209`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    },

    {
        image: CONCEBIR_AREQUIPA,
        name: `Chiclayo`,
        adress: `Av. Mariscal Benavides 209`,
        phone: `(01) 250 3939`,
        schedule: `Lunes a sábado`,
    }]);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            initialNumToRender={4}
            data={dataHeadquarter}
            renderItem={({ item }) => (
                <View style={{padding:5}}>
                    <ResultHeadquarterCard {...item} />
                </View>
            )}
            keyExtractor={(item) => item.name}
        />
    );
};

