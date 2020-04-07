import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import images from '../../../utils/images'
import { scrollInterpolator, animatedStyles } from '../../../utils/animations';
import { scaleWidth } from '../../../utils/styles/mixins'
import styles from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH - scaleWidth(50)
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.5)

const HotPromotionCarousel = () => {
  const hotPromotions = useSelector(state => state.homepage.hotPromotions)

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item.campaign_image ? { uri: item.campaign_image } : images.default_campaign_img} style={styles.campaignImg} />
        <View style={styles.campaignDescription}>
          <Text style={styles.titleText}>{item.campaign_name}</Text>
          <Text
            style={styles.descriptionText}
            numberOfLines={3}
          >
            {item.description}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Carousel
        layout='stack'
        layoutCardOffset={18}
        data={hotPromotions}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        // onSnapToItem={(index) => console.log(index)}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}  
        loop={true} 
      />
    </View>
  )
}

export default HotPromotionCarousel