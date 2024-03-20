import AsyncStorage from '@react-native-async-storage/async-storage';

const MAX_RECENT_ITEMS = 3;

export const saveItem = async (key, value) => {
  try {
    // Load existing recent items
    let recentItems = await loadItem('recentItems');
    recentItems = recentItems ? JSON.parse(recentItems) : [];

    // Add the new item to the beginning of the array
    recentItems.unshift(value);

    // Ensure the recent items list doesn't exceed the maximum limit
    if (recentItems.length > MAX_RECENT_ITEMS) {
      recentItems = recentItems.slice(0, MAX_RECENT_ITEMS);
    }

    // Save the updated recent items list
    await AsyncStorage.setItem(key, JSON.stringify(recentItems));
  } catch (error) {
    console.error('Error saving item:', error);
  }
};

export const loadItem = async (key) => {
  try {
    const itemValue = await AsyncStorage.getItem(key);
    return itemValue;
  } catch (error) {
    console.error('Error loading item:', error);
    return null;
  }
};
