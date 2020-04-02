import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Spinner from '../../components/Spinner'
import {
  getHighlightedPromotions,
  getHotPromotions,
  getNewPromotions,
  getBestPromotions
} from '../../actions/homepage'
import CampaignItem from '../../components/CampaignItem'
import styles from './styles'
import Footer from '../../components/Footer'
import images from '../../utils/images'

const MainScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('highlight')

  const hotPromotions = useSelector(state => state.homepage.hotPromotions)
  const highlightedPromotions = useSelector(state => state.homepage.highlightedPromotions)
  const newPromotions = useSelector(state => state.homepage.newPromotions)
  const bestOfferPromotions = useSelector(state => state.homepage.bestOfferPromotions)

  const isProcessing_1 = useSelector(state => state.userInfo.GET_HOT_PROMOTIONS)
  const isProcessing_2 = useSelector(state => state.userInfo.GET_HIGHLIGHTED_PROMOTIONS)
  const isProcessing_3 = useSelector(state => state.userInfo.GET_NEW_PROMOTIONS)
  const isProcessing_4 = useSelector(state => state.userInfo.GET_BEST_PROMOTIONS)

  const token = useSelector(state => state.userInfo.token)
  const dispatch = useDispatch()

  const promotionList = {
    highlight: highlightedPromotions,
    new: newPromotions,
    hot: hotPromotions,
    bestoffer: bestOfferPromotions
}
  
  useEffect(() => {
    switch (currentTab) {
      case 'highlight': 
        dispatch(getHighlightedPromotions({ token: token }))
        break
      case 'new':
        dispatch(getNewPromotions({ token: token }))
        break
      case 'bestoffer':
        dispatch(getBestPromotions({ token: token }))
        break
      case 'hot':
        dispatch(getHotPromotions({ token: token }))
        break
    }
  }, [currentTab])

  onChangeTab = (val) => {
    setCurrentTab(val)
  }

  renderPromotionList = () => {
    return (
      (promotionList[currentTab] || []).map((item, index) => 
      <View key={index} style={styles.itemContainer}>
        <CampaignItem item={item} />
      </View>
      )
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Deals</Text>
            <TouchableOpacity>
              <Image style={styles.searchImg} source={images.header_search} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => onChangeTab('highlight')}>
            <Text style={currentTab === 'highlight' ? styles.blueTabText : styles.tabText}>Highlights</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('new')}>
            <Text style={currentTab === 'new' ? styles.blueTabText : styles.tabText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('hot')}>
            <Text style={currentTab === 'hot' ? styles.blueTabText : styles.tabText}>Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('bestoffer')}>
            <Text style={currentTab === 'bestoffer' ? styles.blueTabText : styles.tabText}>End Soon</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {(isProcessing_1 || isProcessing_2 || isProcessing_3 || isProcessing_4)
            ?
            <Spinner size={100} marginTop={100} />
            :
            renderPromotionList()
          }
          
        </ScrollView>
      </View>
      <Footer tab='home' />
    </View>
  )
}

export default MainScreen