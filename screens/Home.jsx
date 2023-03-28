import { View, StyleSheet } from 'react-native'
import Header from '../widgets/Header'

export default function Home() {
  return (
    <View
        style={styles.home}
    >
        <Header />
    </View>
  )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "red"
    }
})