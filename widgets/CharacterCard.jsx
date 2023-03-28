import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

export default function CharacterCard(props) {

    const {name, status, species, origin } = props

    return (
        <View
            style={styles.card}
        >
            <Image
                source={""}
                style={{
                    borderRadius: 5,
                    width: 120,
                    height: 80,
                    marginBottom: 5,
                    backgroundColor: "gray"
                }}
            />
            <View
                style={styles.cardTitleContainer}
            >
                <Text
                    style={styles.cardTitle}
                >
                    {name}
                </Text>
                <MaterialIcons name="favorite" size={25} color="black" />
            </View>
            <View
                style={styles.cardDescriptionCotainer}
            >
                <Text style={styles.cardDescription}>{status}</Text>
                <Text style={styles.cardDescription}>{species}</Text>
            </View>
            <Text style={styles.cardOther} >{origin}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: theme.colors.background,
        elevation: 2
    },
    cardTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 120
    },
    cardTitle: {
        fontSize: 14
    },
    cardDescriptionCotainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5
    },
    cardDescription: {
        fontSize: 14
    },
    cardOther: {
        width: 120,
        textAlign: "center",
        fontSize: 15
    }
})