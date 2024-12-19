/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetails from './screens/MealDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteContextProvider from './store/context/favorite-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteScreen from './screens/FavoriteScreen';
import {Provider} from 'react-redux';
import {store} from './store/redux/favorites-store';

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenWithDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#ffff',
        headerStyle: {
          backgroundColor: '#403b59',
        },
        sceneStyle: {
          backgroundColor: '#403b52',
        },
        drawerContentStyle: {
          backgroundColor: '#403b59',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#403b52',
      }}>
      <Drawer.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',

          drawerIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="WishList"
        component={FavoriteScreen}
        options={{
          title: 'WishList',
          drawerIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: '#403b52',
              },
              headerStyle: {
                backgroundColor: '#403b59',
              },
              headerTintColor: '#fff',
            }}>
            <RootStack.Screen
              name="MealsCategories"
              component={HomeScreenWithDrawer}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name={'MealsOverView'}
              component={MealsScreen}
              options={({route}) => ({
                title: route.path,
              })}
            />
            <RootStack.Screen name={'MealDetails'} component={MealDetails} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>

      {/* </FavoriteContextProvider> */}
    </>
  );
}

export default App;
