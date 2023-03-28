import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'
import FavoriteIcon from './FavoriteIcon'
import Logo from './Logo'

export default function Header() {
    return (
        <View
            style={{
                ...styles.header,
                backgroundColor: theme.colors.background,
                borderColor: "black",
                borderWidth: 1
            }}
        >
            <Logo />
            <Text
                style={{
                    ...styles.title,
                    color: theme.colors.textColor
                }}
            >
                Rick And Morty
            </Text>
            <FavoriteIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 30,
        width: "60%",
        fontWeight: '500'
    }
})

