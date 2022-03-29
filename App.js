import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

    function handleSubmit(){
      const alt = altura/100;
      const imc = peso/(alt * alt);

      if(imc < 18.6){
        alert('Voce esta abaixo do peso! IMC: ' + imc.toFixed(2));
        }else if(imc >=18.6 && imc <= 24.9){
          alert('Voce esta com o peso ideal! IMC: ' + imc.toFixed(2));
          }else if(imc >=24.9){
            alert('Voce esta acima do peso! IMC: ' + imc.toFixed(2));
          }
    }

  return(

    <View style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder='Peso (kg)'
      keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura)}
        placeholder='Altura (m)'
        keyboardType='numeric'
      />
      <TouchableOpacity 
      style={styles.button} 
      onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },

    title:{
      color:'#004FAC',
      textAlign:'center',
      marginTop: 25,
      fontSize: 30,
    },

    input:{
      backgroundColor:'#004FAC',
      borderRadius: 10,
      margin:15,
      padding:15,
      color: '#FFF',
      fontSize: 23
    },


    button:{
      justifyContent:'center',
      alignItems:'center',
      margin: 15,
      backgroundColor:'#004FAC',
      padding: 10,
    
    },
    buttonText:{
      color:'white',
      fontSize:30,
      margin:5,
    }

  });

