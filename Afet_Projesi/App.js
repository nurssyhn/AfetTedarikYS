// import React from 'react'
// import { View,Text } from 'react-native'

// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native'
// import Welcome from './src/pages/Welcome'
// import İhtiyaçNoktasi from './src/pages/İhtiyaçNoktasi'
// import TirIzleme from './src/pages/TirIzleme'
// import UyeOl from './src/pages/UyeOl'

// const Stack=createNativeStackNavigator();

// const App=()=>{
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={Welcome}/>
//         <Stack.Screen name="İhtiyaç Noktası" component={İhtiyaçNoktasi}/>
//         <Stack.Screen name="Tır İzleme" component={TirIzleme}/>
//         <Stack.Screen name="Üye ol" component={UyeOl}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const İhtiyaçNoktasi = ({ navigation }) => {
  const [needs, setNeeds] = useState('');
  const [urgency, setUrgency] = useState('');

  const submitRequest = () => {
    if (!needs.trim() || !urgency.trim()) {
      Alert.alert('Uyarı', 'Lütfen ihtiyaçlarınızı ve aciliyet durumunu belirtin.');
      return;
    }

    // Yardım talebi gönderildiğinde burada bir işlem yapabilirsiniz
    // Örneğin, bir API'ye talep gönderme

    Alert.alert('Başarı', 'Yardım talebiniz alınmıştır. En kısa sürede taleplerinizi ileteceğiz!');
    
    // Talep gönderildikten sonra Welcome ekranına geri dön
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>İhtiyaçlarınızı belirtin:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Örneğin: Gıda, su, ilaç, giyim, vb."
        value={needs}
        onChangeText={(text) => setNeeds(text)}
      />

      <Text style={styles.label}>Aciliyet Durumu:</Text>
      <TouchableOpacity
        style={[styles.button, urgency === 'acil' && styles.selectedButton]}
        onPress={() => setUrgency('acil')}
      >
        <Text style={styles.buttonText}>Acil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, urgency === 'cokAcil' && styles.selectedButton]}
        onPress={() => setUrgency('cokAcil')}
      >
        <Text style={styles.buttonText}>Çok Acil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, urgency === 'normal' && styles.selectedButton]}
        onPress={() => setUrgency('normal')}
      >
        <Text style={styles.buttonText}>Normal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={submitRequest}>
        <Text style={styles.submitButtonText}>Talep Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#427D9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
    marginBottom:15
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 25,
    color: 'white',
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight:"bold"
  },
  selectedButton: {
    backgroundColor: '#2980b9',
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 26,
  },
});

export default İhtiyaçNoktasi;



