// Welcome.js

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
  function goToİhtiyaçNoktasi() {
    navigation.navigate('İhtiyaç Noktası');
  }

  function goToTirİzleme() {
    navigation.navigate('Tır İzleme');
  }

  function goToDepo() {
    navigation.navigate('Depo');
  }

  function goToAuthorityRegistration() {
    navigation.navigate('AuthorityRegistrationScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Afet Tedarik Yönetim Sistemi</Text>
      <TouchableOpacity style={styles.button} onPress={goToİhtiyaçNoktasi}>
        <Text style={styles.buttonText}>İhtiyaç Noktası</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToTirİzleme}>
        <Text style={styles.buttonText}>Tır İzleme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToDepo}>
        <Text style={styles.buttonText}>Depo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToAuthorityRegistration}>
        <Text style={styles.buttonText}>Üye Ol</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#427D9D',
  },
  header: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Welcome;
