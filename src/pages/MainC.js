import React from 'react';
import{SafeAreaView,View,Image, Text, StyleSheet} from 'react-native';
import teste from '../../assets/teste1.jpg';

export default function Main(){
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <View style={styles.Cards}>
                <Text style={styles.name}>Goku</Text>
                <Image style={styles.avatar} source={teste}/>
                    <View style={styles.footer}>
                        <Text sytle={styles.infos}>Mais informações</Text>
                        <Text sytle={styles.arrow}>v</Text>                   
                    </View>
            </View>
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
    Cards:{
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        backgroundColor: "#AEC2DF",
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        maxHeight:500,
    },
    card:{
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        margin: 8,
        overflow: 'hidden', 
        position: 'absolute',
        top: 25,
        left: 0,
        right: 0,
        bottom: 0
    }, 
    
    name:{
        //position: 'absolute',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
    },

    avatar:{
        flex: 1,
        height: 300,
    },

    infos:{
        fontSize: 12,
        color: '#DDD',        
    }, 

    arrow:{
        fontSize: 12,
        color: '#DDD',        
    }, 

    footer:{
        backgroundColor: '#DDD',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center'
    },

})
