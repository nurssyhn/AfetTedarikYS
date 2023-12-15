import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';

import NewsCard from '../components/NewsCard';
import news_data from '../news_data/news_data.json';
import news_banner_data from '../news_data/news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Duyurular</Text>

      <FlatList
  ListHeaderComponent={() => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map((bannerNews) => (
        <Image
          key={bannerNews.u_id || Math.random().toString()}
          style={styles.banner_image}
          source={{ uri: bannerNews.imageUrl }}
        />
      ))}
    </ScrollView>
  )}
  keyExtractor={(item) => (item && item.u_id ? item.u_id.toString() : Math.random().toString())}
  data={news_data}
  renderItem={renderNews}
/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft:90,
    marginBottom:20
  },
});

export default App;
