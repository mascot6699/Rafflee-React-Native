import React from 'react'
import { View, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const SteamIcon = () => {
  return (
    <View style={styles.steamIconContainer}>
      <Image source={images.steam_icon} style={styles.steamIcon} />
    </View>
  )
}

export default SteamIcon