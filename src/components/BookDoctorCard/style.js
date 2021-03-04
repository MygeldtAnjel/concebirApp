import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        height: 310,
        elevation: 5,
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
    },
    text: {
        paddingHorizontal: 10,
        textAlign: "center",
    },
    img: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    button: {
        backgroundColor: "#ff9a22",
        borderRadius: 20,
    },
    logo: {
        height: 128,
        width: 128
    }
});