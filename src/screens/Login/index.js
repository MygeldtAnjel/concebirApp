import React,{useState,useContext} from "react";
import {TouchableWithoutFeedback,Keyboard,View} from "react-native";
import Toast from "react-native-toast-message";
import {
    Button,
    HelperText,
    TextInput,
    Headline,
    Paragraph,
    Checkbox,
} from "react-native-paper";

import Container from "../../components/Container";
import {REGISTER} from "../../utils/consts";
import apiCall from "../../services/api";
import Entypo from "react-native-vector-icons/Entypo";
import {AuthContext} from '../../context';
import {signIn} from '../../context/actions/user/login';
import DialogRecoverPassword from "../../components/DialogRecoveryPassword";
import styles from "./style";

export default function Login({navigation}){
    const [dni,setDni]=useState("");
    const [password,setPassword]=useState("");
    const [showPass,setShowPass]=useState(true);
    const [record,setRecord]=useState(false);

    const [valDni,setValDni]=useState(true);
    const [valPassword,setValPassword]=useState(true);

    const [messageDni,setMessageDni]=useState("");
    const [messagePassword,setMessagePassword]=useState("");
    const [loading,setLoading]=useState(false);

    const [visible,setVisible]=useState(false);

    const {authDispatch} = useContext(AuthContext);

    const handleShow=()=>{
        if(showPass){
            setShowPass(false);
        }else{
            setShowPass(true);
        }
    }

    const handleDni=(e)=>{
        setDni(e);
        if(e===""){
            setValDni(false);
            setMessageDni("Debes ingresar tu DNI");
            return false;
        }else{
            setValDni(true);
            return true;
        }
    }

    const handlePassword=(e)=>{
        setPassword(e);
        if(e===""){
            setValPassword(false);
            setMessagePassword("Debes ingresar tu contraseña");
            return false;
        }else{
            setValPassword(true);
            return true;
        }
    }

    const handleRecord=()=>{
        if(record){
            setRecord(false);
        }else{
            setRecord(true);
        }
    }

    const handleSubmit=async()=>{
        setLoading(true);
        if(handleDni(dni)===false || handlePassword(password)===false){
            setLoading(false);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Sigue las indicaciones por favor.",
                visibilityTime: 4000
            });
        }else{
            try{
            let method='GET';
            let url='users/login?password='+password+'&usuario='+dni;
            let data=null;
            let head={'Content-Type': 'application/json'};
            const responseUser = await apiCall(method,url,data,head);
                if(responseUser.data.error==="Usuario no encontrado"){
                    console.log(responseUser.data);
                    setLoading(false);
                    Toast.show({
                        type: "error",
                        text1: "Error",
                        text2: "El usuario ingresado no existe.",
                        visibilityTime: 4000
                    });
                }else{
                    setLoading(false);
                    const userInfo= JSON.stringify({id:123244565,name:"Miguel Angel Barrientos Rojas",foto:"https://entreangeles.site/anonimo.jpg"});
                    const userToken = "123456";
                    signIn(userToken,userInfo)(authDispatch);
                }
            }catch(e){
                setLoading(false);
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: "Ocurrió un error interno inténtalo nuevamente",
                    visibilityTime: 4000
                });
            }
        }
    }

    const closeDialog=()=>{
        setVisible(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <Container>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}>
                    <View style={styles.container}>
                        <Headline>
                            Iniciar{" "}
                            <Headline
                                style={{ color:"#5e9931"}}>
                                sesión
                            </Headline>
                        </Headline>
                        <View style={styles.input}>
                                    <TextInput
                                        keyboardType="number-pad"
                                        dense={true}
                                        mode="outlined"
                                        autoCapitalize="none"
                                        label="DNI"
                                        onChangeText={(value) =>
                                            handleDni(value)
                                        }
                                        value={dni}
                                    />
                            {!valDni && 
                                <HelperText type="error">
                                    {messageDni}
                                </HelperText>
                            }
                        </View>
                        <View style={styles.input}>
                                    <TextInput
                                        right={
                                            <TextInput.Icon
                                                name={(style) => {
                                                    return showPass ? (
                                                        <Entypo
                                                            name="eye-with-line"
                                                            size={20}
                                                            color={
                                                                "gray"
                                                            }
                                                        />
                                                    ) : (
                                                        <Entypo
                                                            name="eye"
                                                            size={20}
                                                            color={
                                                                "gray"
                                                            }
                                                        />
                                                    );
                                                }}
                                                onPress={handleShow}
                                            />
                                        }
                                        secureTextEntry={showPass}
                                        autoCapitalize="none"
                                        label="Contraseña"
                                        dense={true}
                                        mode="outlined"
                                        onChangeText={(value) =>
                                            handlePassword(value)
                                        }
                                        value={password}
                                    />
                            {!valPassword && 
                                <HelperText type="error">
                                    {messagePassword}
                                </HelperText>
                            }
                        </View>

                        <Checkbox.Item
                            label="Recordar DNI"
                            status={record ? "checked" : "unchecked"}
                            onPress={handleRecord}
                        />
                        <Button
                            style={styles.button}
                            disabled={loading}
                            loading={loading}
                            mode="contained"
                            onPress={handleSubmit}>
                            Ingresar
                        </Button>
                        <Button
                            mode="outlined"
                            style={styles.button}
                            onPress={()=>{setVisible(true)}}>
                            Olvidé mi contraseña
                        </Button>
                        <View style={styles.footer}>
                            <View style={styles.cregister}>
                                <Paragraph>No tienes una cuenta?</Paragraph>
                                <Button
                                    onPress={() => {navigation.navigate(REGISTER)}}>
                                    Registrate
                                </Button>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Container>
            <DialogRecoverPassword
                visible={visible}
                hideDialog={closeDialog}
            />
        </View>
    );
};