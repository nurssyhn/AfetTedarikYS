import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Dilek from './Dilek';

const Hizmetlerimiz = ({ navigation }) => {
  const goToDilek = () => {
    navigation.navigate('Dilek');
  };

  const goToŞikayet = () => {
    navigation.navigate('Şikayet');
  };

  const goToÖneri = () => {
    navigation.navigate('Öneri');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dilek, Şikayet ve Önerilerinizi ilgili alanlara tıklayarak belirtiniz.</Text>
        <Button text="Dilek" onPress={goToDilek} />
        <Button text="Şikayet" onPress={goToŞikayet} />
        <Button text="Öneri" onPress={goToÖneri} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ACDD7",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default Hizmetlerimiz;


