import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function CategoryTile({title, color, onPress}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#e0e0e0', borderless: true}} // Ripple effect for Android
        style={({pressed}) => [styles.button, {opacity: pressed ? 0.5 : 1}]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    height: 100,
  },
  button: {
    flex: 1,
    alignContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
