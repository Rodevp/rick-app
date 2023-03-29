import { createStackNavigator } from '@react-navigation/stack'
import DetailCharacter from '../screens/DetailCharacter'
import Favs from '../screens/Favs'
import Tabs from './BottomTabs'

const NavigatorStack = createStackNavigator()

function Stack() {
    return (
        <NavigatorStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <NavigatorStack.Screen name='Home' component={Tabs} />
            <NavigatorStack.Screen name='Favorites' component={Favs} />
            <NavigatorStack.Screen name='DetailCharacter' component={DetailCharacter} />
        </NavigatorStack.Navigator>
    )
}

export default Stack