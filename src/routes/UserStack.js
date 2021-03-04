import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Views
import BottomNavigator from './UserTabStack';
import Reservar from '../screens/Reservar';
import Doctor_Screen from '../screens/DoctorScreen';
import Search_Screen from '../screens/SearchScreen';
//Consts
import {RESERVAR,DOCTOR_SCREEN,SEARCH_SCREEN} from '../utils/consts';

const UserStack = createStackNavigator();

export default function UserStackScreen(){
    return(
    <UserStack.Navigator headerMode={'none'} >
        <UserStack.Screen name="Inicio_User" component={BottomNavigator}/>
        <UserStack.Screen name={RESERVAR} component={Reservar}/>
        <UserStack.Screen name={DOCTOR_SCREEN} component={Doctor_Screen}/>
        <UserStack.Screen name={SEARCH_SCREEN} component={Search_Screen}/>
    </UserStack.Navigator>
    )
}
