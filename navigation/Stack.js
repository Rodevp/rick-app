import { createStackNavigator } from '@react-navigation/stack'
import Episodes from '../screens/Episodes'
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
            
        </NavigatorStack.Navigator>
    )
}

export default Stack