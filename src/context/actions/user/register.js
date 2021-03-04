import {REGISTER} from '../../../utils/actionTypes';
import {saveItem} from '../../../utils/storage';
import {USER_INFO,USER_TOKEN} from '../../../utils/consts';

export const signUp = (userToken,userInfo)  => (dispatch) => {
    try{
        saveItem(USER_TOKEN,userToken);
        saveItem(USER_INFO,userInfo);
    }catch{
        console.log("Ocurrió un error al realizar el registro de data");
    }
    
    dispatch({type: REGISTER, info: userInfo, token:userToken});
};