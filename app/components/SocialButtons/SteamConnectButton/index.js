import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const SteamConnectButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.steamIconContainer}>
              <Image source={images.steam_icon} style={styles.steamIcon} />
            </View>
            <Text style={styles.socialText}>
              Connected with Steam
            </Text>
          </View>
          <Image source={images.verified_icon} style={styles.verifiedImg} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}

export default SteamConnectButton