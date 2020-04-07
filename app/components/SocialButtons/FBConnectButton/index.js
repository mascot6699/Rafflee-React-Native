import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import images from '../../../utils/images'
import styles from './styles'

const FBConnectButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.fbIconContainer}>
              <Text style={styles.iconText}>f</Text>
            </View>
            <Text style={styles.socialText}>
              Connected with FaceBook
            </Text>
          </View>
          <Image source={images.verified_icon} style={styles.verifiedImg} />
        </View>
      </View>
    </TouchableOpacity>
  )
  
}

export default FBConnectButton