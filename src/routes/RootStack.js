import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Constants
import {LOGIN,REGISTER} from '../utils/consts';
//Views
import Login from '../screens/Login';
import Register from '../screens/Register';

const RootStack = createStackNavigator();
export default function RootStackScreen(){
    return(
    <RootStack.Navigator headerMode={'none'} >
        <RootStack.Screen name={LOGIN} component={Login}/> 
        <RootStack.Screen name={REGISTER} component={Register}/>
    </RootStack.Navigator>
    )
}
