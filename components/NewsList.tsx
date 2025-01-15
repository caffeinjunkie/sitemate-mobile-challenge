import React from 'react';
import { Image, View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

type NewsListType = {
  loading: boolean,
  error: any,
  articles: any //WIB
}

export const NewsList = ({ loading, error, articles }: NewsListType) => {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.article}>
          {item.urlToImage !== null && <Image
            source={{uri: item.urlToImage}}
            style={styles.image}
          />}
          <View style={styles.textSection}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.content}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  article: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textSection: {
    flex: 0.8,
    flexDirection: 'column'
  },
  image: {
    flex: 0.2,
    height: 100,
    borderRadius: 8,
    marginVertical: 8,
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default NewsList;
