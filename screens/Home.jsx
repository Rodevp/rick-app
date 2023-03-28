import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Text } from 'react-native'
import Header from '../widgets/Header'
import theme from '../theme'
import CharacterCard from "../widgets/CharacterCard"
import Logo from "../widgets/Logo"

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
                <View
                    style={{
                        width: "90%",
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        marginBottom: 5,
                        backgroundColor: theme.colors.background,
                        elevation: 2,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}
                >
                    <Logo
                        size={60}
                    />
                    <View
                        style={{
                            width: "50%",
                            paddingHorizontal: 4
                        }}
                    >
                        <Text 
                            style={{
                                fontSize: 22,
                                fontWeight: "500",
                                color: theme.colors.textColor
                            }}
                        >Rick Sanchez</Text>
                        <Text
                            style={{
                                fontSize: 16
                            }}
                        >Human</Text>
                    </View>
                    <View
                        style={{
                            width: 100,
                            height: 35,
                            borderRadius: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: theme.colors.green
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                color: theme.colors.background
                            }}
                        >
                            Info
                        </Text>
                    </View>
                </View>
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