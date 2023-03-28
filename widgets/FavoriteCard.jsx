import { View, Text, StyleSheet } from 'react-native'
import Logo from "../widgets/Logo"
import theme from '../theme'

export default function FavoriteCard(props) {

    const { name, specie } = props

    return (
        <View
            style={styles.container}
        >
            <Logo
                size={60}
            />
            <View
                style={styles.description}
            >
                <Text
                    style={styles.title}
                >{name}</Text>
                <Text
                    style={styles.subtitle}
                >{specie}</Text>
            </View>
            <View
                style={styles.btn}
            >
                <Text
                    style={styles.btnText}
                >
                    Info
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,
        backgroundColor: theme.colors.background,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    description: {
        width: "50%",
        paddingHorizontal: 4
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: theme.colors.textColor
    },
    subtitle: {
        fontSize: 16
    },
    btn: {
        width: 100,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.green
    },
    btnText: {
        fontSize: 22,
        color: theme.colors.background
    }
})