import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";

export default function MatchsCLient({navigation}){
    return(
            <SafeAreaView style={styles.container}>
                <View style={styles.geral}>
                    <Text onPress={() => navigation.navigate('Inicio')}
                        style={styles.alert}Matchs Screen>
                    </Text>
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