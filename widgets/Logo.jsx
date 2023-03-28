import { View, Image } from 'react-native'
import theme from '../theme'

export default function Logo({ size = 80 }) {
  return (
    <View
        style={{
            height: size,
            width: size,
            borderRadius: size,
            borderColor: theme.colors.greenLigth,
            borderWidth: 2,
            backgroundColor: theme.colors.background
        }}
    >
        <Image
            style={{
                width: size,
                height: size,
                resizeMode: "contain"
            }}
            source={require('../assets/rickandmorty.png')}
        />
    </View>
  )
}
