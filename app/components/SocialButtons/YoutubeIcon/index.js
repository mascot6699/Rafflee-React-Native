import React from 'react'
import { View, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const YoutubeIcon = () => {
  return (
    <View style={styles.youtubeIconContainer}>
      <Image source={images.youtube_icon} style={styles.youtubeIcon} />
    </View>
  )
}

export default YoutubeIcon