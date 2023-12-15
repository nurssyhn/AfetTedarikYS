import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sikayet = ({ navigation }) => {
  const [sikayet, setSikayet] = useState('');

  const handleGonder = () => {
    // Burada şikayeti gönderme işlemi gerçekleştirilebilir, örneğin bir API çağrısı yapılabilir.
    // Bu örnek uygulamada şu anda sadece konsola yazdırıyoruz.
    console.log('Şikayetiniz iletilmiştir:', sikayet);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Belediyemize iletmek istediğiniz şikayetleri aşağıdaki kutucuğa yazınız.</Text>
      <TextInput
        style={styles.input}
        value={sikayet}
        onChangeText={(text) => setSikayet(text)}
        multiline={true}
        numberOfLines={4}
        placeholder="Şikayetlerinizi buraya yazın"
      />
      <TouchableOpacity style={styles.button} onPress={handleGonder}>
        <Text style={styles.buttonText}>Şikayeti Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'tomato',
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

export default Sikayet;
