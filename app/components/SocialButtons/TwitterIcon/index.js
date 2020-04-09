import React from 'react'
import { View, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const TwitterIcon = () => {
  return (
    <View style={styles.twitterIconContainer}>
      <Image source={images.twitter_icon} style={styles.twitterIcon} />
    </View>
  )
}

export default TwitterIcon