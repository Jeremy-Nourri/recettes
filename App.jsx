/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Categorie from './screens/Categorie';
import Recipe from './screens/Recipe';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title : 'All categories'}}/>
        <Stack.Screen name="Categorie" component={Categorie} />
        <Stack.Screen name="Recipe" component={Recipe} options={{title : 'About the meal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
