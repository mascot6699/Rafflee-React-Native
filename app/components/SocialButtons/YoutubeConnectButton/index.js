import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const YoutubeConnectButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.youtubeIconContainer}>
              <Image source={images.youtube_icon} style={styles.youtubeIcon} />
            </View>
            <Text style={styles.socialText}>
              Connected with Youtube
            </Text>
          </View>
          <Image source={images.verified_icon} style={styles.verifiedImg} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}

export default YoutubeConnectButton