import React from 'react';
import{SafeAreaView,View,Image, Text, StyleSheet} from 'react-native';
import teste from '../../../assets/teste.png';
import {NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import MatchsCLient from './MatchsClientes';
import ProfileCLient from './PerfilClientes';

const home = 'Home';
const matchs = 'Matchs';
const profile = 'Profile';

const Tab = createBottomTabNavigator();


export default function InicioClientes({navigation}){
    return( 
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <View style={styles.Cards}>
                <Image style={styles.avatar} source={teste}/>
                <View style={styles.footer}>
                    <Text style={styles.name}>Victor Rocha</Text>
                    <Text sytle={styles.bio}>Ola mundo!!1dsfdsfdsfdsfsadfdsafasdfdasfadsfdsaf</Text>
                </View>
            </View>
        </View>
        <NavigationContainer independent={true}>
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
                        return <Ionicons name={iconName} size={size} colo={color}/>
                    },

                })}>
                    <Tab.Screen name={home} component ={InicioClientes}/>
                    <Tab.Screen name={matchs} component ={MatchsCLient}/>
                    <Tab.Screen name={profile} component ={ProfileCLient}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
    );r
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'space-between',
    },
    Cards:{
        flex: 1,
        alignSelf:'stretch',
        justifyContent:'center',
        maxHeight:500
    },
    card:{
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        margin: 8,
        overflow: 'hidden', 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }, 
    avatar:{
        flex: 1,
        height: 200,
    }

})