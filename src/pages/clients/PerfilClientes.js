import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";

export default function ProfileCLient({navigation}){
    return(
            <SafeAreaView style={styles.container}>
                <View style={styles.geral}>
                    <Text >Futura tela de perfil do usuario...</Text>
                </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'space-between',
    },
    geral:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});