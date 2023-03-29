import { View, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

export default function BackHeader({ navigation }) {

    const back = () => navigation.goBack()

    return (
        <View
            style={styles.headerBack}
        >
            <Pressable
                onPress={back}
            >
                <MaterialIcons name="arrow-back" size={30} color={theme.colors.green} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBack: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        backgroundColor: theme.colors.background,
        paddingHorizontal: 5
    }
})