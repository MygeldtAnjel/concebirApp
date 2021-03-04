import {UPDATE_USER} from '../../../utils/actionTypes';
import {saveItem} from '../../../utils/storage';
import {USER_INFO,USER_TOKEN} from '../../../utils/consts';

export const updateUser = (userToken,userInfo) => (dispatch) => {
    try{
        saveItem(USER_TOKEN,userToken);
        saveItem(USER_INFO,userInfo);
    }catch{
        console.log("Ocurrió un error interno al realizar un update");
    }
    
    dispatch({type: UPDATE_USER, info: userInfo, token:userToken});
};