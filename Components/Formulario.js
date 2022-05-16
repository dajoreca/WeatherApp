import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const {pais, ciudad} = busqueda;

    const [ animacionBoton ] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === '' ) {
            mostrarAlerta();
            return;
        }

        //Consultar la API
        guardarConsultar(true) 
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y un país para la búsqueda',
            [{ text: 'Entendido'}]
        )
    }

    const animacionEntrada = () => {
        Animated.spring(animacionBoton, {
            toValue: .9,
            useNativeDriver: true
        }).start();
    }
    const animacionSalida = () => {
        Animated.spring(animacionBoton, {
            toValue: 1,
            friction: 4, //controla el rebote
            tension: 30,  //cuanto mas bajo, mas suavidad del movimiento
            useNativeDriver: true
        }).start();
    }

    const estiloAnimacion = {
        transform: [{scale: animacionBoton}]
    }

    return (  
        <>
            <View>
                <View style={styles.formulario}>
                    <TextInput 
                        value={ciudad}
                        style={styles.input}
                        onChangeText={ ciudad => guardarBusqueda({ ...busqueda, ciudad}) }
                        placeholder="Ciudad"
                        placeholderTextColor='#666'
                        

                    />
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        itemStyle={{height:120, backgroundColor:'#FFF'}}
                        onValueChange={ pais => guardarBusqueda({ ...busqueda, pais}) }
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Italia" value="IT" />
                        <Picker.Item label="Francia" value="FR" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Argentina" value="AR" />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={ () => animacionEntrada() } //cuando presionas
                    onPressOut={ () => animacionSalida() } //cuando sueltas //Ambas solo en WithoutFeedback, no esta en Highlight
                    onPress={ () => consultarClima() }
                >
                    <Animated.View
                        style={[styles.btnBuscar, estiloAnimacion]}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBuscar:{
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'

    },
    textoBuscar:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18

    },

});
 
export default Formulario;