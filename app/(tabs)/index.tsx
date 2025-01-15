import { StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

import { ThemedView } from '@/components/ThemedView';
import { SearchBox } from "@/components/SearchBox";
import NewsList from "@/components/NewsList";

import { API_KEY } from '../../config';

export default function HomeScreen() {
  const [keyword, setKeyword] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    const url = 'https://newsapi.org/v2/everything';
    const params = {
      q: keyword,
      from: '2025-01-01',
      sortBy: 'publishedAt',
      apiKey: API_KEY,
    };

    try {
      const response = await axios.get(url, { params });
      setArticles(response.data.articles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.titleContainer}>
        <SearchBox onSearch={() => {
          keyword.length > 0 && fetchNews()
        }} onChange={(val: string) => setKeyword(val)} value={keyword} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <NewsList loading={loading} error={error} articles={articles} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
