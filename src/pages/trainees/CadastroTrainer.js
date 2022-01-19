import React from 'react';
import { ScrollView, SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function CadastroTrainer({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>CADASTRO</Text>

            <View style={styles.OpBox}>
                <TouchableOpacity style={styles.Clientebox} onPress={()=>navigation.navigate('CadastroCliente')}>
                    <Text style={styles.cliente}> Cliente </Text>
                </TouchableOpacity>

                <View style={styles.Trainerbox}>
                    <Text style={styles.trainer}>Personal</Text>
                </View>
            </View>

            <ScrollView style={styles.form}>
                <Text style={styles.label}>*NOME DE USUÁRIO: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='crie um nome de usuario'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                />

                <Text style={styles.label}>*EMAIL: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='example@xmail.com.br'
                    placeholderTextColor = "#999"
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <Text style={styles.label}>*SENHA: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='sua senha'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <Text style={styles.label}>*CONFIRMAR SENHA: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='reescreva sua senha'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <Text style={styles.label}>Foto de Perfil: </Text>
                <TouchableOpacity style={[styles.buttonPic, {flexDirection: 'row'}]}>
                    <Entypo name="camera" size={20} color="#000"/>
                    <Text style={styles.buttonTextPic}>  Adicionar da Galeria</Text>
                </TouchableOpacity>

                <Text style={styles.label}>Sobre mim</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        paddingHorizontal: 20,
                        paddingBottom: 104,
                        paddingTop: 8,
                        fontSize: 16,
                        color: '#444',
                        width: 312,
                        marginBottom: 24,
                        borderRadius: 10,
                        backgroundColor: '#FAF1F1'
                    }}
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <Text style={styles.label}>Foco de treino(selecione 1 ou mais):</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.infosTreino1}>
                        <Text> Cardio </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.infosTreino2}>
                        <Text> Musculação </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.infosTreino1}>
                        <Text> HIIT </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.infosTreino2}>
                        <Text> Funcional </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Margem de preço (por dia):</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.infosPreco1}>
                        <Text> R$:100 - R$:200 </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.infosPreco2}>
                        <Text> R$:201 - R$:400 </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.infosPreco1}>
                        <Text> R$:401 - R$:600 </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.infosPreco2}>
                        <Text> R$:601 - R$:1000 </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Redes Sociais: </Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    />
                <Text style={styles.label}>WhatsApp: </Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NavBar')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: '#444',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
    },

    OpBox: {
        flexDirection: 'row',
    },

    Trainerbox: {
        height: 42,
        backgroundColor: '#1EDF25',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    
    trainer: {   
        color: '#fff',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        marginHorizontal: 8,
    },

    Clientebox: {
        height: 42,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },

    cliente: {
        color: '#C09B9B',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        marginHorizontal: 8,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 32,
        marginTop: 24,
        marginBottom: 24,
        backgroundColor: '#AEC2DF',
        marginHorizontal: 16,
        borderRadius: 16,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 24,
        borderRadius: 10,
        backgroundColor: '#FAF1F1'
    },

    button: {
        height: 48,
        backgroundColor: '#1EDF25',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginLeft: 226,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

    buttonTextPic: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
    },

    buttonPic: {
        backgroundColor: '#F00404',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 44,
        marginBottom: 24,
    },

    infosTreino1: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#FAF1F1',
        width: 120,
        height: 32,
        marginBottom: 16,
    },
    
    infosTreino2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#FAF1F1',
        width: 120,
        height: 32,
        marginLeft: 32,
        marginBottom: 16,
    },

    infosPreco1: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#FAF1F1',
        width: 128,
        height: 40,
        marginBottom: 16,
    },
    
    infosPreco2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#FAF1F1',
        width: 128,
        height: 40,
        marginLeft: 32,
        marginBottom: 16,
    }
});