import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Container({children}){
    return(
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
});

