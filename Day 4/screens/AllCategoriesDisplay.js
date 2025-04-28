import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTitle from '../component/CategoryTitle';

export default function AllCategoriesDisplay() {
  return (
    <View style={styles.container}>
    <View style={styles.flatListView}>
    <FlatList
        data={CATEGORIES}
        renderItem={({item}) => <CategoryTitle categoryId = {item.id} image={item.image} title={item.title} style={styles.categoryTitle}/>}
        keyExtractor={item => item.id}
        numColumns = {2}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListView: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10
  },
  categoryTitle: {
    marginHorizontal: 10
  }
});
