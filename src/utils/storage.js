import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveItem= async(keyName,  KeyValue)=>{
    try{
        await  AsyncStorage.setItem(keyName, KeyValue);
    return true;
    }catch(e){
        return false;
    }
}

export const getItem= async(keyName)=>{
    try{
        return await AsyncStorage.getItem(keyName);
    }catch (e){
        return false;
    }
}

export const clearAll = async() =>{
    try{
    return await AsyncStorage.clear();
    }catch(e){
    return false;
    }
}
