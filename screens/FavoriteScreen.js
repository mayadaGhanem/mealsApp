import React, {useContext} from 'react';
import MealsList from '../components/Meals/MealsList';
import {FavoriteContext} from '../store/context/favorite-context';
import {MEALS} from '../data/dummy';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function FavoriteScreen() {
  //   const favContext = useContext(FavoriteContext);
  const favoriteMeals = useSelector(state => state.favoriteMeals.ids);
  const displayedMeals = MEALS.filter(
    meal => favoriteMeals.indexOf(meal.id) !== -1,
  );
  if (!displayedMeals.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Favorite Meals added !</Text>
      </View>
    );
  }
  return <MealsList items={displayedMeals} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
