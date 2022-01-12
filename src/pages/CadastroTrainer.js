import React from 'react';
import { View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroTrainer() {
    return (
        <KeyboardAvoidingView enable={Platform == 'ios'} behavior='padding' style={styles.container}>
            <Text style={styles.titulo}>CADASTRO</Text>

            <View style={styles.form}>
                <Text style={styles.label}>*NOME DE USUÁRIO: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='seu nome de usuario'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <Text style={styles.label}>*EMAIL: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='seu nome de usuario'
                    placeholderTextColor = "#999"
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    />
                <Text style={styles.label}>*SENHA: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='seu nome de usuario'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                    />
                <Text style={styles.label}>*CONFIRMAR SENHA: </Text>
                <TextInput
                    style={styles.input}
                    placeholder='seu nome de usuario'
                    placeholderTextColor = "#999"
                    autoCorrect={false}
                    autoCapitalize='none'
                    />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 32,
        marginTop: 32,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 10
    },

    button: {
        height: 42,
        backgroundColor: '#1EDF25',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});