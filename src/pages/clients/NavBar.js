import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import MatchsCLient from './MatchsClientes';
import ProfileCLient from './PerfilClientes';
import InicioClientes from './InicioClientes';

const home = 'Home';
const matchs = 'Matchs';
const profile = 'Profile';

const Tab = createMaterialBottomTabNavigator();

export default function NavBar(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={home}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routeName = route.name;
                        if (routeName === home){
                            iconName = focused ? 'home': 'home-outline';

                        }else if (routeName === matchs){
                            iconName = focused ? 'list': 'list-outline';

                        }else if (routeName === profile){
                            iconName = focused ? 'settings': 'settings-outline';

                        }
                        return <Ionicons name={iconName} size={26} color={color}/>
                    },

                })}
                activeColor="#FFFFFF"
                inactiveColor="#1EDF25"
                barStyle={{ backgroundColor: '#000000' }}
                >
                    <Tab.Screen name={home} component ={InicioClientes}/>
                    <Tab.Screen name={matchs} component ={MatchsCLient}/>
                    <Tab.Screen name={profile} component ={ProfileCLient}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}