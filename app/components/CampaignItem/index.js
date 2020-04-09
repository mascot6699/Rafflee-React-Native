import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import WinningText from './winningText'
import { updateFavorite } from '../../actions/homepage'
import images from '../../utils/images'
import styles from './styles'

const CampaignItem = (props) => {
  const { item, menuname } = props
  const navigation = useNavigation()

  const token = useSelector(state => state.userInfo.token)
  const company = useSelector(state => state.userInfo.company)

  const dispatch = useDispatch()

  const renderWinnings = () => {
    return (
      (item.winnings || []).map((name, index) =>
        <WinningText key={index} name={name} />
      )
    )
  }
  const update = () => {
    var body = {
      promotion_id: item.pk
    }
    dispatch(updateFavorite(body, menuname, token))
  }

  const goToCampaignDetail = () => {
    navigation.navigate('CampaignDetailScreen', { promotion_id: item.pk })
  }

  return (
    <TouchableOpacity onPress={goToCampaignDetail} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image source={item.campaign_image ? { uri: item.campaign_image } : images.default_campaign_img} style={styles.campaignImg} />
        <View style={styles.campaignDescription}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.titleText}>{item.campaign_name}</Text>
            {(token !== '' && company === false) &&
              <TouchableOpacity onPress={update} activeOpacity={0.8}>
                <View style={styles.starContainer}>
                  <Image source={item.favorite ? images.trans_star_favorite : images.trans_star} style={styles.starImg} />
                </View>
              </TouchableOpacity>
            }
          </View>
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
    </TouchableOpacity>

  )
}

export default CampaignItem