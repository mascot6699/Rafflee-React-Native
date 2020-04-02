import React from 'react'
import { useDispatch } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import images from '../../../utils/images'

const CategoryItem = (props) => {
  const { item } = props
  const dispatch = useDispatch()

  findPromotions = () => {
    dispatch(NavigationActions.navigate({routeName: 'CategorySearchScreen', params: {categoryName: item.name}}))
  }
  return (
    <TouchableOpacity onPress={findPromotions} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.categoryText}>{item.name}</Text>
          <Image source={images.black_right_arrow} style={styles.blackRightArrow} />
        </View>
      </View>
    </TouchableOpacity>
    
  )
}

export default CategoryItem