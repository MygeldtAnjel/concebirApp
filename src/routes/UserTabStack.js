import React,{Fragment} from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Bar from "../components/TopBar";
import Home from "../screens/Home";
import Citas from "../screens/Citas";
import Doctores from "../screens/Doctores";
import Perfil from "../screens/Perfil";
import Sedes from "../screens/Sedes";
import {HOME,CITAS,DOCTORES,PERFIL,SEDES} from "../utils/consts";
//Imágenes
import promociones from "../assets/images/PROMOCIONES-02.png";
import promocionesActive from "../assets/images/PROMOCIONES.png";
import misCitas from "../assets/images/MIS-CITAS.png";
import misCitasActive from "../assets/images/MIS-EXAMANES-02.png";
import medicos from "../assets/images/MEDICOS.png";
import medicosActive from "../assets/images/MEDICOS-02.png";
import sedes from "../assets/images/SEDES.png";
import sedesActive from "../assets/images/SEDES-02.png";
import ajustes from "../assets/images/AJUSTES.png";
import ajustesActive from "../assets/images/AJUSTES-02.png";

const Tab = createBottomTabNavigator();

export default function BottomNavigator(){
    return (
        <Fragment>
            <Bar />
            <Tab.Navigator
                lazy={true}
                initialRouteName={HOME}
                tabBarOptions={{
                    style: {
                        height: 80,
                    },
                    activeTintColor: "#fff",
                    inactiveTintColor: "lightgray",
                    inactiveBackgroundColor: "#5e9931",
                    activeBackgroundColor: "#5e9931",
                    tabStyle: {
                        paddingVertical: 7,
                    },
                }}>
                    <Tab.Screen
                            name={HOME}
                            component={Home}
                            options={{
                                tabBarLabel: "Inicio",
                                tabBarIcon: ({ focused, size }) =>
                                    focused ? (
                                        <Image
                                            style={{
                                                width: size + 20,
                                                height: size + 20,
                                            }}
                                            source={promocionesActive}
                                        />
                                    ) : (
                                        <Image
                                            style={{
                                                width: size + 10,
                                                height: size + 10,
                                            }}
                                            source={promociones}
                                        />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name={CITAS}
                            component={Citas}
                            options={{
                                tabBarLabel: "Reservas",
                                tabBarIcon: ({ focused, size }) =>
                                    focused ? (
                                        <Image
                                            style={{
                                                width: size + 20,
                                                height: size + 20,
                                            }}
                                            source={misCitasActive}
                                        />
                                    ) : (
                                        <Image
                                            style={{
                                                width: size + 10,
                                                height: size + 10,
                                            }}
                                            source={misCitas}
                                        />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name={DOCTORES}
                            component={Doctores}
                            options={{
                                tabBarLabel: "Médicos",
                                tabBarIcon: ({ focused, size }) =>
                                    focused ? (
                                        <Image
                                            style={{
                                                width: size + 20,
                                                height: size + 20,
                                            }}
                                            source={medicosActive}
                                        />
                                    ) : (
                                        <Image
                                            style={{
                                                width: size + 10,
                                                height: size + 10,
                                            }}
                                            source={medicos}
                                        />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name={SEDES}
                            component={Sedes}
                            options={{
                                tabBarLabel: "Sedes",
                                tabBarIcon: ({ focused, size }) =>
                                    focused ? (
                                        <Image
                                            style={{
                                                width: size + 20,
                                                height: size + 20,
                                            }}
                                            source={sedesActive}
                                        />
                                    ) : (
                                        <Image
                                            style={{
                                                width: size + 10,
                                                height: size + 10,
                                            }}
                                            source={sedes}
                                        />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name={PERFIL}
                            component={Perfil}
                            options={{
                                tabBarLabel: "Mi Cuenta",
                                tabBarIcon: ({ focused, size }) =>
                                    focused ? (
                                        <Image
                                            style={{
                                                width: size + 20,
                                                height: size + 20,
                                            }}
                                            source={ajustesActive}
                                        />
                                    ) : (
                                        <Image
                                            style={{
                                                width: size + 10,
                                                height: size + 10,
                                            }}
                                            source={ajustes}
                                        />
                                    ),
                            }}
                        />
            </Tab.Navigator>
        </Fragment>
    );
}
