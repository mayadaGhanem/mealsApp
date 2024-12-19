import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function List({data}) {
  return (
    <View>
      {data.map(ingredient => (
        <Text key={ingredient} style={[styles.text]}>
          {ingredient}
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#ffff',
    backgroundColor: '#aca2de',
    padding: 4,
    borderRadius: 4,
    margin: 4,
  },
});
