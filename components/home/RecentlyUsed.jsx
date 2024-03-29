import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './home.style';
import { loadItem, saveItem } from '../common/recentlyused/DataStorage';


const RecentlyUsed = () => {
  const router = useRouter();

  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    loadRecentItems();
  }, []);

  const loadRecentItems = async () => {
    const items = await loadItem('recentItems');
    if (items !== null) {
      setRecentItems(JSON.parse(items));
    }
  };

  const handleUseItem = async () => {
    await saveItem('recentItems', 'Your recently used item here');
    loadRecentItems();
  };

  if (recentItems.length === 0) {
    return null; // Render nothing if there are no recent items
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Used Elements:</Text>
      {recentItems.map((item, index) => (
        <Text key={index} style={styles.recentItem}>{item}</Text>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleUseItem}>
        <Text style={styles.buttonText}>Use Item</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RecentlyUsed