import React from 'react';
import{SafeAreaView,View,Image, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {FontAwesome} from 'react-native-vector-icons';
import teste1 from '../../../assets/teste1.jpg';
import teste from '../../../assets/teste.png';




export default function InicioClientes({navigation}){
    return( 
        <SafeAreaView style={styles.container}>
            <View style={styles.Cards}>
            <Text style={styles.name}>Victor</Text>
                        <View style={styles.footer}>
                            <ScrollView>
                                <View style={styles.ProfileCard}>
                                    <Image style={styles.avatar} source={teste}/>
                                </View>
                                <View style={styles.buttoninfos}>
                                    <Text sytle={styles.infos}>Mais informações</Text>
                                        <Text sytle={styles.arrow}>v</Text>
                                </View>
                                <View style = {styles.prices}>
                                    <Text style={styles.titleprices}>Preço:</Text> 
                                    <View style={styles.myprice}>
                                        <Text>Preços....</Text>
                                    </View>
                                </View>
                                
                                <View style = {styles.bio}>
                                    <Text style={styles.titleBio}>Sobre mim:</Text> 
                                    <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat odio a malesuada venenatis. Vestibulum dignissim rutrum est, at facilisis arcu finibus vitae. Donec varius, leo vel interdum fringilla, nisl turpis placerat est, sed consectetur risus purus vitae elit. Nulla suscipit, elit sed pretium tempor, libero quam lobortis nulla, eu ultricies sapien sem ac augue. Maecenas nec porttitor enim, sed blandit metus. Aenean vel convallis erat, ut dapibus massa. Nam iaculis nibh mi, et sollicitudin nisi pulvinar a. Maecenas tempor nec felis vitae lobortis. Fusce a mi lorem. Sed non sollicitudin enim. Cras tortor magna, imperdiet in vulputate eget, lacinia ac ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae arcu nisl. Nam metus elit, faucibus vel odio nec, finibus scelerisque libero. Sed at enim vitae orci facilisis gravida. </Text>
                                </View>
                                </ScrollView>
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
        justifyContent:'space-between'
    },
    ProfileCard:{
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 20,
        flex: 1,
        alignSelf:'stretch',
        justifyContent:'center',
        height: 380,
        width: 350,
        backgroundColor: "#DDD"
    },
    Cards:{
        paddingTop: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#FFF",
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
        height: 200,
        borderRadius: 20,
        borderColor: '#FFFF',
        borderRadius: 8
    },
    footer:{
        maxHeight:500,
        marginTop: 60,
        backgroundColor: '#AEC2DF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 8
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 20
    },
    buttoninfos:{
        alignSelf:'center',
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 15,
        backgroundColor: "#DDD",
        lineHeight: 20,
        alignItems: 'center',
    },
    infos:{
        color: '#1EDF25',
        position: 'absolute'
    },
    arrow:{
        color: '#1EDF25',
        position: 'absolute'
    },
    buttonsContainer:{
        height: 30,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        right: 15,
    },
    buttonDeslike:{
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1200,
        elevation: 2,
        shadowColor: '#F06795',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderWidth: 3,
        borderColor: '#F06795'
    },
    buttonLike:{
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1200,
        elevation: 2,
        shadowColor: '#1EDF25',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
            },
            borderWidth: 3,
            borderColor: '#1EDF25'
        },
        buttonFilter:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 1220,
        elevation: 2,
        shadowColor: '#CDF820',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
            },
            borderWidth: 3,
            borderColor: '#CDF820'
        },
        bio: {
            margin: 20,
            borderWidth: 1,
            borderColor: "#DDD",
            borderRadius: 15,
            backgroundColor: "#DDD",
            maxWidth:350 
            
        },
        titleBio:{
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'left'
        },
        prices:{
            margin: 20,
            borderWidth: 1,
            borderColor: "#DDD",
            borderRadius: 15,
            backgroundColor: "#DDD",
            maxWidth:350 
        },
        titleprices:{
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'left'
        },
        myprice:{
            alignSelf:'center',
            borderRadius: 15,
            backgroundColor: "#fff",
        }
})