import React,{useState} from "react";
import Toast from 'react-native-simple-toast';
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    TextInput,
    HelperText,
} from 'react-native-paper';

import apiCall from '../../services/api';

export default function DialogRecoverPassword(props){
    const { visible, hideDialog } = props;
    const [dni,setDni]=useState("");
    const [valDni,setValDni]=useState(true);
    const [loading,setLoading]=useState(false);

    const validateDni=(e)=>{
        setDni(e);
        if(e===""){
            setValDni(false);
            return false;
        }else{
            setValDni(true);
            return true;
        }
    }
    
    const sendData=async()=>{
        if(validateDni(dni)===false){
            return false;
        }else{
            setLoading(true);
            try{
                let method='GET';
                let url='validateDni?dni='+dni;
                let data=null;
                let head={'Content-Type': 'application/json'};
                const responseData = await apiCall(method,url,data,head);
                    if(responseData.data.message==="¡Usuario no encontrado!"){
                        setLoading(false);
                        Toast.showWithGravity('¡Usuario no encontrado!', Toast.LONG, Toast.TOP);
                    }else{
                        setLoading(false);
                        Toast.showWithGravity('Se le envió la información necesaria a su correo', Toast.LONG, Toast.TOP);
                    }
            }catch(e){
                setLoading(false);
                console.log(e);
            }
        }
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>
                    <Paragraph>
                        Ingresa tu número de DNI y te enviaremos los pasos para
                        recuperar tu contraseña
                    </Paragraph>
                            <TextInput
                                keyboardType="number-pad"
                                dense={true}
                                mode="outlined"
                                autoCapitalize="none"
                                label="DNI"
                                onChangeText={(value) => validateDni(value)}
                                value={dni}
                            />
                    {!valDni && (
                        <HelperText type="error">
                            Debes ingresar tu DNI para continuar
                        </HelperText>
                    )}
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancelar</Button>
                    <Button
                        loading={loading}
                        onPress={sendData}
                        mode="contained"
                        disabled={loading}>
                        Enviar
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

