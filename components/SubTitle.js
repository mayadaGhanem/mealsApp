import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function SubTitle({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderBottomWidth: 2,
    borderBlockColor: '#aca2de',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  title: {
    color: '#aca2de',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
