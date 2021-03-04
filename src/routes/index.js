import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {USER_TOKEN,USER_INFO} from '../utils/consts';
import UserStack from './UserStack';
import RootStack from './RootStack';
import SplashScreen from '../screens/SplashScreen';
import {getItem} from '../utils/storage';
//Context General
import {RETRIEVE_TOKEN} from '../utils/actionTypes';
import {AuthContext} from '../context';
//states
import userInitialState from '../context/initialStates/userState';
//reducers
import userReducer from '../context/reducers/user';


const AppNavigator = () =>{

    const [authState,authDispatch] = React.useReducer(userReducer, userInitialState);

    const handleCredentials=async()=>{
        let userToken;
        userToken = null;
        let userInfor;
        userInfor = null;
        try{
          userToken = await getItem(USER_TOKEN);
          userInfor = await getItem(USER_INFO);
        }catch(e){
            alert('Sucedió un Error Interno Por favor intentalo más tarde');
        }
        authDispatch({ type: RETRIEVE_TOKEN, token: userToken, info:userInfor});
    }

    React.useEffect(() => {
        handleCredentials();
    }, []);

    if(authState.isLoading){
        return(<SplashScreen />)
    }

    return(
        <AuthContext.Provider value={{authState,authDispatch}}>
            <NavigationContainer>
                <Toast style={{zIndex: 1}} ref={(ref) => Toast.setRef(ref)} />
                {authState.userToken ? 
                <UserStack />
                : <RootStack />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default AppNavigator;

