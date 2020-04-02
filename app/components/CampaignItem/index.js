import React from 'react'
import { View, Image, Text } from 'react-native'
import WinningText from './winningText'
import images from '../../utils/images'
import styles from './styles'
import { scaleHeight } from '../../utils/styles/mixins'

const CampaignItem = (props) => {
  const { item } = props

  renderWinnings = () => {
    return (
      (item.winnings || []).map((name, index) =>
        <WinningText key={index} name={name} />
      )
    )
  }
  return (
    <View style={styles.container}>
      <Image source={item.campaign_image ? { uri: item.campaign_image } : images.default_campaign_img} style={styles.campaignImg} />
      <View style={styles.campaignDescription}>
        <Text style={styles.titleText}>{item.campaign_name}</Text>
        <Text
          style={styles.descriptionText}
          numberOfLines={1}
        >
          {item.description}
        </Text>
        <View style={styles.winningList}>
          {renderWinnings()}
        </View>
      </View>
    </View>
  )
}

export default CampaignItem