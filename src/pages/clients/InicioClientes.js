import React from 'react';
import{SafeAreaView,View,Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons';
import teste1 from '../../../assets/teste1.jpg';
import teste from '../../../assets/teste.png';




export default function InicioClientes({navigation}){
    return( 
    <SafeAreaView style={styles.container}>
        <View style={styles.Cards}>
            <View style={styles.ProfileCard}>
                <Image style={styles.avatar} source={teste}/>
                <View style={styles.footer}>
                    <Text style={styles.name}>Victor</Text>
                        <View style={styles.buttonbio}>
                            <Text sytle={styles.infos}>Mais informações</Text>
                            <Text sytle={styles.arrow}>v</Text>
                        </View>
                        <View style = {styles.scrow}> <Text> Olá Mundo! </Text></View>
                </View>
            </View>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonDeslike}>
                <FontAwesome name="times" size={70} color="#F06795"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonFilter}>
                <FontAwesome name="filter" size={40} color="#CDF820"></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLike}>
                <FontAwesome name="check-circle" size={70} color="#1EDF25"></FontAwesome>
            </TouchableOpacity>
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
    ProfileCard:{
        borderWidth: 10,
        borderColor: "#AEC2DF",
        borderRadius: 8,
        flex: 1,
        alignSelf:'stretch',
        justifyContent:'center',
        maxHeight:480,
        backgroundColor: "#DDD"
    },
    Cards:{
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        margin: 8,
        overflow: 'hidden', 
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        bottom: 0
    }, 
    avatar:{
        flex: 1,
        height: 300,
    },
    footer:{
        backgroundColor: '#AEC2DF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center'
    },
    name:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000'
    },
    buttonbio:{
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 15,
        backgroundColor: "#DDD",
        marginTop: 5,
        lineHeight: 20,
        alignItems: 'center'
    },
    buttonsContainer:{
        height: 75,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        right: 15 
    },
    buttonDeslike:{
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1050,
        elevation: 2,
        shadowColor: '#F06795',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    buttonLike:{
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1050,
        elevation: 2,
        shadowColor: '#1EDF25',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
            }
        },
        buttonFilter:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1100,
        elevation: 2,
        shadowColor: '#CDF820',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
            }
        },
        scrow: {
            
        }
})