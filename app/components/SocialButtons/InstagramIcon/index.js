import React from 'react'
import { View, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const InstagramIcon = () => {
  return (
    <View style={styles.instagramIconContainer}>
      <Image source={images.instagram_icon} style={styles.instagramIcon} />
    </View>
  )
}

export default InstagramIcon