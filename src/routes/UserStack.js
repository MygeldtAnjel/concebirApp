import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Constants
import {INICIO} from '../utils/consts';
//Views
import Inicio from '../screens/Inicio';

const UserStack = createStackNavigator();

export default function UserStackScreen(){
    return(
    <UserStack.Navigator headerMode={'none'} >
        <UserStack.Screen name={INICIO} component={Inicio}/> 
    </UserStack.Navigator>
    )
}
