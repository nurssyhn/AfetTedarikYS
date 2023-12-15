// Welcome.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button/Button';

const Welcome = ({ navigation }) => {
  function goToNews() {
    navigation.navigate('News');
  }

  function goToOylamalar() {
    navigation.navigate('Devam eden oylamalar');
  }

  function goToHizmetlerimiz() {
    navigation.navigate('Hizmetlerimiz');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Belediye Biziz!</Text>
      <TouchableOpacity style={styles.button} onPress={goToNews}>
        <Text style={styles.buttonText}>DUYURULAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToOylamalar}>
        <Text style={styles.buttonText}>DEVAM EDEN OYLAMALAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToHizmetlerimiz}>
        <Text style={styles.buttonText}>HİZMETLERİMİZ</Text>
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
    fontSize: 18,
  },
});

export default Welcome;
