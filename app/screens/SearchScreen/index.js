import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Spinner from '../../components/Spinner'
import { getAllPromotions } from '../../actions/homepage'
import CampaignItem from '../../components/CampaignItem'
import images from '../../utils/images'
import styles from './styles'

const SearchScreen = ({ navigation }) => {

  const allPromotions = useSelector(state => state.homepage.allPromotions)
  const GET_ALL_PROMOTIONS_PROCESS = useSelector(state => state.userInfo.GET_ALL_PROMOTIONS)
  const token = useSelector(state => state.userInfo.token)
  const dispatch = useDispatch()

  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    dispatch(getAllPromotions({ token: token }))
  }, [])

  renderPromotionList = () => {
    return (
      (allPromotions || []).map((item, index) => 
      <View key={index} style={styles.itemContainer}>
        <CampaignItem item={item} menuname='all' />
      </View>
      )
    )
  }
  
  const goBack = () => {
    navigation.goBack()
  }
  // if (GET_ALL_PROMOTIONS_PROCESS)
  //   return <Spinner size={100} />

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.searchImg} source={images.header_search} />
              <TextInput
                style={styles.searchInput}
                onChangeText={text => setSearchKey(text)}
                value={searchKey}
                placeholder='Search'
                placeholderTextColor='white'
                autoCapitalize='none'
                selectionColor='white'
                autoFocus
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => setSearchKey('')}>
                <Image source={images.header_x_circle} style={styles.xCircle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={goBack}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollView}>
          
        </ScrollView>
      </View>
    </View>
  )
}

export default SearchScreen