import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    input: {
        marginBottom: 15
    },
    topBar:{
        height:65,
        backgroundColor:'#fff',
        borderBottomColor:'rgba(0,0,0,0.2)',
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
        fontWeight:'bold'
    }
});