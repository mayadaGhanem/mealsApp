import React, {createContext, useState} from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoriteContextProvider({children}) {
  const [favMealsIds, setFavMealsIds] = useState([]);

  function addFavorite(id) {
    console.log({id})
    setFavMealsIds(currentFavIds => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavMealsIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }
  const value = {ids: favMealsIds, addFavorite, removeFavorite};
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContextProvider;
