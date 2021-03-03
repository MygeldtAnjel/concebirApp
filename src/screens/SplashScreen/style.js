import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
export default StyleSheet.create({
    imgAnunc:{
        flex:1,
        resizeMode: 'contain',
    },
    contentSplash:{
        width:tamano,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2BD2CA'
    }
});