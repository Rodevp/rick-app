import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Episodes from '../screens/Episodes';
import Favs from '../screens/Favs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Tab.Screen name='Characters' component={Home} />
      <Tab.Screen name='Episodes' component={Episodes} />
      <Tab.Screen name='Favorites' component={Favs} />
    </Tab.Navigator>
  );
}

export default Tabs