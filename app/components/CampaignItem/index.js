import React from 'react'
import { View, Image, Text } from 'react-native'
import WinningText from './winningText'
import images from '../../utils/images'
import styles from './styles'
import { scaleHeight } from '../../utils/styles/mixins'

const CampaignItem = () => {
  return (
    <View style = {styles.container}>
      <Image source={images.campaign_profile} style={styles.campaignImg} />
      <View style={styles.campaignDescription}>
        <Text style={styles.titleText}>Pewdiepie</Text>
        <Text 
          style={styles.descriptionText} 
          numberOfLines={1}
        >
          Get a chance to win your first order. Have a fun.
        </Text>
        <View style={styles.winningList}>
          <WinningText />
          <WinningText />
          <WinningText />
          <WinningText />
        </View>
      </View>
    </View>
  )
}

export default CampaignItem