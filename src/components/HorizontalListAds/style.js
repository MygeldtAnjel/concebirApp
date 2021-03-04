import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
const alto = Dimensions.get("window").height;
export default StyleSheet.create({
    container: {
        marginVertical: 5,
        marginRight: 10,
        elevation: 3,
        width: tamano,
        borderRadius: 5,
        height: (alto*0.3) - 40
    },
    img: {
        height: "100%",
    },
    containerCharging: {
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 5,
        marginRight: 10,
        width: tamano,
        borderRadius: 5,
        height: (alto*0.3) - 40
    },
});