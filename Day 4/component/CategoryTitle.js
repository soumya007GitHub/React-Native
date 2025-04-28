import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryTitle({ categoryId, image, title, style }) {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('CategoryDisplay', { categoryId })}>
    <View style={[styles.titleContainer, style]}>
    <Image source={image} style={styles.image} resizeMode='cover'/>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: 170,
    height: 180,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingBottom: 30,
    backgroundColor: '#ededed',
    elevation: 5
  },
  image: {
    width: 170, 
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  titleText: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
  },
});
