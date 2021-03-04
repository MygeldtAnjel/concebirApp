import {LOGIN} from '../../../utils/actionTypes';
import {saveItem} from '../../../utils/storage';
import {USER_INFO,USER_TOKEN} from '../../../utils/consts';

export const signIn = (userToken,userInfo)  => (dispatch) => {
    try{
        saveItem(USER_TOKEN,userToken);
        saveItem(USER_INFO,userInfo);
    }catch(e){
        console.log("Sucedio un error interno intentelo mas tarde");
    }
    
    dispatch({type: LOGIN, info: userInfo, token: userToken});
};