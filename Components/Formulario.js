import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Animated } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {

    const [ animacionBoton ] = useState(new Animated.Value(1));

    return (  
        <>
            <View>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="Ciudad"
                        placeholderTextColor='#666'
                    />
                </View>s
                <View>
                    <Picker
                        itemStyle={{height:120, backgroundColor:'#FFF'}}
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
                <TouchableWithoutFeedback>
                    <View
                        style={styles.btnBuscar}
                    >
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </View>
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