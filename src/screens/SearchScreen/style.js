import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
export default StyleSheet.create({
    header: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    searchStyle: {
        width: tamano - 50,
        borderColor: "white",
        backgroundColor: "white",
        elevation: 0,
    },
    buttonBackContainer: {
        width: 50,
        backgroundColor: "white",
    },
});