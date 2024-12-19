import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, Platform} from 'react-native';
import MealDetails from '../MealDetails';

export default function MealTile({
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  handlePress,
  id,
}) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('MealDetails', {id});
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={handlePress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.img} />
            <Text style={[styles.text, styles.title]}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            duration={duration}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    margin: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 8,
    shadowOpacity: 0.35,
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  text: {
    color: '#403b52',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },

  img: {
    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
