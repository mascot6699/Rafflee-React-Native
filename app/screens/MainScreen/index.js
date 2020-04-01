import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CampaignItem from '../../components/CampaignItem'
import styles from './styles'
import Footer from '../../components/Footer'
import images from '../../utils/images'

const MainScreen = () => {
  const [currentTab, setCurrentTab] = useState('highlights')

  onChangeTab = (val) => {
    setCurrentTab(val)
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
          <TouchableOpacity onPress={() => onChangeTab('highlights')}>
            <Text style={currentTab === 'highlights' ? styles.blueTabText : styles.tabText}>Highlights</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('new')}>
            <Text style={currentTab === 'new' ? styles.blueTabText : styles.tabText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('hot')}>
            <Text style={currentTab === 'hot' ? styles.blueTabText : styles.tabText}>Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeTab('endsoon')}>
            <Text style={currentTab === 'endsoon' ? styles.blueTabText : styles.tabText}>End Soon</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.itemContainer}>
            <CampaignItem />
          </View>
          <View style={styles.itemContainer}>
            <CampaignItem />
          </View>
          <View style={styles.itemContainer}>
            <CampaignItem />
          </View>
          <View style={styles.itemContainer}>
            <CampaignItem />
          </View>
        </ScrollView>
      </View>
      <Footer tab='home' />
    </View>
  )
}

export default MainScreen