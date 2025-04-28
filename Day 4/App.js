import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllCategoriesDisplay from './screens/AllCategoriesDisplay';
import CategoryDisplay from './screens/CategoryDisplay';
import ItemDisplay from './screens/ItemDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light" backgroundColor='#e84031'/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="All Categories" >
    <Stack.Screen name="All Categories" component={AllCategoriesDisplay}/>
    <Stack.Screen name="CategoryDisplay" component={CategoryDisplay} />
    <Stack.Screen name="ItemDisplay" component={ItemDisplay} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
