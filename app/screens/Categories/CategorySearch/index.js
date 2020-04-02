import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CampaignItem from '../../../components/CampaignItem'
import styles from './styles'
import Footer from '../../../components/Footer'
import images from '../../../utils/images'

const CategorySearchScreen = (props) => {
  const categoryName = props.navigation.state.params.categoryName
  const allPromotions = useSelector(state => state.homepage.allPromotions)
  const dispatch = useDispatch()

  goBack = () => {
    dispatch(NavigationActions.back())
  }

  const filter = (list) => {
    let tempArr = []
    for (let i = 0; i < list.length; i++) {
      if (!list[i].categories) continue

      for (let j = 0; j < list[i].categories.length; j++) {
        if (list[i].categories[j] === categoryName) {
          tempArr.push(list[i])
          break
        }
      }
    }
    return tempArr
  }
  renderPromotionList = () => {
    return (
      filter(allPromotions).map((item, index) => 
      <View key={index} style={styles.itemContainer}>
        <CampaignItem item={item} />
      </View>
      )
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00A2FB', '#687def']} style={{ flex: 1 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{categoryName}</Text>
            <TouchableOpacity>
              <Image style={styles.shapeImg} source={images.header_shape} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>

        <ScrollView style={styles.scrollView}>
          {renderPromotionList()}
        </ScrollView>
      </View>
      <Footer tab='category' />
    </View>
  )
}

export default CategorySearchScreen