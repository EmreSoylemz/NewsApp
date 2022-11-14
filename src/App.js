import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import NewsCard from './components/NewsCard/NewsCard';
import news_data from './news_data.json';
import CustomScrollView from './components/CustomScrollView/CustomScrollView';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.newsHeader}>Mürriyet</Text>
      <FlatList
        ListHeaderComponent={() => <CustomScrollView />}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //43C6AC
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  newsHeader: {
    fontWeight: 'bold',
    fontSize: 45,
  },
});

export default App;
