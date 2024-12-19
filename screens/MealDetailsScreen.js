import React, {useLayoutEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {MEALS} from '../data/dummy';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/SubTitle';
import List from '../components/List';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FavoriteContext} from '../store/context/favorite-context';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/slice';
export default function MealDetailsScreen({navigation, route}) {
  const {params} = route;
  const mealId = params.id;
  const dispatch = useDispatch();
  const favoriteMeals = useSelector(state => state.favoriteMeals.ids);

  // const favContext = useContext(FavoriteContext);
  // const isFavorite = favContext.ids.includes(mealId);
  const isFavorite = favoriteMeals.ids.includes(mealId);

  const displayedMeal = MEALS.find(meal => meal.id === mealId);
  function handleToggleFav() {
    !isFavorite
      ? dispatch(addFavorite(mealId))
      : dispatch(removeFavorite(mealId));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: MEALS.find(item => item.id === mealId).title,
      headerRight: () => (
        <Pressable onPress={handleToggleFav}>
          <Icon
            name={isFavorite ? 'heart' : 'heart-o'}
            size={22}
            color="#fff"
          />
        </Pressable>
      ),
    });
  }, [navigation, handleToggleFav]);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{uri: displayedMeal.imageUrl}} style={styles.img} />
        <Text style={[styles.text, styles.title]}>{displayedMeal.title}</Text>
      </View>
      <MealDetails
        styleText={styles.text}
        affordability={displayedMeal.affordability}
        duration={displayedMeal.duration}
        complexity={displayedMeal.complexity}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={displayedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={displayedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  text: {
    color: '#ffff',
  },
  img: {
    width: '100%',
    height: 200,
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
