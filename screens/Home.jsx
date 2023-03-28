import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Text } from 'react-native'
import Header from '../widgets/Header'
import theme from '../theme'
import CharacterCard from "../widgets/CharacterCard"
import FavoriteCard from "../widgets/FavoriteCard"

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
               <FavoriteCard
                    name="Rick Sanchez"
                    specie="Human"
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

})