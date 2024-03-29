import { View, TouchableOpacity, StyleSheet } from 'react-native';

const BackDrop = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <TouchableOpacity
      style={styles.backdrop}
      onPress={onClick}
      activeOpacity={1}
    />
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 900,
  },
});

export default BackDrop;
