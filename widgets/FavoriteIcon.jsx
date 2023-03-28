import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../theme';
import Badget from './Badget';

export default function FavoriteIcon() {
  return (
    <View
        style={styles.container}
    >
        <Badget />  
        <MaterialIcons name="favorite" size={30} color={theme.colors.red} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})