import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import MealTile from './MealTile';

export default function MealsList({items}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={listItem => <MealTile {...listItem.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 8,
  },
});
