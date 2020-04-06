import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import images from '../../../utils/images'

const SubmenuItem = (props) => {
  const { name, avatar } = props
  const navigation = useNavigation()
  const company = useSelector(state => state.userInfo.company)

  const goToDetail = () => {
    if (name === 'Account') {
      navigation.navigate(company ? 'CompanyAccountScreen' : 'UserAccountScreen', {avatar: avatar})
    }
    else if (name === 'Social Network')
      navigation.navigate('SocialNetworkScreen')
    else if (name === 'Help')
      navigation.navigate('HelpScreen')
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goToDetail}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.categoryText}>{name}</Text>
          <Image source={images.black_right_arrow} style={styles.blackRightArrow} />
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default SubmenuItem