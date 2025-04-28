import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ItemTitle({ itemId, image, title, affordability, complexity }) {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('ItemDisplay', { itemId })}>
    <View style={styles.titleContainer}>
    <View>
      <Image source={{uri: image}} style={styles.image} resizeMode='cover'/></View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>Affordibility - {affordability}</Text>
        <Text>Complexity - {complexity}</Text>
        <Text>ItemId- {itemId}</Text>
      </View>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 150,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    backgroundColor: '#ededed',
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: 150, 
    height: '100%',
    borderRadius: 8
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  titleText: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 18,
    // textAlign: 'center',
  },
});
