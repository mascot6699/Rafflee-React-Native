import { Colors, Typography, Mixins } from '../../../utils/styles'
import { StyleSheet, Dimensions } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'
import { colors } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').width * 0.5, 
    paddingLeft: scaleWidth(20),
    paddingRight: scaleWidth(10),
    paddingTop: scaleHeight(25),
    paddingBottom: scaleHeight(15),
    backgroundColor: 'white',
    borderRadius: scaleHeight(10),
    borderColor: Colors.GRAY_BORDER,
    borderWidth: 3
  },
  campaignImg: {
    width: '40%',
    height: '80%',
    resizeMode: 'stretch',
  },
  campaignDescription: {
    flex: 1,
    paddingLeft: scaleWidth(20),
  },
  titleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20
  },
  descriptionText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
    marginTop: scaleHeight(7)
  },
  carouselContainer: {
    marginTop: scaleHeight(20),
    paddingBottom: scaleHeight(20),
    borderBottomColor: Colors.GRAY_BORDER,
    borderBottomWidth: 1
  },
})

export default styles