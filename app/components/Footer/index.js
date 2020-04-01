import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from "react-navigation"
import styles from './styles'
import images from '../../utils/images'
import { navigationMiddleware } from '../../middleware/nav'

const Footer = (props) => {
  const { tab } = props

  const dispatch = useDispatch()

  onChangeFooterTab = (val) => {
    switch (val) {
      case 'home':
        dispatch(NavigationActions.navigate({ routeName: 'MainScreen' }))
        break
      case 'dashboard':
        dispatch(NavigationActions.navigate({ routeName: 'AuthScreen' }))
        break
    }

  }

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={tab === 'home' ? styles.activeFooterImgContainer : styles.footerImgContainer}
        onPress={() => onChangeFooterTab('home')}
      >
        <Image style={styles.footerImg} source={tab === 'home' ? images.footer_home_active : images.footer_home} />
      </TouchableOpacity>

      <TouchableOpacity
        style={tab === 'category' ? styles.activeFooterImgContainer : styles.footerImgContainer}
      >
        <Image style={styles.footerImg} source={tab === 'category' ? images.footer_category_active : images.footer_category} />
      </TouchableOpacity>

      <TouchableOpacity
        style={tab === 'dashboard' ? styles.activeFooterImgContainer : styles.footerImgContainer}
        onPress={() => onChangeFooterTab('dashboard')}
      >
        <Image style={styles.footerImg} source={tab === 'dashboard' ? images.footer_dashboard_active : images.footer_dashboard} />
      </TouchableOpacity>

      <TouchableOpacity
        style={tab === 'profile' ? styles.activeFooterImgContainer : styles.footerImgContainer}
      >
        <Image style={styles.footerImg} source={tab === 'profile' ? images.footer_profile_active : images.footer_profile} />
      </TouchableOpacity>
    </View>
  )

}

export default Footer