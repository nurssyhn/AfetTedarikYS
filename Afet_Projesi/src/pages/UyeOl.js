import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UyeOl = ({ navigation }) => {
  const [authorityName, setAuthorityName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveAuthorityInfo = () => {
    // Burada yetkili bilgilerini kaydetme işlemi gerçekleştirilebilir.
    // Örneğin, bir API'ye POST isteği gönderilebilir.
    // Backend kısmı burada mock olarak düşünülmüştür.

    console.log('Yetkili Adı:', authorityName);
    console.log('Telefon Numarası:', phoneNumber);

    // Yetkili bilgileri kaydedildikten sonra bir sonraki ekrana geçiş yapabilirsiniz.
    // navigation.navigate('EmergencyInfoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yetkili Kaydı</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Yetkili Adı:</Text>
        <TextInput
          style={styles.input}
          value={authorityName}
          onChangeText={text => setAuthorityName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefon Numarası:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={saveAuthorityInfo}>
        <Text style={styles.buttonText}>Bilgileri Kaydet</Text>
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
      fontSize: 18,
    },
  });
  

// ... Diğer stillendirme ve export işlemleri

export default UyeOl;