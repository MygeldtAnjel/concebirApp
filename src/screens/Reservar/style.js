import {StyleSheet,Dimensions} from 'react-native';
const tamano = Dimensions.get("window").width;
const alto = Dimensions.get("window").height;
export default StyleSheet.create({
    imgEspecial:{
        marginTop: 10,
        width: tamano,
        height: alto / 2,
        borderRadius: (alto+tamano) * 0.2
    },
    topBar:{
        height:65,
        backgroundColor:'#5e9931',
        borderBottomColor:'rgba(0,0,0,0.05)',
        borderBottomWidth:1,
        marginBottom:6,
        alignItems:'center',
        flexDirection:'row'
    },
    touchLeft:{
        marginLeft:8
    },
    registerText:{
        fontSize:20,
        marginLeft:28,
        fontWeight:'bold',
        color:'#fff'
    }
});