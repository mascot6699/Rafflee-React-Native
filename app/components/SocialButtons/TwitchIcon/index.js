import React from 'react'
import { View, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const TwitchIcon = () => {
  return (
    <View style={styles.twitchIconContainer}>
      <Image source={images.twitch_icon} style={styles.twitchIcon} />
    </View>
  )
}

export default TwitchIcon