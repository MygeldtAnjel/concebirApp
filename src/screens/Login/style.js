import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 20,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: tamano
    },
    cregister: {
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});