import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchablePacity, TouchableOpacity, Linking, TouchableWithoutFeedback, Keyboard, Image, SwipeableListView, Alert } from 'react-native';
import pitaguras from './assets/img/pitaguras.jpeg';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export default function App(){

  const [cateto, setCateto] = useState('');
  const [cateto2, setCateto2] = useState('');
  const [hipotenusa, setHipotenusa] = useState('');
  const [resposta, setResposta] = useState('');


  function handleSubmit(){
    
    if (cateto !== '' && cateto2 !== '' && hipotenusa !== '') {
      setResposta(<span>Por favor, digite apenas dois valores</span>)
    }
    else if (cateto === "") {
      const cateto = Math.sqrt((hipotenusa * hipotenusa) - (cateto2 * cateto2))
      setResposta(<span>Cateto Adjacente = {cateto}</span>)
      alert( 'Cateto Adjacente é igual a ' + `${cateto}` )

    } else if (cateto2 === "") {
      const cateto2 = Math.sqrt((hipotenusa * hipotenusa) - (cateto * cateto))
      setResposta(<span>Cateto Oposto = {cateto2}</span>)
      alert( 'Cateto Oposto é igual a ' + `${cateto2}` )

    } else {
      const resposta = Math.hypot(cateto, cateto2);

      setResposta(<span>Hipotenusa = {resposta}</span>)
      alert( 'A Hipotenusa é igual a ' + `${resposta}`)
    }

  };

return (
  <ScrollView>
    <DismissKeyboard>
    
  <View style={styles.container}>
     <Text style={styles.title}>Pitagoras sou seu fã 😍</Text>

     <Text  style={styles.SubText}>Como forma de homenagem, gostaria de facilitar os seus calculos com um pouco de tecnologia</Text>

     <TextInput
     style={styles.input}
     value={cateto}
     onChangeText={ (cateto) => setCateto(cateto) }
     placeholder="Cateto adjacente"
     keyboardType="numeric"
     onfocus="this.cateto='';"
     />

     <TextInput
     style={styles.input}
     value={cateto2}
     onChangeText={ (cateto2) => setCateto2(cateto2) }
     placeholder="Cateto oposto"
     keyboardType="numeric"
     onfocus="this.cateto2='';"
     />

<TextInput
     style={styles.input}
     value={hipotenusa}
     onChangeText={ (hipotenusa) => setHipotenusa(hipotenusa) }
     placeholder="Hipotenusa"
     keyboardType="numeric"
     onfocus="this.hipotenusa='';"
     />


     <TouchableOpacity 
     style={styles.button}
     onPress={handleSubmit}
     >
       <Text
       style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

    <Image style={styles.img} source={require('./assets/img/pitaguras.jpeg')}/>

    <Text 
         style={styles.introwhats}>Clique no link abaixo caso tenha gostado desse calculo, vamos apoiar o Mestre Pitagoras!</Text>
          <Text 
          style={styles.whats}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5511975558289'
            );
          }}>WhatsApp
          </Text>
          
    </View>
    </DismissKeyboard>
    </ScrollView>
  );
  
}

 const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor: '#314059',
 },

title:{
  width: 380,
  textAlign: 'center',
  fontFamily: 'Times New Roman',
  marginTop: 30,
  fontSize: 35,  
  padding: 20,
  color: '#121212',
  backgroundColor: '#A7B8FE',
  borderRadius: 1000,
},


input:{
  backgroundColor: '#CED7FF',
    borderRadius: 15,
    marginTop: 45,
    margin: 10,
    padding: 20,
    fontSize: 15,
    color: '#000004',
  },

 button:{
  justifyContent: 'center',
  alignItems: 'center',
  //marginTop: 54,
  marginTop: 45,
  margin: 21,
  backgroundColor: '#7185AA',
  padding: 10,
 },

 buttonText:{
   color: '#fff',
   fontSize: 25,
   textAlign:"center",
   fontWeight:'bold',
 },

 SubText:{
  color: '#fff',
  fontSize: 20,
  textAlign:"center",
  fontWeight:'bold',
  marginTop:25,
},

img:{
width:500,
height:400,

},

 introwhats:{
   
  fontFamily: 'Times New Roman',
  fontSize: 25,
  textAlign:"center",
  fontWeight:'bold',
  marginTop: 50,
  backgroundColor: '#7185AA',

 },

 whats:{
  fontSize: 15,
  textAlign:"center",
  fontWeight:'bold',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  margin: 100,
  backgroundColor: '#8ad24e',
  padding: 10,
   }
 } );