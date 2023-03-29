import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Episodes from '../screens/Episodes'
import Favs from '../screens/Favs'
import Home from '../screens/Home'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.green
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={28} color={color} />,
          tabBarIconStyle: {
            marginBottom: -5
          },
          tabBarLabelStyle: {
            marginBottom: 8
          }
        }}
        name='Characters'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="format-list-bulleted" size={28} color={color} />,
          tabBarIconStyle: {
            marginBottom: -5
          },
          tabBarLabelStyle: {
            marginBottom: 8
          }
        }}
        name='Episodes'
        component={Episodes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite" size={28} color={color} />,
          tabBarIconStyle: {
            marginBottom: -5
          },
          tabBarLabelStyle: {
            marginBottom: 8
          }
        }}
        name='Favorites'
        component={Favs}
      />
    </Tab.Navigator>
  );
}

export default Tabs