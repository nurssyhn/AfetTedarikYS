import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TirIzleme = ({ navigation }) => {
  const [driverName, setDriverName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const saveDriverInfo = () => {
    // Burada şoför bilgilerini kaydetme işlemi gerçekleştirilebilir.
    // Örneğin, bir API'ye POST isteği gönderilebilir.
    // Backend kısmı burada mock olarak düşünülmüştür.

    console.log('Şoför Adı:', driverName);
    console.log('Araç Plakası:', licensePlate);

    // Şoför bilgileri kaydedildikten sonra izleme ekranına geçiş yap
    navigation.navigate('DriverTrackingScreen', {
      driverName,
      licensePlate,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Şoför Bilgileri</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Şoför Adı:</Text>
        <TextInput
          style={styles.input}
          value={driverName}
          onChangeText={text => setDriverName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Araç Plakası:</Text>
        <TextInput
          style={styles.input}
          value={licensePlate}
          onChangeText={text => setLicensePlate(text)}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={saveDriverInfo}>
        <Text style={styles.buttonText}>Bilgileri Kaydet</Text>
      </TouchableOpacity>

      {/* İzleme ekranına geçiş için buton */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('DriverTrackingScreen')}>
        <Text style={styles.buttonText}>İzleme Ekranına Git</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2c3e50', // Koyu mavi tonu
  },
  header: {
    fontSize: 42, 
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    marginBottom:25
  },
  inputContainer: {
    marginBottom: 20, 
    width: '100%',
  },
  label: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  input: {
    height: 60, 
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15, 
    padding: 15, 
    width: '100%',
    color: 'white',
    fontSize: 25,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 20, 
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default TirIzleme;
