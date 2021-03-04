import {LOGOUT} from '../../../utils/actionTypes';
import {clearAll} from '../../../utils/storage';

export const signOut =()=>(dispatch) => {
    try {
        clearAll();
    } catch(e) {
        console.log("Ocurrió un error al eliminar la data");
    }
    dispatch({type:LOGOUT});
};
