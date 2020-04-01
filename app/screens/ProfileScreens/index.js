import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import Footer from '../../components/Footer'
import images from '../../utils/images'

const ProfileSummaryScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Profile</Text>
            <TouchableOpacity>
              <Image style={styles.searchImg} source={images.header_search} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.profileImgContainer}>
          
        </View>
      </View>
      <Footer tab='profile' />
    </View>
  )
}

export default ProfileSummaryScreen