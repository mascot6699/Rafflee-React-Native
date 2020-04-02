import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { getCategories, getAllPromotions } from '../../actions/homepage'
import Spinner from '../../components/Spinner'
import styles from './styles'
import Footer from '../../components/Footer'
import images from '../../utils/images'
import CategoryItem from './CategoryItem'

const CategoriesScreen = () => {
  
  const GET_CATEGORIES_PROCESS = useSelector(state => state.userInfo.GET_CATEGORIES)
  const GET_ALL_PROMOTIONS_PROCESS = useSelector(state => state.userInfo.GET_ALL_PROMOTIONS)
  const categories = useSelector(state => state.homepage.categories)
  const token = useSelector(state => state.userInfo.token)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllPromotions({token: token}))
  }, [])

  renderCategoryList = () => {
    return (
      (categories || []).map((item, index) => 
        <CategoryItem key={index} item={item} />
      )
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Categories</Text>
            <TouchableOpacity>
              <Image style={styles.searchImg} source={images.header_search} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <ScrollView>
          {(GET_CATEGORIES_PROCESS || GET_ALL_PROMOTIONS_PROCESS)
            ?
            <Spinner size={100} marginTop={100} />
            :
            renderCategoryList()
          }
        </ScrollView>
      </View>
      <Footer tab='category' />
    </View>
  )
}

export default CategoriesScreen