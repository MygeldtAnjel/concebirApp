import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
const alto = Dimensions.get("window").height;
export default StyleSheet.create({
    item: {
        marginRight: 10,
        marginVertical: 5,
        width: 225,
    },
    containerCharging: {
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 5,
        marginRight: 10,
        width: tamano,
        borderRadius: 5,
        height: (alto*0.2) - 40
    }
});