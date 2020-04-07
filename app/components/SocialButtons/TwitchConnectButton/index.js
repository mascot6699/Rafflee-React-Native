import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const TwitchConnectButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.twitchIconContainer}>
              <Image source={images.twitch_icon} style={styles.twitchIcon} />
            </View>
            <Text style={styles.socialText}>
              Connected with Twitch
            </Text>
          </View>
          <Image source={images.verified_icon} style={styles.verifiedImg} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}

export default TwitchConnectButton