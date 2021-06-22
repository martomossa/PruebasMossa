import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text, Alert, Button, Image } from 'react-native';

export default class LoginScene extends Component {
    render() {
        return (
            <TouchableOpacity  // Usa componentes en los que se puede hacer clic como fondo
                activeOpacity={1.0}  // Establecer el valor de cambio de transparencia cuando se hace clic en el fondo
                onPress={this.blurTextInput}  // Agregar evento de clic
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="username"  // Establecer descripción
                        onChangeText={this.onUsernameChanged}  // Agregar evento de cambio de valor
                        style={styles.input}
                        autoCapitalize='none'  // Establecer la primera letra para que no se capitalice automáticamente
                        underlineColorAndroid={'transparent'}  // Cambiar el color del subrayado a transparente
                        placeholderTextColor={'#ccc'}  // Establecer el color del marcador de posición
                        placeholder={'Usuario'}  // Establecer marcador de posición
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="password"  // Establecer descripción
                        onChangeText={this.onPasswordChanged}  // Agregar evento de cambio de valor
                        style={styles.input}
                        autoCapitalize='none'  // Establecer la primera letra para que no se capitalice automáticamente
                        underlineColorAndroid={'transparent'}  // Cambiar el color del subrayado a transparente
                        secureTextEntry={true}  // Establecer como cuadro de entrada de contraseña
                        placeholderTextColor={'#ccc'}  // Establecer el color del marcador de posición
                        placeholder={'Contraseña'}  // Establecer marcador de posición
                    />
                </View>
                <TouchableOpacity
                    onPress={this.login} // Agregar evento de clic
                    style={styles.button}>
                    <Text
                                                 style = {styles.btText}> Iniciar sesión </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.register}  // Agregar evento de clic
                    style={styles.button}>
                    <Text
                                                 style = {styles.btText}> Registrarse </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 350,
        height: 40,
        fontSize: 20, 
        color: '#fff',// El texto ingresado en el cuadro de entrada es blanco
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 380,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#00008b',
        marginBottom: 20,
    },
    button: {
        height: 50,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#00008b',
        marginTop: 10,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});