import {StyleSheet,Dimensions} from 'react-native';
const alto = Dimensions.get("window").height;
export default StyleSheet.create({
    container: {
        height: alto/6,
        width: "100%",
        elevation: 5,
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row"
    },
    img: {
        height: alto/6,
        width: "35%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    button: {
        width: 100,
        backgroundColor:"#2a7632",
        borderRadius: 10
    },
    body: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: (alto/6) - 20,
        marginVertical: 10,
        paddingLeft: 10,
        width: "60%"
    },
});