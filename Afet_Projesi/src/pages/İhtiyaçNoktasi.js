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
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
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
    fontSize: 18,
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
    fontSize: 18,
  },
});

export default İhtiyaçNoktasi;
