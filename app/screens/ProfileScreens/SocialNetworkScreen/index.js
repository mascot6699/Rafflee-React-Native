import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Footer from '../../../components/Footer'
import FBConnectButton from '../../../components/SocialButtons/FBConnectButton'
import TwitterConnectButton from '../../../components/SocialButtons/TwitterConnectButton'
import TwitchConnectButton from '../../../components/SocialButtons/TwitchConnectButton'
import YoutubeConnectButton from '../../../components/SocialButtons/YoutubeConnectButton'
import InstagramConnectButton from '../../../components/SocialButtons/InstagramConnectButton'
import SteamConnectButton from '../../../components/SocialButtons/SteamConnectButton'
import images from '../../../utils/images'
import styles from './styles'

const SocialNetworkScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Social Network</Text>
            <TouchableOpacity>
              <Image style={styles.menudotsImg} source={images.header_menudots} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <FBConnectButton />
        <TwitterConnectButton />
        <TwitchConnectButton />
        <YoutubeConnectButton />
        <InstagramConnectButton />
        <SteamConnectButton />
        
      </View>
      <Footer tab='profile' />
    </View>
  )
}

export default SocialNetworkScreen