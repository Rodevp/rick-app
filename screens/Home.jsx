import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from 'react-native'
import Header from '../widgets/Header'
import theme from '../theme'

export default function Home() {
  return (
    <SafeAreaView
        style={styles.home}
    >
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: theme.colors.background
    }
})