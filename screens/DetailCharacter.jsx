import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import BackHeader from '../widgets/BackHeader'
import { useNavigation } from '@react-navigation/native'
import theme from '../theme'

export default function DetailCharacter() {

  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <BackHeader
        navigation={navigation}
      />
      <Image
        source={""}
        style={styles.banner}
      />
      <View
        style={styles.contentAvatar}
      >
        <View
          style={styles.avatar}
        >
          <Text
            style={styles.textAvatar}
          >
            R
          </Text>
        </View>
      </View>
      <Text
        style={styles.title}
      >
        Rick Sanchez
      </Text>
      <View
        style={styles.statsOne}
      >
        <Text style={styles.statsOneText}>Male</Text>
        <Text style={styles.statsOneText}>Citadel of Ricks</Text>
        <Text style={styles.statsOneText}>Human</Text>
      </View>
      <View
        style={styles.statsTwo}
      >
        <Text style={styles.statsTwoText}>Earth (C-137)</Text>
        <Text style={styles.statsTwoText}>Alive</Text>
      </View>
      <View
        style={styles.episodes}
      >
        <Text style={styles.episodesText}>Episodes: 51</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.background
  },  
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "gray"
  },
  contentAvatar: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "red",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    position: "absolute",
    bottom: -50,
    borderColor: theme.colors.background,
    backgroundColor: theme.colors.greenLigth
  },
  textAvatar: {
    fontSize: 40,
    color: theme.colors.background
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 30,
    fontSize: 40,
    color: theme.colors.textColor
  },
  statsOne: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20
  },
  statsOneText: {
    fontSize: 25,
    color: theme.colors.textColor
  },
  statsTwo: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: "6.2%",
    marginBottom: 20
  },
  statsTwoText: {
    fontSize: 25,
    marginRight: 15
  },
  episodes: {
    width: "100%",
    paddingLeft: "6.2%"
  },
  episodesText: {
    fontSize: 25,
    color: theme.colors.textColor
  }
})