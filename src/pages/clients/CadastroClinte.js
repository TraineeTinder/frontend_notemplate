import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroCliente() {
    return( 
            <View style={styles.container}>
                <Text style={styles.titulo}>CADASTRO COMO CLIENTE</Text>

                <View>
                    <TouchableOpacity style={styles.button2}> 
                        <Text style={styles.buttonText}>Ir para cadastro de trainee</Text>
                    </TouchableOpacity>
                </View>

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
                        placeholder='example@xmail.com.br'
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
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: '#444',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
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
    },

    button2:{
        height: 42,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    }
});