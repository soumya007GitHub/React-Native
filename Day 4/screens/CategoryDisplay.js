import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import ItemTitle from '../component/ItemTitle';

export default function CategoryDisplay({ route, navigation }) {

  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  useLayoutEffect(() => {
    if (selectedCategory) {
      navigation.setOptions({
        title: selectedCategory.title,
      });
    }
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.flatListView}>
          <FlatList
              data={displayedMeals}
              renderItem={({item}) => <ItemTitle itemId = {item.id} image={item.imageUrl} title={item.title}
              affordability={item.affordability} complexity= {item.complexity} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator= {false}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
});
