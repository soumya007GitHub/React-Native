import { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

export default function ItemDisplay({ route, navigation }) {
  const { itemId } = route.params;
  
  const selectedItem = MEALS.find(meal => meal.id === itemId);

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Meal not found.</Text>
      </View>
    );
  }

  const { imageUrl, title, affordability, complexity, duration, isGlutenFree, isVegan, isVegetarian, isLactoseFree, ingredients, steps } = selectedItem;

  useLayoutEffect(() => {
    if (selectedItem) {
      navigation.setOptions({
        title: selectedItem.title,
      });
    }
  }, [navigation, selectedItem]);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.recipeView}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text>Affordability - {affordability}</Text>
          <Text>Complexity - {complexity}</Text>
          <Text>Duration - {duration} Minutes</Text>
        </View>
      </View>

      <View>
        <Text>isGlutenFree: {isGlutenFree ? 'Yes' : 'No'}</Text>
        <Text>isVegan: {isVegan ? 'Yes' : 'No'}</Text>
        <Text>isVegetarian: {isVegetarian ? 'Yes' : 'No'}</Text>
        <Text>isLactoseFree: {isLactoseFree ? 'Yes' : 'No'}</Text>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Ingredients:</Text>
        {ingredients.map((ingredient, index) => (
          <Text key={index}>{index+1}. {ingredient}</Text>
        ))}
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Steps:</Text>
        {steps.map((step, index) => (
          <Text key={index}>{index + 1}. {step}</Text>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  recipeView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
