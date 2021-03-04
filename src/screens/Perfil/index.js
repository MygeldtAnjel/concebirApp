import React,{Fragment,useState,useContext} from "react";
import { useIsFocused } from "@react-navigation/native";
import {View} from "react-native";
import { Button } from "react-native-paper";

import {AuthContext} from '../../context';
import {signOut} from '../../context/actions/user/logout';
import styles from './style';

export default function Account(){
    const {authDispatch} = useContext(AuthContext);

    const handleSignOut=()=>{
        signOut()(authDispatch);
    }
    return (
        <Fragment>
            <View style={styles.container}>
                <Button
                    onPress={handleSignOut}
                    style={{ width: "40%" }}
                    mode="outlined">
                    Cerrar sesión
                </Button>

                <Button
                    onPress={()=>{console.log("test")}}
                    style={{ width: "60%" }}
                    mode="contained">
                    Mostrar información
                </Button>
            </View>
        </Fragment>
    );
};

