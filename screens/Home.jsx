import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View } from 'react-native'
import Header from '../widgets/Header'
import theme from '../theme'
import CharacterCard from "../widgets/CharacterCard"

export default function Home() {
    return (
        <SafeAreaView
            style={styles.home}
        >
            <Header />
            <View>
                <CharacterCard
                    name="Rick Sanchez"
                    status="Alive"
                    species="Human"
                    origin="Earth (C-137)"
                />
                <CharacterCard
                    name="Rick Sanchez"
                    status="Alive"
                    species="Human"
                    origin="Earth (C-137)"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    card: {
        width: 150,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 5,
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