import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dilek = ({ navigation }) => {
  const [dilek, setDilek] = useState('');

  const handleSendDilek = () => {
    // Burada dileği gönderme işlemi gerçekleştirilebilir, örneğin bir API çağrısı yapılabilir.
    // Bu örnek uygulamada şu anda sadece konsola yazdırıyoruz.
    console.log('Dileğiniz gönderildi:', dilek);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Belediyemizden dilediklerinizi aşağıdaki kutucuğa yazınız.</Text>
      <TextInput
        style={styles.input}
        value={dilek}
        onChangeText={(text) => setDilek(text)}
        multiline={true}
        numberOfLines={4}
        placeholder="Dileklerinizi buraya yazın"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendDilek}>
        <Text style={styles.buttonText}>Dileği Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ADAB2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Dilek;
