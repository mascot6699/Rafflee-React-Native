import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import Video from 'react-native-video'
import moment from 'moment'
import Spinner from '../../components/Spinner'
import { getCampaignData, updateFavorite } from '../../actions/campaign'
import { getUserProfile } from '../../actions/userInfo'
import styles from './styles'
import images from '../../utils/images'

const CampaignDetail = ({ route, navigation }) => {
  const { promotion_id } = route.params

  const token = useSelector(state => state.userInfo.token)
  const company = useSelector(state => state.userInfo.company)
  const GET_CAMPAIGN_DATA_PROCESS = useSelector(state => state.userInfo.GET_CAMPAIGN_DATA)
  const GET_USER_PROFILE_PROCESS = useSelector(state => state.userInfo.GET_USER_PROFILE)
  const campaignData = useSelector(state => state.campaign.campaignData)
  const userProfile = useSelector(state => state.userInfo.userProfile)

  const dispatch = useDispatch()

  const [action, setAction] = useState({})

  useEffect(() => {
    var body = {
      token: token
    }
    dispatch(getCampaignData(promotion_id, body))
    if (token && !company) dispatch(getUserProfile(token))
  }, [])

  useEffect(() => {
    setAction(campaignData.action_participate[0])
  }, [campaignData])

  const goBack = () => {
    navigation.goBack()
  }

  const _updateFavorite = () => {
    var body = {
      promotion_id: promotion_id
    }
    dispatch(updateFavorite(body, 'campaign_detail', token))
  }

  const calcRemainingDates = () => {
    const currentDate = moment(Date.now())
    const endDate = moment(Date.parse(campaignData.end_date))
    const diff = endDate.diff(currentDate)
    const diffDuration = moment.duration(diff)
    return diffDuration.days() > 0 ? diffDuration.days() : 0
  }

  const renderWinnings = () => {
    return (
      (campaignData.winnings || []).map((item, index) =>
        <Text key={index} style={styles.winningText}>{item}</Text>
      )
    )
  }

  if (GET_CAMPAIGN_DATA_PROCESS || GET_USER_PROFILE_PROCESS) return <Spinner size={100} />

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={campaignData.campaign_image ? { uri: campaignData.campaign_image } : images.default_campaign_img}
        style={styles.campaignImg}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.white_left_arrow} style={styles.whiteLeftArrow} />
          </TouchableOpacity>
          {(token !== '' && company === false) &&
            <TouchableOpacity onPress={_updateFavorite} activeOpacity={0.8}>
              <View style={styles.starContainer}>
                <Image source={campaignData.favorite ? images.trans_star_favorite : images.trans_star} style={styles.starImg} />
              </View>
            </TouchableOpacity>
          }
        </View>
      </ImageBackground>
      <View style={styles.otherInfoContainer}>
        <View style={styles.otherInfoItem}>
          <Image source={images.clock_active} style={styles.clockImg} />
          <Text style={styles.otherInfoText}>{calcRemainingDates()} days</Text>
        </View>
        <View style={styles.otherInfoItem}>
          <Image source={images.footer_profile_active} style={styles.profileImg} />
          <Text style={styles.otherInfoText}>0 Entries</Text>
        </View>
        <View style={styles.otherInfoItem}>
          <Image source={images.footer_dashboard_active} style={styles.dashboardImg} />
          <Text style={styles.otherInfoText}>{campaignData.number_of_eligible_people} Participants</Text>
        </View>
      </View>
      <View style={styles.campaignInfoContainer}>
        <Text style={styles.campaignNameText}>{campaignData.campaign_name}</Text>
        <Text style={styles.descriptionText}>{campaignData.description}</Text>
        {(action.url_video !== '' && userProfile.phone_number_verification === true) &&
          <Video
            source={{ uri: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" }}
            controls
            style={styles.videoContainer}
            resizeMode='cover'
          />
        }
        <Text style={styles.giveAwayTitleText}>GiveAways</Text>
        {renderWinnings()}
      </View>
      <View style={styles.actionsContainer}>
        
      </View>

    </ScrollView>
  )
}

export default CampaignDetail