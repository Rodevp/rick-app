import { useNavigation } from '@react-navigation/native'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'
import BackHeader from '../widgets/BackHeader'


export default function Favs() {

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <BackHeader
        navigation={navigation}
      />
      <Text>Favs</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.background
  }
})