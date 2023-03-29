import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackHeader from '../widgets/BackHeader'
import theme from '../theme'

export default function Episodes() {

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <BackHeader
        navigation={navigation}
      />
      <Text>Episodes</Text>
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