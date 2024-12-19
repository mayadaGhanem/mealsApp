import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from '../data/dummy';
import CategoryTile from '../components/CategoryTile';

function CategoriesScreen({navigation, route}) {
  function categoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate('MealsOverView',{
        id:itemData.item.id,
        title:itemData.item.title,
        color:itemData.item.color,
      });
    }
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={categoryItem}
        numColumns={2}
      />
    </View>
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
