import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MealDetails({
  affordability,
  complexity,
  duration,
  styleText,
}) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.text,styleText]}> {duration} m</Text>
      <Text style={[styles.text,styleText]}> {affordability.toUpperCase()}</Text>
      <Text style={[styles.text,styleText]}> {complexity.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#403b52',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
