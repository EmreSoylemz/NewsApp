import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import news_banner_data from '../../news_banner_data.json';
import styles from './CustomScrollView.style';

const CustomScrollView = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {news_banner_data.map(bannerNews => (
          <Image
            style={styles.bannerImage}
            source={{uri: bannerNews.imageUrl}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CustomScrollView;
