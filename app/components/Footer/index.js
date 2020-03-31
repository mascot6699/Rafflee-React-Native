import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from "react-navigation"
import styles from './styles'
import images from '../../utils/images'
import { navigationMiddleware } from '../../middleware/nav'

const Footer = (props) => {
  const { currentTab } = props

  const dispatch = useDispatch()

  onChangeTab = (tab) => {
    switch (tab) {
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
        style={currentTab === 'home' ? styles.activeFooterImgContainer : styles.footerImgContainer}
        onPress={() => onChangeTab('home')}
      >
        <Image style={styles.footerImg} source={currentTab === 'home' ? images.footer_home_active : images.footer_home} />
      </TouchableOpacity>

      <TouchableOpacity
        style={currentTab === 'category' ? styles.activeFooterImgContainer : styles.footerImgContainer}
      >
        <Image style={styles.footerImg} source={currentTab === 'category' ? images.footer_category_active : images.footer_category} />
      </TouchableOpacity>

      <TouchableOpacity
        style={currentTab === 'dashboard' ? styles.activeFooterImgContainer : styles.footerImgContainer}
        onPress={() => onChangeTab('dashboard')}
      >
        <Image style={styles.footerImg} source={currentTab === 'dashboard' ? images.footer_dashboard_active : images.footer_dashboard} />
      </TouchableOpacity>

      <TouchableOpacity
        style={currentTab === 'profile' ? styles.activeFooterImgContainer : styles.footerImgContainer}
      >
        <Image style={styles.footerImg} source={currentTab === 'profile' ? images.footer_profile_active : images.footer_profile} />
      </TouchableOpacity>
    </View>
  )

}

export default Footer