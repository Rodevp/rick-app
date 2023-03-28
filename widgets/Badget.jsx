import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

export default function Badget() {
  return (
    <View
        style={styles.container}
    >
      <Text style={styles.text}>5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.orange,
        width: 21, 
        height: 21,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 21
    },
    text: {
        color: theme.colors.background,
        fontSize: 12
    }
})