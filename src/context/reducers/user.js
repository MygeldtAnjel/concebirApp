import {RETRIEVE_TOKEN,LOGIN,LOGOUT,REGISTER,UPDATE_USER} from '../../utils/actionTypes';

const userReducer =  (prevState, action) =>{
    switch(action.type){
        case RETRIEVE_TOKEN:
            return {
               ...prevState,
               userToken: action.token,
               userInfo: action.info,
               isLoading: false
            };
       case LOGIN:
            return {
               ...prevState,
               userInfo: action.info,
               userToken: action.token,
               isLoading:false
            };
       case LOGOUT:
            return {
               ...prevState,
               userInfo:null,
               userToken: null,
               isLoading: false
            };
       case REGISTER:
            return {
               ...prevState,
               userInfo: action.info,
               userToken: action.token,
               isLoading: false
            };
       case UPDATE_USER:
               return {
               ...prevState,
               userInfo: action.info,
               isLoading: false
       };
    }
}

export default userReducer;