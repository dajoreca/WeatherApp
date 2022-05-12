import React from 'react';
import { 
  SafeAreaView,
  StyleSheet, 
  Text, 
  View,
  Keyboard, 
  TouchableWithoutFeedback,
} from 'react-native';
import Formulario from './Components/Formulario';


const App = () => {

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={ () => ocultarTeclado() }>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center'
  },
  contenido:{
    marginHorizontal: '2.5%'
  }


});

export default App;