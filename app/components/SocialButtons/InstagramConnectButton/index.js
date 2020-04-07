import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const InstagramConnectButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.instagramIconContainer}>
              <Image source={images.instagram_icon} style={styles.instagramIcon} />
            </View>
            <Text style={styles.socialText}>
              Connected with Instagram
            </Text>
          </View>
          <Image source={images.verified_icon} style={styles.verifiedImg} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}

export default InstagramConnectButton