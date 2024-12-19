import React, {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy';
import MealsList from '../components/Meals/MealsList';
export default function MealsScreen({navigation, route}) {
  const {params} = route;
  const displayedMeals = MEALS.filter(
    meal => meal.categories.indexOf(params.id) !== -1,
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(item => item.id === params.id).title,
    });
  }, [navigation, params.id]);
  return <MealsList items={displayedMeals} />;
}
