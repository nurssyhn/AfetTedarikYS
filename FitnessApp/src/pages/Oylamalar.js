import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Oylamalar = () => {
  const [votes, setVotes] = useState([
    { id: 1, question: '1-Halk bahçelerinin temizliğinden memnun musunuz ?', option1: 'Evet', option2: 'Hayır', votesOption1: 0, votesOption2: 0, voted: false },
    { id: 2, question: '2-Hafta sonu düzenlenen halk pazarının hafta içi bazı günlerde de kurulmasını ister misiniz ?', option1: 'Evet', option2: 'Hayır', votesOption1: 0, votesOption2: 0, voted: false },
    { id: 3, question: '3-Semtimize yeni bir çocuk parkı yapılsın mı ?', option1: 'Evet', option2: 'Hayır', votesOption1: 0, votesOption2: 0, voted: false },
    { id: 4, question: '4-Yeni fatura ödeme sistemimizi faydalı buldunuz mu ?', option1: 'Evet', option2: 'Hayır', votesOption1: 0, votesOption2: 0, voted: false },
  ]);

  const handleVote = (questionId, option) => {
    setVotes((prevVotes) => {
      return prevVotes.map((vote) => {
        if (vote.id === questionId && !vote.voted) {
          if (option === 'option1') {
            vote.votesOption1 += 1;
          } else if (option === 'option2') {
            vote.votesOption2 += 1;
          }
          vote.voted = true;
        }
        return vote;
      });
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {votes.map((vote) => (
        <View key={vote.id} style={styles.pollContainer}>
          <Text style={styles.question}>{vote.question}</Text>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleVote(vote.id, 'option1')}
            disabled={vote.voted}
          >
            <Text style={styles.optionButtonText}>{vote.option1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleVote(vote.id, 'option2')}
            disabled={vote.voted}
          >
            <Text style={styles.optionButtonText}>{vote.option2}</Text>
          </TouchableOpacity>
          <Text style={styles.result}>
            Sonuçlar: {vote.option1} - {vote.votesOption1}, {vote.option2} - {vote.votesOption2}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 20,
  },
  pollContainer: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Oylamalar;
