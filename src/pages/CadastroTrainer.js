import React from 'react';
import { View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroTrainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO</Text>

            <View style={styles.OpBox}>
                <TouchableOpacity style={styles.Clientebox}>
                    <Text style={styles.cliente}> Cliente </Text>
                </TouchableOpacity>

                <View style={styles.Trainerbox}>
                    <Text style={styles.trainer}>Personal</Text>
                </View>
            </View>

            <View style={styles.form}>
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
                <TouchableOpacity style={styles.buttonPic}>
                    <Text style={styles.buttonTextPic}>Adicionar da Galeria</Text>
                </TouchableOpacity>

                <Text style={styles.label}>Sobre mim</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginTop: 24,
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
        height: 42,
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
    }
});