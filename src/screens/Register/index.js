import React,{Fragment,useState} from "react";
import {View,Keyboard,Text, TouchableOpacity} from "react-native";
import {
    Button,
    Checkbox,
    HelperText,
    Paragraph,
    TextInput,
    TouchableRipple
} from "react-native-paper";
import {ScrollView,TouchableWithoutFeedback} from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/AntDesign";

import apiCall from "../../services/api";
import Container from "../../components/Container";
import styles from "./style";

export default function Register({navigation}){
    const [dni,setDni]=useState("");
    const [nombres,setNombres]=useState("");
    const [apellidoP,setAppelidoP]=useState("");
    const [apellidoM,setApellidoM]=useState("");
    const [celular,setCelular]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [tic,setTic]=useState(false);
    const [loading,setLoading]=useState(false);

    const [valDni,setValDni]=useState(true);
    const [valNombres,setValNombres]=useState(true);
    const [valApellidoP,setValApellidoP]=useState(true);
    const [valApellidoM,setValApellidoM]=useState(true);
    const [valCelular,setValCelular]=useState(true);
    const [valEmail,setValEmail]=useState(true);
    const [valPassword,setValPassword]=useState(true);
    const [valTic,setValTic]=useState(true);

    const handleDni=(e)=>{
        setDni(e);
        if(e===""){
            setValDni(false);
            return false;
        }else{
            setValDni(true);
            return true;
        }  
    }
    
    const handleNombres=(e)=>{
        setNombres(e);
        if(e===""){
            setValNombres(false);
            return false;
        }else{
            setValNombres(true);
            return true;
        }
    }

    const handleApellidoP=(e)=>{
        setAppelidoP(e);
        if(e===""){
            setValApellidoP(false);
            return false;
        }else{
            setValApellidoP(true);
            return true;
        }
    }

    const handleApellidoM=(e)=>{
        setApellidoM(e);
        if(e===""){
            setValApellidoM(false);
            return false;
        }else{
            setValApellidoM(true);
            return true;
        }
    }

    const handleCelular=(e)=>{
        setCelular(e);
        if(e===""){
            setValCelular(false);
            return false;
        }else{
            setValCelular(true);
            return true;
        }
    }

    const handleCorreo=(e)=>{
        setEmail(e);
        let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if(e===""){
            setValEmail(false);
            return false;
        }else if(!regex.test(e.trim())){
            setValEmail(false);
            return false;
        }else{
            setValEmail(true);
            return true;
        }
    }

    const handlePassword=(e)=>{
        setPassword(e);
        if(e===""){
            setValPassword(false);
            return false;
        }else{
            setValPassword(true);
            return true;
        }
    }

    const handleTic=()=>{
        if(tic){
            setTic(false);
            setValTic(false);
        }else{
            setTic(true);
            setValTic(true);
        }
    }

    const validateTicket=()=>{
        if(tic){
            setValTic(true);
            return true;
        }else{
            setValTic(false);
            return false;
        }
    }

    const clearData=()=>{
        setDni("");
        setNombres("");
        setAppelidoP("");
        setApellidoM("");
        setCelular("");
        setEmail("");
        setPassword("");
        setTic(false);
    }

    const sendData=async()=>{
        if(handleDni(dni)===false || handleNombres(nombres)===false || handleApellidoP(apellidoP)===false || handleApellidoM(apellidoM)===false || handleCelular(celular)===false || handleCorreo(email)===false || handlePassword(password)===false || validateTicket()===false){
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Sigue las indicaciones por favor.",
                visibilityTime: 4000,
            });
        }else{
            setLoading(true);
            try{
                let method='GET';
                let url=`registrarPaciente?dni=${dni}&password=${password}&celular=${celular}&email=${email}&nombre=${nombres}&apellidopaterno=${apellidoP}&apellidomaterno=${apellidoM}`;
                let data=null;
                let head={'Content-Type': 'application/json'};
                const responseData = await apiCall(method,url,data,head);
                    if(responseData.data){
                        setLoading(false);
                        clearData();
                        Toast.show({
                            type: "success",
                            text1: "Tu cuenta esta siendo activada",
                            text2:"El callcenter te llamará a la brevedad para activarla",
                            visibilityTime: 4000
                        });
                    }else{
                        setLoading(false);
                        Toast.show({
                            type: "error",
                            text1: "Error",
                            text2: "Ocurrió un error interno inténtalo nuevamente",
                            visibilityTime: 4000,
                        });
                    }
                }catch(e){
                    setLoading(false);
                    Toast.show({
                        type: "error",
                        text1: "Error",
                        text2: "Ocurrió un error interno inténtalo nuevamente",
                        visibilityTime: 4000,
                    });
                }
        }
    }

    return (
        <Fragment>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.touchLeft} activeOpacity={0.7} onPress={()=>{navigation.goBack()}}>
                    <Icon size={26} name="arrowleft"/>
                </TouchableOpacity>
                <Text style={styles.registerText}>Registrarse</Text>
            </View>
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                        accessible={false}>
                        <View style={styles.container}>
                            <View style={styles.input}>
                                <TextInput
                                    keyboardType="number-pad"
                                    dense={true}
                                    mode="outlined"
                                    label="Número de documento"
                                    onChangeText={(value) =>
                                        handleDni(value)
                                    }
                                    value={dni}
                                />
                                {!valDni && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    mode="outlined"
                                    label="Nombres"
                                    onChangeText={(value) =>
                                        handleNombres(value)
                                    }
                                    value={nombres}
                                />
                                {!valNombres && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    mode="outlined"
                                    label="Apellido paterno"
                                    onChangeText={(value) =>
                                        handleApellidoP(value)
                                    }
                                    value={apellidoP}
                                    />
                                {!valApellidoP && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    mode="outlined"
                                    label="Apellido materno"
                                    onChangeText={(value) =>
                                        handleApellidoM(value)
                                    }
                                    value={apellidoM}
                                />
                                {!valApellidoM && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    mode="outlined"
                                    keyboardType="phone-pad"
                                    autoCapitalize="none"
                                    label="Número de celular"
                                    onChangeText={(value) =>
                                        handleCelular(value)
                                    }
                                    value={celular}
                                />
                                {!valCelular && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    keyboardType="email-address"
                                    mode="outlined"
                                    autoCapitalize="none"
                                    label="Correo electrónico"
                                    onChangeText={(value) =>
                                        handleCorreo(value)
                                    }
                                    value={email}
                                />
                                {!valEmail && (
                                    <HelperText type="error">
                                        Debes ingresar un correo válido
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    dense={true}
                                    secureTextEntry={true}
                                    mode="outlined"
                                    autoCapitalize="none"
                                    label="Contraseña"
                                    onChangeText={(value) =>
                                        handlePassword(value)
                                    }
                                    value={password}
                                />
                                {!valPassword && (
                                    <HelperText type="error">
                                        Este campo es necesario
                                    </HelperText>
                                )}
                            </View>
                            <View style={styles.input}>
                                <TouchableRipple
                                    onPress={() => {
                                        handleTic()
                                    }}
                                    rippleColor={"white"}>
                                    <View
                                        style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                        }}>
                                            <Checkbox
                                                status={
                                                        tic
                                                        ? "checked"
                                                        : "unchecked"
                                                    }
                                            />
                                            <Paragraph>
                                                Acepto los terminos y
                                                condiciones
                                            </Paragraph>
                                            </View>
                                        </TouchableRipple>
                                {!valTic && (
                                    <HelperText type="error">
                                        Debes Aceptar los terminos y condiciones
                                    </HelperText>
                                )}
                            </View>
                            <Button
                                loading={loading}
                                disabled={loading}
                                style={{ marginBottom: 20 }}
                                mode="contained"
                                onPress={sendData}>
                                Registrarse
                            </Button>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </Container>
        </Fragment>
    );
};